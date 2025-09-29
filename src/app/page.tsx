"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "./Marquee";
import Projects from "./Projects";
import Services from "./Services";
import logo from "../../public/meltpixel.png";
import Link from "next/link";
import parallex from "../../public/ax-parallax-image-01.webp";
import Footer from "./footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {Timeline} from "@/app/Timeline";
import {CircleExpand} from "@/app/CircleExpand";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const title_ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
      gsap.to(title_ref.current, {
          fontSize: "80px",
          top: "10vh",
          color: "white",
          ease: "power2.inOut",
          scrollTrigger: {
              trigger: title_ref.current,
              start: "top 50%",
              scrub: 1,
          },
      });

      setTimeout(() => {

          ScrollTrigger.refresh();
  }, 50)
  }, []);

  return (
    <>
      <div className="">
        <section className="container h-[100vh] mx-auto px-6 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 flex ppr-10 md:pr-32">
              <div className="flex flex-col">
                <span className="border border-t-0 border-b-0 h-24 w-[5px]"></span>
                <span className="-ms-4 my-2 h-22">
                  <p>Contact Now</p>
                  <Image
                    alt="Melt-Pixel"
                    src={logo}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </span>
                <span className="border border-t-0 border-b-0 h-24 w-[5px]"></span>
              </div>
              <h1 className="text-5xl md:text-8xl font-semibold leading-none ml-10 md:ml-28 items-center gap-2">
                Let&apos;s sharpen your brand with
                <span className="inline-flex w-8 h-8">
                  <Image
                    alt="Melt-Pixel"
                    src={logo}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </span>
                quality work
              </h1>
            </div>

            <aside className="md:col-span-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="text-7xl font-medium">98%</div>
                  <div className="text-md py-4 text-white">
                    Average clients satisfied and repeating
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-7xl font-medium">120+</div>
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
              className="font-bold text-center text-[90px] md:text-[280px] top-[-65vh] absolute w-full z-10 text-[var(--blue)]"
              ref={title_ref}
            >
              Melt Pixel
            </h1>
            <h3 className="text-xl md:w-[50%] mx-auto text-center">
              We’re a dynamic startup agency specializing in innovative
              solutions for businesses looking to elevate their brand presence.
              We offer a range of services including digital marketing,
              branding, web development, and creative strategy to help company
            </h3>
            <div className="mx-auto">
              <button className="-mb-28 bg-white text-black btn rounded-full w-40 h-14">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/group-meeting.mp4" type="video/mp4" />
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
          <div className="text-center">
            <button className="-mb-28 mt-18 btn btn-outline rounded-full w-40 h-14">
              View All Work
            </button>
          </div>
        </div>
        <div className="container mx-auto mt-20">
          <h1 className="text-7xl md:text-9xl ms-10 md:ms-0 leading-none font-semibold pb-10 pt-20">
            Complex <br /> proficiency
          </h1>
          <div>
            <Services />
          </div>
        </div>
        <Timeline />
        <div className="h-[100vh] mt-58">
          <div className="container mx-auto">
            <h1 className="text-5xl md:text-8xl ms-5 font-black pe-20">
              <span className="text-orange-600 font-semibold">Client:</span>{" "}
              Helping brands to grow and say their success stories to the world.
            </h1>
            <h2 className="text-xl font-semibold text-gray-500 w-[90%] md:w-[30%] text-justify mx-auto my-10 md:my-44">
              We’re a great team of creatives with a strongest capabilities to
              helping progressive fields achieve their goals. With the best
              talent on every project done successfully
            </h2>
          </div>
        </div>
        <CircleExpand />
        <div className="py-30 px-4 md:p-56">
          <h1 className="text-5xl md:text-[100px] leading-none text-center font-bold">
            It&apos;s all about the <br />
            unique <span className="text-gray-700">thinking</span> with{" "}
            <span className="text-gray-700">creativity</span> and{" "}
            <span className="text-gray-700">quality</span> for complex solution
            in <br />
            easy way
          </h1>
        </div>
        <div
          className="h-[80vh] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${parallex.src})` }}
        ></div>
        <Footer />
      </div>
    </>
  );
}
