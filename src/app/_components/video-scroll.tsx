"use client"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

export const VideoScroll = () => {

    const video_ref = useRef<HTMLVideoElement>(null);
    const video_container_ref = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const video_duration = 5;

        ScrollTrigger.matchMedia({
            // Large screens (>= 1024px)
            "(min-width: 1024px)": () => {
                const tween = gsap.to(video_ref.current, {
                    currentTime: video_duration,
                    scrollTrigger: {
                        trigger: video_container_ref.current,
                        start: "top top",
                        scrub: 1,
                        pin: true,
                    },
                });
                return () => {
                    tween.scrollTrigger?.kill();
                    tween.kill();
                };
            },

            // Small screens (< 1024px)
            "(max-width: 1023px)": () => {
                const tween = gsap.to(video_ref.current, {
                    currentTime: video_duration,
                    scrollTrigger: {
                        trigger: video_container_ref.current,
                        start: "top 60%",
                        scrub: 1,
                        pin: false,
                    },
                });
                return () => {
                    tween.scrollTrigger?.kill();
                    tween.kill();
                };
            },
        });

        return () => ScrollTrigger.killAll();
    }, []);
    return (
        <>
            <div ref={video_container_ref} className="h-[35vh] md:h-[50vh] lg:h-[100vh]">
                <video
                    ref={video_ref}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                >
                    <source src="/melted-pixel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
};
