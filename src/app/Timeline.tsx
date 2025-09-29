"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Timeline = () => {
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // pin the title (left side)
        if (titleRef.current) {
            gsap.to(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 30%",
                    end: "bottom center",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                },
            });
        }

        // animate the right side blocks
        const blocks = gsap.utils.toArray<HTMLElement>(".stat-block");

        blocks.forEach((block, i) => {
            gsap.fromTo(
                block,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 80%",
                        end: "bottom top",
                        scrub: 1,
                    },
                    delay: i * 0.2,
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="relative mt-96">
            <span className="hidden md:block absolute w-10 h-full start-[46%] border-s border-gray-800 border-e -z-10-1"></span>
            <span className="hidden md:block absolute w-10 h-full start-[72%] border-s border-gray-800 border-e -z-10-1"></span>
            <div className="container mx-auto">
                <div className="ms-4 md:ms-0 flex flex-col md:flex-row">
                    {/* Left side (pinned title) */}
                    <div ref={titleRef} className="md:w-[46%]">
                        <h1 className="text-7xl pinned-text md:text-8xl font-bold">
                            Perfect <br /> —activity
                        </h1>
                    </div>

                    {/* Right side stats */}
                    <div className="pb-10 md:pb-44 z-10 md:w-[54%]">
                        <div className="stat-block pb-10 md:pb-44 md:w-[60%] z-10 pe-10">
                            <h1 className="text-6xl md:text-8xl font-bold pb-4">1.8M</h1>
                            <p className="text-xl text-gray-500">
                                We helped to get companies with $200M+ funding.
                            </p>
                        </div>
                        <div className="stat-block pb-10 md:pb-44 z-10 ml-0 md:ml-auto md:w-[40%]">
                            <h1 className="text-6xl md:text-8xl font-bold pb-4 leading-none">
                                260+
                            </h1>
                            <p className="text-xl text-gray-500">
                                Crafted responsive, user-centered website & app.
                            </p>
                        </div>
                        <div className="stat-block pb-10 md:pb-44 z-10 md:w-[60%] md:pe-10">
                            <h1 className="text-6xl md:text-8xl font-bold pb-4 leading-none">
                                12+
                            </h1>
                            <p className="text-xl text-gray-500">
                                We have had quite a run in our 12+ years of working.
                            </p>
                        </div>
                        <div className="stat-block pb-10 md:pb-44 z-10 ml-0 md:ml-auto md:w-[40%]">
                            <h1 className="text-6xl md:text-8xl font-bold pb-4 leading-none">
                                80+
                            </h1>
                            <p className="text-xl text-gray-500">
                                Professional skilled designers and developers.
                            </p>
                        </div>
                        <div className="stat-block pb-10 md:pb-44 md:w-[50%] z-10">
                            <h1 className="text-6xl md:text-8xl font-bold pb-4 leading-none">
                                99%
                            </h1>
                            <p className="text-xl text-gray-500">
                                Average 99% client satisfaction with expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};