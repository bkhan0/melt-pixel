"use client"
import {useEffect, useRef} from "react";

import gsap from "gsap";

export const VideoScroll = () => {

    const video_ref = useRef<HTMLVideoElement>(null);
    const video_container_ref = useRef<HTMLDivElement>(null);


    useEffect(() => {

        const video_duration: number = 5;
        if(video_container_ref.current) {
            gsap.to(video_ref.current, {
                currentTime: video_duration,
                scrollTrigger:{
                    trigger: video_container_ref.current,
                    start: "bottom bottom",
                    scrub:1,
                    pin: true,
                }
            })
        }

    }, []);

    return (
        <>
            <div ref={video_container_ref} className="h-[70vh] md:h-[100vh]">
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
