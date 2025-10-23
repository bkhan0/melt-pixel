"use client"
import Footer from "@/app/footer";

import team1 from "@/../public/co-founder-and-ceo.webp";
import team2 from "@/../public/shamoilkhan.jpeg";
import team3 from "@/../public/barikhan.jpeg";
import teamMember from "@/../public/team-5.jpeg";
import team4 from "@/../public/co-founder-and-ceo-2.webp";
import team5 from "@/../public/team-5.webp";
import team6 from "@/../public/team-6.webp";
import team7 from "@/../public/team-7.webp";
import team8 from "@/../public/team-8.webp";
import team9 from "@/../public/team-9.webp";
import team10 from "@/../public/team-10.webp";

import g1 from "@/../public/ax-about-gallery-01.webp";
import g2 from "@/../public/team-4.webp";
import g3 from "@/../public/ax-h2-about-02.webp";
import g4 from "@/../public/ax-da-about-04.webp";
import longArrow from "@/../public/ax-long-arrow-icon.webp";
import parllaxImage from "@/../public/ax-about-thumb-01.webp"
import Image, {StaticImageData} from "next/image";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Marquee from "@/app/Marquee";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);



export default function Contact () {

    const teamData: Team[] = [
        {name: "Maw an Saleem", image: team1, role: "CEO & Co Founder"},
        {name: "Shamoil Khan", image: team2, role: "UI/UX"},
        {name: "Bari Khan", image: team3, role: "Lead Developer"},
        {name: "Haider Bhai", image: team4, role: "CEO & Co Founder"}
    ]

    const team: Team[] = [
        {
            name: "Fahad Ikhlaq",
            role: "3D Game Designer",
            image: teamMember
        },
       /* {
            name: "Giuseppe Carbonara",
            role: "Brand Strategist",
            image: team6
        },
        {
            name: "Vedran Starčić",
            role: "Jr. Designer",
            image: team7
        },
        {
            name: "Izquierdo Bayà",
            role: "Creative Writer",
            image: team8
        },
        {
            name: "Jared Silverman",
            role: "Motion Designer",
            image: team9
        },
        {
            name: "Samuel Bertain",
            role: "WordPress Developer",
            image: team10
        },*/
    ];

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,         // lower = heavier inertia (e.g. 0.05 = more delay)
            duration: 2,      // optional: sets scroll duration for uniform motion
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

        if (sliderRef.current) {
            gsap.to(sliderRef.current, {
                x: -300, // move left 100px
                ease: "none",
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: "top bottom",
                    end: "top -50%",
                    scrub: true,
                },
            });
        }
    }, []);

    const gallery: StaticImageData[] = [
        g1, g2, g3, g4, g1
    ]

    return (
        <>
            <div>
                <div className="container px-4 lg:px-0 mx-auto pt-40 text-white">
                    <h1 className="text-7xl md:text-8xl lg:text-[168px] xl:text-[216px] whitespace-nowrap font-extrabold text-center">SINCE 2012</h1>
                    <div className="h-[1px] bg-gray-900 w-full my-28"></div>
                    <div className="grid grid-cols-8 space-y-12 md:space-y-20 px-4 md:px-0">
                        <div className="col-span-8 lg:col-span-2">
                            <p>Contact</p>
                        </div>
                        <div className="col-span-8 lg:col-span-6">
                            <h1 className="text-5xl md:text-7xl font-semibold">
                                Crafting digital products with a unique vision — focused on creating better, more meaningful user experiences.
                            </h1>
                        </div>
                        <div className="col-span-8 lg:col-span-2" />
                        <div className="col-span-8 lg:col-span-6">
                            <div className="h-[1px] bg-gray-900 w-full mt-12 mb-14"></div>
                            <div className="grid grid-cols-5 px-4 md:px-8">
                                <div className="col-span-5 md:col-span-2">
                                    <ol className="list-disc text-2xl">
                                        <li>Art Direction</li>
                                        <li>Capability</li>
                                        <li>Sustainability</li>
                                    </ol>
                                </div>
                                <div className="col-span-5 md:col-span-3 text-lg">
                                    <p>
                                        MeltPixel is a global creative agency built for bold ideas and real innovation.
                                        We’re a dedicated space for brands to explore, design, and create digital experiences that inspire.                                    </p>
                                    <p className="my-8">
                                        With a network of world-class talent, we stay ahead of the curve — delivering fresh ideas and powerful results for clients around the world.                                    </p>
                                    <button className="relative overflow-hidden rounded-full border border-white bg-white px-10 py-4 group">
                                        {/* Default text */}
                                        <span className="relative z-10 block transform transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 text-black">
                                            Explore Services
                                        </span>
                                        {/* Hover text */}
                                        <span className="absolute inset-0 flex items-center justify-center z-10 transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 text-white">
                                            Explore Services
                                        </span>
                                        {/* Background animation */}
                                        <span className="absolute bottom-0 left-0 h-0 w-full bg-black transition-all duration-500 ease-in-out group-hover:h-full"></span>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-8 overflow-hidden">

                        </div>
                    </div>
                </div>
                <div className="overflow-hidden my-20">
                    <div className="w-[200%] flex gap-6 -translate-x-40" ref={sliderRef}>
                        {gallery.map((g, index) => (
                            <Image
                                key={index}
                                src={g}
                                alt={g.src}
                                className={`w-[450px] ${index % 2 !== 0 ? 'h-[500px]' : 'h-[380px]'} object-cover object-top`}
                            />
                        ))}
                    </div>
                </div>
                <div className="container px-4 lg:px-0 mx-auto grid grid-cols-4">
                    <div className="col-span-4 h-[1px] bg-gray-900 my-28" />
                    <div className="col-span-4 lg:col-span-1 mb-16">
                        <p>Approach</p>
                    </div>
                    <div className="col-span-4 md:col-span-3">
                        <h1 className="text-6xl lg:text-8xl font-semibold">Method of making <br/> better result</h1>
                        <div className="flex flex-col lg:flex-row gap-8 mt-20">
                            <div>
                                <h2 className="text-2xl mb-6">Problem Discovery</h2>
                                <ul className="list-none text-gray-200 ">
                                    <li>Usability Studies</li>
                                    <li>User Interviews</li>
                                    <li>Stakeholder Interviews</li>
                                    <li>Competitive Research</li>
                                    <li>Insights Report</li>
                                    <li>User Journey</li>
                                </ul>
                            </div>
                            <div className="pt-10 hidden lg:block">
                                <Image src={longArrow} alt={longArrow.src} className="max-w-full invert" />
                            </div>
                            <div>
                                <h2 className="text-2xl mb-6">Design System Ready</h2>
                                <ul className="list-none text-gray-200 ">
                                    <li>Thinking Workshops</li>
                                    <li>Sitemaps</li>
                                    <li>Concepts</li>
                                    <li>Designs</li>
                                    <li>Prototypes</li>
                                    <li>Usability Studies</li>
                                </ul>
                            </div>
                            <div className="pt-10 hidden lg:block">
                                <Image src={longArrow} alt={longArrow.src} className="max-w-full invert" />
                            </div>
                            <div>
                                <h2 className="text-2xl mb-6">Design implementation</h2>
                                <ul className="list-none text-gray-200 ">
                                    <li>Design</li>
                                    <li>Use Cases</li>
                                    <li>User Flows</li>
                                    <li>Various User Types</li>
                                    <li>Annotations</li>
                                    <li>Interaction</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16">
                    <div className="container px-4 lg:px-0 mx-auto">
                        <div className="h-[1px] bg-gray-900 my-28" />
                        <div className="grid grid-cols-4 gap-x-6 gap-y-8 lg:gap-y-18">
                            <div className="col-span-4 lg:col-span-1">
                                <p>Who are we?</p>
                            </div>
                            <div className="col-span-4 lg:col-span-3 xl:col-span-2">
                                <h2 className="text-6xl lg:text-7xl font-medium">We deliver creative ideas that stand out in a crowded world.</h2>
                            </div>
                            <div className="col-span-4 xl:col-span-1" />
                            <div className="col-span-4 lg:col-span-1 rounded-4xl px-10 py-16 bg-gray-900">
                                <p className="text-gray-600 text-lg">35+ Google reviews</p>
                                <h5 className="text-4xl mt-4">4.9</h5>
                            </div>
                            <div className="col-span-4 lg:col-span-1 rounded-4xl px-10 py-16 bg-gray-900">
                                <p className="text-gray-600 text-lg">Clients world-wide</p>
                                <h5 className="text-4xl mt-4">1.8K</h5>
                            </div>
                            <div className="col-span-4 lg:col-span-1 rounded-4xl px-10 py-16 bg-gray-900">
                                <p className="text-gray-600 text-lg">Completed projects</p>
                                <h5 className="text-4xl mt-4">1.7K</h5>
                            </div>
                            <div className="col-span-4 lg:col-span-1 rounded-4xl px-10 py-16 bg-gray-900">
                                <p className="text-gray-600 text-lg">Client satisfaction</p>
                                <h5 className="text-4xl mt-4">95%</h5>
                            </div>
                        </div>
                        <div className="flex items-center justify-center text-center mb-16 mt-50">
                            <p className="w-[330px] text-lg text-white font-medium">
                                Helping brands grow and share their success stories with the world.
                            </p>
                        </div>
                        <Marquee duration={100} containerClassName="h-40 my-24">
                            <span className="flex items-center justify-center rounded-full border border-gray-700 w-42 h-28 text-2xl mx-0 lg:mx-10">
                                Webflow
                            </span>
                            <span className="flex items-center justify-center rounded-full border border-gray-700 w-42 h-28 text-2xl mx-0 lg:mx-10">
                                Pingdom
                            </span>
                            <span className="flex items-center justify-center rounded-full border border-gray-700 w-42 h-28 text-2xl mx-0 lg:mx-10">
                                Miro
                            </span>
                            <span className="flex items-center justify-center rounded-full border border-gray-700 w-42 h-28 text-2xl mx-0 lg:mx-10">
                                Monday
                            </span>
                            <span className="flex items-center justify-center rounded-full border border-gray-700 w-42 h-28 text-2xl mx-0 lg:mx-10">
                                Voiceflow
                            </span>
                        </Marquee>
                        <div className="grid grid-cols-12 gap-0">
                            <div className="col-span-12 lg:col-span-7">
                                <Image src={parllaxImage} alt={parllaxImage.src} className="object-cover max-w-full" />
                            </div>
                            <div className="col-span-12 lg:col-span-5">
                                <div className="bg-gray-950 w-full h-[98%] flex flex-col justify-between px-10 py-18">
                                    <p className="w-[60%] text-2xl font-semibold">
                                        A collective of creative minds working on incredible projects and building lasting partnerships that go beyond the deliverable.
                                    </p>
                                    <div>
                                        <p className="text-gray-700 w-[70%] mt-8">A collective bunch working on incredible projects and building enduring partnerships that extend well beyond the deliverable.</p>
                                        <button className="relative font-semibold mt-10 overflow-hidden rounded-full border border-gray-700 bg-transparent px-10 py-6 group">
                                            {/* Default text */}
                                            <span className="relative z-10 block transform transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 text-white">
                                            Learn More
                                        </span>
                                            {/* Hover text */}
                                            <span className="absolute inset-0 flex items-center justify-center z-10 transform translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 text-black">
                                            Learn More
                                        </span>
                                            {/* Background animation */}
                                            <span className="absolute bottom-0 left-0 h-0 w-full bg-white transition-all duration-500 ease-in-out group-hover:h-full"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 bg-gray-900 h-[1px] my-16"></div>
                            <div className="col-span-12 lg:col-span-3">
                                <p>Awards</p>
                            </div>
                            <div className="col-span-12 lg:col-span-9">
                                <h1 className="text-6xl font-medium leading-tight lg:text-7xl">
                                    We believe in quality over quantity — that’s what makes us truly great.
                                </h1>
                            </div>
                            <div className="col-span-12 lg:col-span-3"></div>
                            <div className="col-span-12 lg:col-span-9">
                                <div className="bg-gray-900 h-[1px] my-16"></div>
                                <div className="lg:w-[60%] ml-auto">
                                    <div className="space-y-10 text-lg">
                                        {/* Awwwards */}
                                        <div className="grid grid-cols-[200px_1fr_80px] gap-1">
                                            <span className="font-semibold">Awwwards</span>
                                            <span>7x Honorable Mention</span>
                                            <span>2014</span>

                                            <span></span>
                                            <span>4x Site of the Day</span>
                                            <span>2016</span>

                                            <span></span>
                                            <span>2x Developer Awards</span>
                                            <span>2016</span>

                                            <span></span>
                                            <span>1x Site of the Year</span>
                                            <span>2019</span>

                                            <span></span>
                                            <span>1x Design of the Year</span>
                                            <span>2025</span>
                                        </div>

                                        {/* CSS Design */}
                                        <div className="grid grid-cols-[200px_1fr_80px] gap-1">
                                            <span className="font-semibold">CSS Design</span>
                                            <span>2x Website of the Day</span>
                                            <span>2014</span>

                                            <span></span>
                                            <span>1x Best Innovation</span>
                                            <span>2016</span>

                                            <span></span>
                                            <span>5x UX Design</span>
                                            <span>2016</span>

                                            <span></span>
                                            <span>6x Creative Design</span>
                                            <span>2019</span>
                                        </div>

                                        {/* Dribbble */}
                                        <div className="grid grid-cols-[200px_1fr_80px] gap-1">
                                            <span className="font-semibold">Dribbble</span>
                                            <span>2x Design of the Day</span>
                                            <span>2014</span>

                                            <span></span>
                                            <span>2x Site of the Day</span>
                                            <span>2016</span>
                                        </div>

                                        {/* Behance */}
                                        <div className="grid grid-cols-[200px_1fr_80px] gap-1">
                                            <span className="font-semibold">Behance</span>
                                            <span>5x Featured Design</span>
                                            <span>2025</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={"mx-auto container px-4 lg:px-0"}>
                        <div className="h-[1px] bg-gray-900 my-28" />
                        <div className={"grid grid-cols-4 my-16"}>
                            <div className="col-span-4 lg:col-span-1 mb-16">
                                <p>TEAM</p>
                            </div>
                            <div className="col-span-4 mt-8 lg:mt-0 xl:col-span-2">
                                <h1 className={"text-6xl lg:text-7xl font-bold"}>
                                    Meet the talented team behind the creativity.
                                </h1>
                            </div>
                            <div className="col-span-full my-24">
                                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                                    {teamData.map((member, index) => (
                                        <div className="flex flex-col" key={index}>
                                            <Link href="#" className="overflow-hidden">
                                                <Image
                                                    src={member.image}
                                                    alt={member.image.src}
                                                    className="object-cover h-full grayscale hover:grayscale-0 transform duration-500
                                                     transition tansition-duration-400
                                                     hover:scale-110"
                                                />
                                            </Link>
                                            <Link href="#" className="mt-6 mb-2">
                                                <h2 className="text-2xl font-semibold">{member.name}</h2>
                                            </Link>
                                            <p className="text-gray-700">{member.role}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        <section>
                            <ul className="divide-y divide-slate-200 dark:divide-slate-700">
                                {team.map((member, i) => (
                                    <li
                                        key={i}
                                        className="grid grid-cols-12 items-center gap-x-4 py-8 group"
                                    >
                                        <div className="col-span-8 lg:col-span-4 flex items-center gap-3 hover:pl-4 transition-all duration-400 group-hover:pl-6">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                className="w-18 h-18 rounded-full object-cover"
                                            />
                                            <span className="font-semibold text-xl text-slate-800 dark:text-slate-200">
                                                {member.name}
                                                <span className="block lg:hidden text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                                    {member.role}
                                                </span>
                                            </span>
                                        </div>

                                        <div className="hidden lg:block col-span-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                            {member.role}
                                        </div>

                                        <Link href={"#"} className="col-span-4 justify-self-end p-2 hover:pr-4 transition-all duration-400 group-hover:pr-6">
                                            <ArrowUpRight className="w-8 h-8" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

interface Team {
    name: string;
    role: string;
    image: StaticImageData;
}

