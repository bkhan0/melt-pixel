"use client"
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

export const VideoScroll = () => {

    const video_ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video_duration = 5;
        gsap.to(video_ref.current, {
            currentTime: video_duration,
            scrollTrigger: {
                trigger: video_ref.current,
                start: "center center",
                scrub: 1,
                pin: true,
            },
        });
       return () => ScrollTrigger.killAll();
    }, []);
    return (
        <>
            <div className="max-w-[100vw]">
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
