"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const CircleExpand: React.FC = () => {
    const pinRef = useRef<HTMLDivElement | null>(null);
    const orangeRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (!pinRef.current || !orangeRef.current || !textRef.current) return;

        const _mm = ScrollTrigger.matchMedia({
            // Mobile (<768px)
            "(max-width: 767px)": () => {
                gsap.to(orangeRef.current!, {
                    scale: 5,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: pinRef.current!,
                        start: "top top",
                        end: "+=1500",
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                    },
                });

                gsap.to(textRef.current!, {
                    fontSize: "3rem",
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: pinRef.current!,
                        start: "top top",
                        end: "+=1500",
                        scrub: true,
                    },
                });
            },

            // Medium screens (768px - 1023px)
            "(min-width: 768px) and (max-width: 1023px)": () => {
                gsap.to(orangeRef.current!, {
                    scale: 6,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: pinRef.current!,
                        start: "top top",
                        end: "+=1800",
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                    },
                });

                gsap.to(textRef.current!, {
                    fontSize: "5rem",
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: pinRef.current!,
                        start: "top top",
                        end: "+=1800",
                        scrub: true,
                    },
                });
            },

            // Large screens (>=1024px)
            "(min-width: 1024px)": () => {
                gsap.to(orangeRef.current!, {
                    scale: 8,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: pinRef.current!,
                        start: "top top",
                        end: "+=2000",
                        scrub: true,
                        pin: true,
                        pinSpacing: true,
                    },
                });

                gsap.to(textRef.current!, {
                    fontSize: "7rem",
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: pinRef.current!,
                        start: "top top",
                        end: "+=2000",
                        scrub: true,
                    },
                });
            },
        });
    }, []);

    return (
        <div ref={pinRef} className="h-[100vh]">
            <div className="relative flex items-center justify-center h-screen">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <div
                        ref={orangeRef}
                        className="absolute rounded-full h-96 w-96 bg-[var(--blue)]"
                        style={{ zIndex: 10, willChange: "transform" }}
                    />

                    <Link
                        ref={textRef}
                        href="#"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl xl:text-6xl font-extrabold text-white z-20 select-none whitespace-nowrap will-change-transform"
                    >
                        LET&apos;S WORK
                    </Link>
                </div>
            </div>
        </div>
    );
};
