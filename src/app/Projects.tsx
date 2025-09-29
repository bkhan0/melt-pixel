"use client";
import Image, { StaticImageData } from "next/image";

import p1 from "../../public/ax-portfolio-01.webp";
import p2 from "../../public/ax-portfolio-02.webp";
import p3 from "../../public/ax-portfolio-03.webp";
import p4 from "../../public/ax-portfolio-04.webp";
import p5 from "../../public/ax-portfolio-05.webp";
import p6 from "../../public/ax-portfolio-06.webp";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    // Animate each card separately
    gsap.utils.toArray(".project-card").forEach((el: any) => {
      gsap.fromTo(
        el,
        { scale: 0.90 },
        {
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-10">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="relative group cursor-none project-card" // ✅ class on each card
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <Image
              src={project.img}
              alt={project.title}
              height={400}
              className="rounded-2xl object-cover w-full"
            />
            <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>
            <span className="text-sm text-gray-400">
              {project.category.join(", ")} – {project.year}
            </span>
          </div>
        ))}
      </div>

      {hovering && (
        <div
          className="fixed z-50 pointer-events-none flex items-center justify-center 
          w-36 h-12 rounded-full bg-white text-black shadow-lg"
          style={{
            top: cursorPos.y - 28, // centers better
            left: cursorPos.x - 72,
          }}
        >
          View Project
        </div>
      )}
    </div>
  );
}

interface Project {
  img: StaticImageData;
  url: string;
  title: string;
  category: string[];
  year: number;
}

const projectData: Project[] = [
  {
    img: p1,
    url: "#",
    title: "Panda Automap",
    category: ["Development"],
    year: 2025,
  },
  {
    img: p2,
    url: "#",
    title: "Saudi Venture Capital",
    category: ["Graphics"],
    year: 2025,
  },
  {
    img: p3,
    url: "#",
    title: "Rebrand Lawberry",
    category: ["Motion", "Design"],
    year: 2025,
  },
  {
    img: p4,
    url: "#",
    title: "Selicon Cloud Cave",
    category: ["UI Design"],
    year: 2025,
  },
  {
    img: p5,
    url: "#",
    title: "Mountain Upwork",
    category: ["Branding"],
    year: 2025,
  },
  {
    img: p6,
    url: "#",
    title: "Blacky Motorola",
    category: ["UI Design"],
    year: 2025,
  },
];
