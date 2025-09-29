"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/../public/meltpixel.png";

export const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 50) {
                // scrolling down
                setHidden(true);
            } else {
                // scrolling up
                setHidden(false);
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <nav
            className={`sticky top-0 py-6 bg-transparent z-50 transition-transform duration-300 ${
                hidden ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="flex justify-between items-center container mx-auto">
                <div className="flex items-center">
                    <div className="border border-white/50 rounded-full">
                        <Image
                            src={logo}
                            alt="MeltPixel"
                            className="w-32 h-12 rounded-full p-3"
                        />
                    </div>

                    {/* Navigation */}
                    <div className="border border-white/50 rounded-full px-8 ml-1">
                        <nav className="flex items-center space-x-8 py-3 text-white">
                            {/* Home */}
                            <a href="#" className="hover:text-gray-300 transition">Home</a>

                            {/* Services with dropdown */}
                            <div className="relative group">
                                <button className="hover:text-gray-300 focus:outline-none">
                                    Services
                                </button>
                                <div className="absolute left-0 mt-2 w-48 bg-gray-900 text-white shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition">Web Development</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition">App Development</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-800 transition">SEO Optimization</a>
                                </div>
                            </div>

                            {/* Contact */}
                            <a href="#" className="hover:text-gray-300 transition">Contact</a>

                            {/* About Us */}
                            <a href="#" className="hover:text-gray-300 transition">About Us</a>
                        </nav>
                    </div>
                </div>

                <button className="border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-full w-44 h-10">
                    Let&apos;s Talk
                </button>
            </div>
        </nav>
    );
};
