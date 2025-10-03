"use client";
import React, { useEffect, useRef } from "react";
import {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite,
    Mouse,
    MouseConstraint,
    Events,
    Body,
} from "matter-js";

type Props = {
    children?: React.ReactNode;
    className?: string;
    // optional container height class, defaults to h-[400px]
    containerHeightClass?: string;
};

interface ExtendedMouse extends Mouse {
    mousewheel?: (event: Event) => void;
    mousedown?: (e: Event) => void;
    mousemove?: (e: Event) => void;
    mouseup?: (e: Event) => void;
}

const MatterScene: React.FC<Props> = ({
                                          children,
                                          className = "",
                                          containerHeightClass = "h-[400px]",
                                      }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const engineRef = useRef(Engine.create());
    const runnerRef = useRef<Runner | null>(null);
    const renderRef = useRef<Render | null>(null);
    const bodiesRef = useRef<{
        rects: Body[];
        circles: Body[];
        pills: Body[];
    }>({ rects: [], circles: [], pills: [] });

    // track whether engine is running to avoid double-start
    const runningRef = useRef(false);

    useEffect(() => {
        const box = containerRef.current;
        if (!box) return;
        const engine = engineRef.current;

        // local vars to keep render/runner references for stop
        let render: Render | null = null;
        let runner: Runner | null = null;

        // START MATTER (wrapped so observer can start/stop)
        const startMatter = () => {
            if (runningRef.current) return;
            runningRef.current = true;

            // ensure gravity is on so things fall
            try {
                engine.world.gravity.y = 0.8;
            } catch (e) { /* ignore */ }

            // create renderer
            render = Render.create({
                element: box,
                engine,
                options: {
                    width: box.clientWidth,
                    height: box.clientHeight,
                    wireframes: false,
                    background: "transparent",
                },
            });
            renderRef.current = render;

            // make sure canvas sits under DOM children and fills container
            const canvas = render.canvas as HTMLCanvasElement;
            canvas.style.position = "absolute";
            canvas.style.left = "0";
            canvas.style.top = "0";
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.zIndex = "0";
            // canvas must accept pointer events so it can receive mouse/touch
            canvas.style.pointerEvents = "auto";

            // collect DOM elements INSIDE this container only
            const matterElems = Array.from(
                box.querySelectorAll<HTMLElement>(".dm-matter-elem")
            );
            const matterCircles = Array.from(
                box.querySelectorAll<HTMLElement>(".dm-matter-elem-circle")
            );
            const matterPills = Array.from(
                box.querySelectorAll<HTMLElement>(".dm-matter-elem-pill")
            );

            // Force visual elements to let pointer events pass through to the canvas,
            // while keeping them visually on top (zIndex = 1).
            const ensurePassThrough = (elList: HTMLElement[]) => {
                elList.forEach((el) => {
                    el.style.pointerEvents = "none"; // critical: pass events to canvas
                    el.style.whiteSpace = "nowrap";
                    el.style.zIndex = "1";
                    // keep positioning via absolute as the user likely uses that in Tailwind
                    if (getComputedStyle(el).position === "static") {
                        el.style.position = "absolute";
                    }
                });
            };
            ensurePassThrough(matterElems);
            ensurePassThrough(matterCircles);
            ensurePassThrough(matterPills);

            // shape creation functions (same logic as before)
            function createRectangles() {
                return matterElems.map((el, i) => {
                    const spawnOffset = i * 50; // stagger effect
                    const body = Bodies.rectangle(
                        el.offsetLeft + el.offsetWidth / 2,
                        el.offsetTop + el.offsetHeight / 2 - spawnOffset, // spawn higher
                        el.offsetWidth,
                        el.offsetHeight,
                        {
                            density: 0.01,
                            friction: 0.1,
                            restitution: 0.5,
                            render: {
                                fillStyle: "transparent",
                                strokeStyle: "transparent",
                            },
                        }
                    );
                    Composite.add(engine.world, body);
                    return body;
                });
            }

            function createCircles() {
                return matterCircles.map((el, i) => {
                    const spawnOffset = i * 50; // stagger effect
                    const radius = Math.max(el.offsetWidth, el.offsetHeight) / 2;
                    const body = Bodies.circle(
                        el.offsetLeft + el.offsetWidth / 2,
                        el.offsetTop + el.offsetHeight / 2 - spawnOffset, // spawn higher
                        radius,
                        {
                            density: 0.01,
                            friction: 0.1,
                            restitution: 0.5,
                            render: {
                                fillStyle: "transparent",
                                strokeStyle: "transparent",
                            },
                        }
                    );
                    Composite.add(engine.world, body);
                    return body;
                });
            }

            function createPills() {
                return matterPills.map((el) => {
                    const w = el.offsetWidth;
                    const h = el.offsetHeight;
                    const rect = el.getBoundingClientRect();
                    const parentRect = el.parentElement!.getBoundingClientRect();

                    // Position relative to container, so negative tops work fine
                    const x = rect.left - parentRect.left + w / 2;
                    const y = rect.top - parentRect.top + h / 2;

                    const r = h / 2;

                    const leftCircle = Bodies.circle(x - w / 2 + r, y, r, {
                        density: 0.01,
                        friction: 0.1,
                        restitution: 0.5,
                    });
                    const rightCircle = Bodies.circle(x + w / 2 - r, y, r, {
                        density: 0.01,
                        friction: 0.1,
                        restitution: 0.5,
                    });
                    const middleRect = Bodies.rectangle(x, y, w - h, h, {
                        density: 0.01,
                        friction: 0.1,
                        restitution: 0.5,
                    });

                    const pill = Body.create({
                        parts: [leftCircle, rightCircle, middleRect],
                        friction: 0.1,
                        restitution: 0.5,
                        render: {
                            fillStyle: "transparent",
                            strokeStyle: "transparent",
                        },
                    });

                    Composite.add(engine.world, pill);
                    return pill;
                });
            }

            function createBoundaries() {
                const w = box!.clientWidth;
                const h = box!.clientHeight;
                // use thin-but-catchy boundaries so objects don't slip out; they are invisible
                const ground = Bodies.rectangle(w / 2, h + 10, w + 20, 20, {
                    isStatic: true,
                    render: {
                        fillStyle: "transparent",
                        strokeStyle: "transparent",
                    },
                });
                const left = Bodies.rectangle(-10, h / 2, 20, h + 20,
                    {
                        isStatic: true,
                        render: {
                            fillStyle: "transparent",
                            strokeStyle: "transparent",
                        },
                    }
                );
                const right = Bodies.rectangle(w + 10, h / 2, 20, h + 20,
                    {
                        isStatic: true,
                        render: {
                            fillStyle: "transparent",
                            strokeStyle: "transparent",
                        },
                    }
                );
                const top = Bodies.rectangle(w / 2, -3000, w + 20, 20,
                    {
                        isStatic: true,
                        render: {
                            fillStyle: "transparent",
                            strokeStyle: "transparent",
                        },
                    }
                );
                Composite.add(engine.world, [ground, left, right, top]);
            }

            // create bodies and store refs
            bodiesRef.current.rects = createRectangles();
            bodiesRef.current.circles = createCircles();
            bodiesRef.current.pills = createPills();
            createBoundaries();

            // runner + render
            runner = Runner.create();
            runnerRef.current = runner;
            Runner.run(runner, engine);
            Render.run(render);

            // mouse & drag
            const mouse = Mouse.create(canvas);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse,
                constraint: { stiffness: 0.2, render: { visible: false } },
            });
            Composite.add(engine.world, mouseConstraint);
            render.mouse = mouse;

            // ====== IMPORTANT: restore the exact scroll-friendly handlers ======
            // This block is the reason your original code allowed page scrolling
            // even when the cursor was over the matter-box. It removes the default
            // mousewheel handlers and attaches passive touch handlers.
            try {
                const el = (mouseConstraint.mouse as ExtendedMouse).element as HTMLElement | Document | null;
                const mousewheelHandler = (mouseConstraint.mouse as ExtendedMouse).mousewheel;
                if (el && mousewheelHandler) {
                    try { el.removeEventListener("mousewheel", mousewheelHandler as EventListener); } catch {}
                    try { el.removeEventListener("DOMMouseScroll", mousewheelHandler as EventListener); } catch {}
                    try { el.removeEventListener("wheel", mousewheelHandler as EventListener); } catch {}
                }

                // Touch handlers: re-add with passive touchstart so normal scrolling works
                // and only forward touchmove/up when there is an active dragged body
                try {
                    const m = (mouseConstraint.mouse as ExtendedMouse);
                    if (el && m) {
                        try { el.removeEventListener("touchstart", m.mousedown as EventListener); } catch {}
                        try { el.removeEventListener("touchmove", m.mousemove as EventListener); } catch {}
                        try { el.removeEventListener("touchend", m.mouseup as EventListener ); } catch {}
                        // passive touchstart (lets scroll happen when not dragging)
                        el.addEventListener("touchstart", m.mousedown as EventListener, { passive: true } as AddEventListenerOptions);
                        // only forward move/up while dragging a body (prevents blocking scroll)
                        // touchmove wrapper
                        if (m.mousemove) {
                            const touchMove = ((e: Event) => {
                                const te = e as TouchEvent;
                                if (mouseConstraint.body) {
                                    m.mousemove?.call(m, te as unknown as MouseEvent);
                                    te.preventDefault();
                                }
                            }) as EventListener;
                            el.addEventListener("touchmove", touchMove);
                        }

                        if (m.mouseup) {
                            const touchEnd = ((e: Event) => {
                                const te = e as TouchEvent;
                                if (mouseConstraint.body) {
                                    m.mouseup?.call(m, te as unknown as MouseEvent);
                                }
                            }) as EventListener;
                            el.addEventListener("touchend", touchEnd);
                        }                    }
                } catch (err) {
                    // non-fatal if we couldn't adjust touch handlers
                }
            } catch (err) {
                // ignore safe
            }

            // sync DOM positions after each physics update
            Events.on(engine, "afterUpdate", () => {
                bodiesRef.current.rects.forEach((body, i) => {
                    const el = matterElems[i];
                    if (!el || !body) return;
                    el.style.left = `${body.position.x - el.offsetWidth / 2}px`;
                    el.style.top = `${body.position.y - el.offsetHeight / 2}px`;
                    el.style.transform = `rotate(${body.angle}rad)`;
                });
                bodiesRef.current.circles.forEach((body, i) => {
                    const el = matterCircles[i];
                    if (!el || !body) return;
                    el.style.left = `${body.position.x - el.offsetWidth / 2}px`;
                    el.style.top = `${body.position.y - el.offsetHeight / 2}px`;
                    el.style.transform = `rotate(${body.angle}rad)`;
                });
                bodiesRef.current.pills.forEach((body, i) => {
                    const el = matterPills[i];
                    if (!el || !body) return;
                    el.style.left = `${body.position.x - el.offsetWidth / 2}px`;
                    el.style.top = `${body.position.y - el.offsetHeight / 2}px`;
                    el.style.transform = `rotate(${body.angle}rad)`;
                });
            });
        };

        // STOP MATTER (cleanup runner/render/world)
        const stopMatter = () => {
            if (!runningRef.current) return;
            runningRef.current = false;
            try {
                if (render) Render.stop(render);
            } catch {}
            try {
                if (runner) Runner.stop(runner);
            } catch {}
            try {
                Composite.clear(engine.world, true);
            } catch {}
            try {
                if (typeof Engine.clear === "function") {
                    Engine.clear(engine);
                }
            } catch {}
            try {
                if (render?.canvas && render.canvas.parentNode) render.canvas.parentNode.removeChild(render.canvas);
            } catch {}
        };

        // Observe visibility: start when visible, stop when not visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startMatter();
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(box);

        // resize handler: rebuild world (keeps things simple)
        const handleResize = () => {
            Composite.clear(engine.world, false); // keep engine, remove bodies
            // update renderer size safely
            try {
                if (render) {
                    render.options.width = box.clientWidth;
                    render.options.height = box.clientHeight;
                    render.canvas.width = box.clientWidth;
                    render.canvas.height = box.clientHeight;
                }
            } catch {}
        };
        window.addEventListener("resize", handleResize);

        // cleanup when component unmounts / children changes
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", handleResize);
            stopMatter();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);

    return (
        <div
            ref={containerRef}
            className={`matter-box relative w-full ${containerHeightClass} ${className} border-none`}
        >
            {children}
        </div>
    );
};

export default MatterScene;
