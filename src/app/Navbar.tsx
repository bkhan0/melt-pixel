"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/../public/meltpixel.png";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 w-full h-16 z-50 flex items-center ${
    menuOpen
        ? "bg-gray-900/80 backdrop-blur-lg shadow-lg"
        : "bg-transparent"
}`}
    >
      <div className="flex justify-between items-center container mx-auto px-4 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <div className="border border-white/50 rounded-full">
            <Image
              src={logo}
              alt="MeltPixel"
              className="w-28 h-10 rounded-full p-2"
            />
          </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-white border border-white/50 rounded-full px-8 py-2 ml-1">
                <a href="#" className="hover:text-gray-300 transition">Home</a>
                <div className="relative group">
                    <button className="hover:text-gray-300">Services</button>
                    <div className="absolute left-0 mt-2 w-48 bg-gray-900 text-white shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">Web Development</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">App Development</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-800">SEO Optimization</a>
                    </div>
                </div>
                <a href="#" className="hover:text-gray-300 transition">Contact</a>
                <a href="#" className="hover:text-gray-300 transition">About Us</a>
            </div>
        </div>

        {/* CTA button (desktop) */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-full w-40 h-10"
          >
            Let&apos;s Talk
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay (no layout shift) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-gray-900/80 backdrop-blur-lg text-white px-6 py-6 space-y-4 shadow-xl"
          >
            <a href="#" className="block hover:text-gray-300">Home</a>
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-between items-center w-full hover:text-gray-300"
              >
                Services
                <span className="ml-2">{servicesOpen ? "▲" : "▼"}</span>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden mt-2 pl-4 space-y-2"
                  >
                    <a href="#" className="block hover:text-gray-300">Web Development</a>
                    <a href="#" className="block hover:text-gray-300">App Development</a>
                    <a href="#" className="block hover:text-gray-300">SEO Optimization</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="#" className="block hover:text-gray-300">Contact</a>
            <a href="#" className="block hover:text-gray-300">About Us</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-full h-10"
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};