"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const CircleExpand = () => {
    const pinRef = useRef<HTMLDivElement>(null);
    const orangeRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (!pinRef.current || !orangeRef.current || !textRef.current) return;

        // Circle expands big
        const circleTween = gsap.to(orangeRef.current, {
            scale: 8,
            ease: "power1.out",
            scrollTrigger: {
                trigger: pinRef.current,
                start: "top top",
                end: "+=2000",
                scrub: true,
                pin: true,
                pinSpacing: true,
            },
        });

        // Text scales a little
        const textTween = gsap.to(textRef.current, {
            fontSize: "7rem",
            ease: "power1.out",
            scrollTrigger: {
                trigger: pinRef.current,
                start: "top top",
                end: "+=2000",
                scrub: true,
            },
        });

        return () => {
            circleTween.scrollTrigger?.kill();
            circleTween.kill();
            textTween.scrollTrigger?.kill();
            textTween.kill();
        };
    }, []);

    return (
        <div ref={pinRef} className="h-[100vh]">
            <div className="relative flex items-center justify-center h-screen">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <div
                        ref={orangeRef}
                        className="absolute rounded-full h-96 w-96 bg-orange-500"
                        style={{ zIndex: 10, willChange: "transform" }}
                    />

                    <Link
                        ref={textRef}
                        href="#"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold text-white z-20 select-none will-change-transform"
                    >
                        LET&apos;S WORK
                    </Link>
                </div>
            </div>
        </div>
    );
};
