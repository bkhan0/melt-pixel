"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "./Marquee";
import Projects from "./Projects";
import Services from "./Services";
import logo from "../../public/meltpixel.png";
import parallex from "../../public/ax-parallax-image-01.webp";
import Footer from "./footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {Timeline} from "@/app/Timeline";
import {CircleExpand} from "@/app/CircleExpand";
import MatterScene from "@/app/MatterScene";
import Lenis from "@studio-freight/lenis";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)

export default function Home() {
    const title_ref = useRef<HTMLHeadingElement>(null);
    const heading_ref = useRef<HTMLHeadingElement>(null);
    const video_ref = useRef<HTMLVideoElement>(null);
    const video_container_ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

            const section = video_container_ref.current;
            const video = video_ref.current;
            const video_duration: number = 5;
            gsap.to(video, {
                currentTime: video_duration,
                ease: "none",
                scrollTrigger:{
                    trigger: section,
                    start: "bottom bottom",
                    scrub: 1,
                    pin: true
                }
            })


        const split = new SplitText(heading_ref.current, { type: "chars" });

        gsap.from(split.chars, {
            opacity: 0,
            y: 80,
            stagger: 0.05,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: heading_ref.current,
                start: "top 80%",

            }
        });

        const lenis = new Lenis({
            lerp: 0.08,         // lower = heavier inertia (e.g. 0.05 = more delay)
            duration: 2,        // optional: sets scroll duration for uniform motion
            wheelMultiplier: 2, // scroll speed factor
            touchMultiplier: 2, // makes touch scroll feel natural
            infinite: false,    // set true for infinite scroll pages
        });

        // connect Lenis with GSAP ScrollTrigger
        function raf(time: number) {
            lenis.raf(time);
            ScrollTrigger.update();
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // optional: listen to scroll
        lenis.on("scroll", ScrollTrigger.update);

        if (!title_ref.current) return;

        const _mm = ScrollTrigger.matchMedia({
            // Mobile: default (<768px)
            "(max-width: 767px)": () => {
                gsap.set(title_ref.current!, {
                    fontSize: "50px",
                    top: "6vh",
                    color: "white",
                });
            },

            // Small/Medium screens (768px - 1023px) → md
            "(min-width: 768px) and (max-width: 1023px)": () => {
                gsap.fromTo(
                    title_ref.current!,
                    { fontSize: "150px", top: "-55vh" },
                    {
                        fontSize: "70px",
                        top: "5vh",
                        color: "white",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: title_ref.current!,
                            start: "top 50%",
                            end: "top 10%",
                            scrub: 2,
                        },
                    }
                );
            },

            // Large screens (1024px - 1279px) → lg
            "(min-width: 1024px) and (max-width: 1279px)": () => {
                gsap.fromTo(
                    title_ref.current!,
                    { fontSize: "200px", top: "-65vh" },
                    {
                        fontSize: "80px",
                        top: "10vh",
                        color: "white",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: title_ref.current!,
                            start: "top 50%",
                            scrub: 1,
                        },
                    }
                );
            },

            // Extra large screens (>=1280px) → xl
            "(min-width: 1280px)": () => {
                gsap.fromTo(
                    title_ref.current!,
                    { fontSize: "320px", top: "-70vh" },
                    {
                        fontSize: "100px",
                        top: "8vh",
                        color: "white",
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: title_ref.current!,
                            start: "top 50%",
                            scrub: 1,
                        },
                    }
                );
            },
        });

        // Refresh ScrollTrigger after mount
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();

        }, 50);

        return () => {
            clearTimeout(timeout);
            ScrollTrigger.killAll();
            lenis.destroy();
            split.revert()
        };
    }, []);


    return (
    <div id={"smooth-wrapper"}>
     <div id={"smooth-content"}>
         <div>
             <section className="container h-[100vh] mx-auto px-6 pt-32">
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                     <div className="md:col-span-8 flex pr-10 xl:pr-32">
                         <div className="flex flex-col">
                             <span className="border border-gray-900 border-t-0 border-b-0 h-28 w-3"></span>
                             <span className="-ms-4 my-2 h-22 flex justify-center content-center">
                  <Image
                      alt="Melt-Pixel"
                      src={logo}
                      width={160}
                      className="object-contain"
                  />
                </span>
                             <span className="border border-gray-900 border-t-0 border-b-0 h-28 w-3"></span>
                         </div>
                         <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-none ml-10 md:ml-14 lg:ml-28 items-center gap-2">
                             Building brands that thrive in the digital age
                         </h1>
                     </div>

                     <aside className="md:col-span-4">
                         <div className="flex gap-4">
                             <div className="flex-1">
                                 <div className="text-6xl lg:text-8xl font-medium">98%</div>
                                 <div className="text-md py-4 text-white">
                                     Average clients satisfied and repeating
                                 </div>
                             </div>

                             <div className="flex-1">
                                 <div className="text-6xl lg:text-8xl font-medium">120+</div>
                                 <div className="text-md py-4 text-white">
                                     Successfully projects done in 24 countries
                                 </div>
                             </div>
                         </div>
                         <div className="w-full bg-gray-500 h-[1px] mt-6 mb-16"></div>
                         <div className="text-xl text-white">
                             We’re a digital products design & development agency that works
                             passionately with the digital experiences.
                         </div>
                     </aside>
                 </div>
             </section>
         </div>
         <div className="p-10 md:p-28 bg-black/90">
             <div className="w-full h-[60vh] flex relative">
                 <span className="border-t-1 border-s-1 w-4 h-4 absolute top-0 start-0"></span>
                 <span className="border-t-1 border-e-1 w-4 h-4 absolute top-0 end-0"></span>
                 <span className="border-b-1 border-e-1 w-4 h-4 absolute bottom-0 end-0"></span>
                 <span className="border-b-1 border-s-1 w-4 h-4 absolute bottom-0 start-0"></span>
                 <div className="mx-auto my-auto flex flex-col ">
                     <h1
                         className="font-bold text-center text-[90px] md:text-[280px] absolute w-full z-10 whitespace-nowrap text-[var(--blue)]"
                         ref={title_ref}
                     >
                         Melt Pixel
                     </h1>
                     <h3 className="text-xl md:w-[50%] mx-auto text-center">
                         We’re a dynamic marketing agency dedicated to helping businesses amplify their brand presence through creativity, strategy, and innovation.
                         From digital marketing and branding to web development and creative strategy, we deliver impactful solutions that connect, engage, and inspire growth
                     </h3>
                     <div className="mx-auto">
                         <button className="-mb-28 bg-white text-black btn rounded-full w-40 h-14">
                             learn more
                         </button>
                     </div>
                 </div>
             </div>
         </div>
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
         <Marquee duration={100}>
             <span>Creative</span>
             <span className="w-2.5 h-2.5 mx-8 mb-1 rounded-full bg-white inline-block" />
             <span>Design</span>
             <span className="w-2.5 h-2.5 mx-8 mb-1 rounded-full bg-white inline-block" />
             <span>Strategy</span>
             <span className="w-2.5 h-2.5 mx-8 mb-1 rounded-full bg-white inline-block" />
             <span>Innovation</span>
             <span className="w-2.5 h-2.5 mx-8 mb-1 rounded-full bg-white inline-block" />
         </Marquee>
         <div>
             <div className="w-full h-2 border-t-1 border-b-1 border-gray-900"></div>
             <div className="container my-10 mx-auto w-full *:text-white">
                 <div className="flex justify-between mb-10 text-lg">
                     <span>Featured Work</span>
                     <span>Excellency in creative designs</span>
                     <span>(26)</span>
                 </div>
                 <Projects />
             </div>
             <div className="container mx-auto mt-20">
                 <h1 className="text-6xl md:text-9xl ml-5 md:ms-0 leading-none font-semibold pb-10 pt-20" ref={heading_ref}>
                     Complex <br /> proficiency
                 </h1>
                 <div>
                     <Services />
                 </div>
             </div>
             <Timeline />
             <div className="h-[100vh] mt-58 mb-0 md:mb-96">
                 <div className="container mx-auto">
                     <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl ms-5 font-black pe-20">
                         <span className="text-[var(--blue)] font-semibold">Client:</span>{" "}
                         Empowering brands to grow, connect, and tell their stories to the world.
                     </h1>
                     <h2 className="text-xl font-semibold text-gray-500 w-[90%] md:w-[60%] lg:w-[40%] xl:w-[35%] text-justify mx-auto my-10 md:my-44">
                         We’re a passionate team of creatives with strong capabilities, helping forward-thinking brands achieve their goals.
                         With top talent driving every project, we ensure success from concept to completion.
                     </h2>
                     <div>
                         <MatterScene containerHeightClass="h-[600px]" className="overflow-hidden">

                             <div className="dm-matter-elem-pill absolute left-20 md:left-12 -top-[2100px] px-10 py-4 text-xl bg-[var(--red)] rounded-full text-white">
                                 NextJS
                             </div>
                             <div className="dm-matter-elem-pill absolute left-8 md:left-20 -top-[2400px] px-10 py-4 text-xl bg-[var(--red)] rounded-full text-white">
                                 PHP
                             </div>
                             <div className="dm-matter-elem-pill absolute left-20 md:left-80 -top-[1900px] px-10 py-4 text-xl bg-[var(--red)] rounded-full text-white">
                                 MySQL
                             </div>
                             <div className="dm-matter-elem-pill absolute left-12 md:left-80 -top-[2000px] px-10 py-4 text-xl bg-white rounded-full text-black">
                                 PostgreSQL
                             </div>
                             <div className="dm-matter-elem-pill absolute left-16 md:left-150 -top-[1500px] px-10 py-4 text-xl bg-white rounded-full text-black">
                                 Supabase
                             </div>
                             <div className="dm-matter-elem-pill absolute left-20 md:left-180 -top-[900px] px-10 py-4 text-xl bg-white rounded-full text-black">
                                 NodeJS
                             </div>
                             <div className="dm-matter-elem-pill absolute left-16 md:left-200 -top-[1300px] px-10 py-4 text-xl bg-white rounded-full text-black">
                                 React
                             </div>
                             <div className="dm-matter-elem-pill absolute left-6 md:left-230 -top-[2800px] px-10 py-4 text-xl bg-[var(--red)] rounded-full text-white">
                                 HTML
                             </div>
                             <div className="dm-matter-elem-pill absolute left-4 md:left-140 -top-[3000px] px-10 py-4 text-xl bg-[var(--red)] rounded-full text-white">
                                 TailWind
                             </div>
                             <div className="dm-matter-elem-pill absolute left-4 md:left-140 -top-[3000px] px-10 py-4 text-xl bg-[var(--red)] rounded-full text-white">
                                 Laravel
                             </div>
                             <div className="dm-matter-elem-pill absolute left-240 -top-[200px] px-10 py-4 text-xl bg-[var(--red)] rounded-full text-white">
                                 Bootstrap
                             </div>
                         </MatterScene>
                     </div>
                     <div className="h-0.5 w-full bg-white mb-2"/>
                     <div className="h-0.5 w-full bg-white mb-2"/>
                     <div className="h-0.5 w-full bg-white mb-2"/>
                     <div className="h-0.5 w-full bg-white mb-2"/>

                 </div>
             </div>
             <div className="pt-96">
                 <CircleExpand />
             </div>
             <div className="py-30 px-4 md:p-32 lg:p-56">
                 <h1 className="text-5xl md:text-[80px] lg:text-[100px] leading-none text-center font-bold">
                     It’s all about unique <br />
                     <span className="text-gray-700">thinking</span> ,with{" "}
                     <span className="text-gray-700">creativity</span> and{" "}
                     <span className="text-gray-700">quality</span>
                     — turning complex challenges into simple, effective solutions
                 </h1>
             </div>
             <div
                 className="h-[50vh] md:h-[80vh] bg-fixed bg-center bg-cover"
                 style={{ backgroundImage: `url(${parallex.src})` }}
             ></div>
             <Footer />
         </div>
     </div>
    </div>
  );
}
