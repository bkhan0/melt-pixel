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
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const title_ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    gsap.to(title_ref.current, {
      fontSize: "5rem",
      duration: 2,
      ease: "power2.in",
      top: "10vh",
      color: "white",
      scrollTrigger: {
        trigger: title_ref.current,
        start: "top 20%",
        end: "bottom bottom",
        scrub: 2,
      },
    });
  }, []);
  return (
    <>
      <div className="">
        <section className="container h-[100vh] mx-auto px-6 pt-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 flex pe-32">
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
              <h1 className="text-8xl font-semibold leading-none ms-28 items-center gap-2">
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
      <div className="p-28 bg-black/90">
        <div className="w-full h-[60vh] flex relative">
          <span className="border-t-1 border-s-1 w-4 h-4 absolute top-0 start-0"></span>
          <span className="border-t-1 border-e-1 w-4 h-4 absolute top-0 end-0"></span>
          <span className="border-b-1 border-e-1 w-4 h-4 absolute bottom-0 end-0"></span>
          <span className="border-b-1 border-s-1 w-4 h-4 absolute bottom-0 start-0"></span>
          <div className="mx-auto my-auto flex flex-col ">
            <h1
              className="text-[18rem] font-bold text-center top-[-70vh] absolute w-full z-10 text-[var(--blue)]"
              ref={title_ref}
            >
              Melt Pixel
            </h1>
            <h3 className="text-xl w-[50%] mx-auto text-center">
              We’re a dynamic startup agency specializing in innovative
              solutions for businesses looking to elevate their brand presence.
              We offer a range of services including digital marketing,
              branding, web development, and creative strategy to help company
            </h3>
            <div className="mx-auto">
              <button className="-mb-28 mt-18 bg-white text-black btn rounded-full w-40 h-14">
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
          <h1 className="text-9xl leading-none font-semibold pb-10 pt-20">
            Complex <br /> proficiency
          </h1>
          <div>
            <Services />
          </div>
        </div>
        <div className="relative">
          <span className="absolute w-10 h-full start-[46%] border-s border-gray-800 border-e -z-10-1"></span>
          <span className="absolute w-10 h-full start-[72%] border-s border-gray-800 border-e -z-10-1"></span>
          <div className="container mx-auto mt-44 pt-44">
            <span className="w-1 h-full"></span>
            <div className="flex flex-row">
              <div className="w-[46%]">
                <h1 className="text-8xl font-bold">
                  Perfect <br /> —activity
                </h1>
              </div>
              <div className=" w-[54%] flex flex-col">
                <div className="pb-44 w-[60%] pe-10 z-10">
                  <h1 className="text-8xl font-bold pb-4">1.8M</h1>
                  <p className="text-xl text-gray-500">
                    We helped to get companies with $200M+ funding.
                  </p>
                </div>
                <div className="ms-auto pb-44 w-[40%] z-10">
                  <h1 className="text-8xl font-bold pb-4 leading-none">260+</h1>
                  <p className="text-xl text-gray-500">
                    Crafted responsive, user-centered website & app.
                  </p>
                </div>
                <div className="pb-44 w-[60%] pe-10 z-10">
                  <h1 className="text-8xl font-bold pb-4 leading-none">12+</h1>
                  <p className="text-xl text-gray-500">
                    We have had quite a run in our 12+ years of working.
                  </p>
                </div>
                <div className="ms-auto pb-44 w-[40%] z-10">
                  <h1 className="text-8xl font-bold pb-4 leading-none">80+</h1>
                  <p className="text-xl text-gray-500">
                    Professional skilled designers and developers.
                  </p>
                </div>
                <div className="pb-44 w-[50%] z-10">
                  <h1 className="text-8xl font-bold pb-4 leading-none">99%</h1>
                  <p className="text-xl text-gray-500">
                    Average 99% client satisfaction with expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100vh] mt-58">
          <div className="container mx-auto">
            <h1 className="text-8xl font-black pe-20">
              <span className="text-orange-600 font-semibold">Client:</span>{" "}
              Helping brands to grow and say their success stories to the world.
            </h1>
            <h2 className="text-xl font-semibold text-gray-500 w-[30%] text-justify mx-auto my-44">
              We’re a great team of creatives with a strongest capabilities to
              helping progressive fields achieve their goals. With the best
              talent on every project done successfully
            </h2>
          </div>
        </div>
        <div className="h-[100vh] flex items-center justify-center">
          <div className="rounded-full h-96 w-96 bg-orange-500 flex items-center justify-center">
            <Link href="#" className="text-5xl font-extrabold text-white">
              LET&apos;S WORK
            </Link>
          </div>
        </div>
        <div className="p-56">
          <h1 className="text-[100px] leading-none text-center font-bold">
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
