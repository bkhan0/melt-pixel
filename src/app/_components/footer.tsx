"use client"

import React from 'react'
import Image from "next/image";
import logo from "../../../public/MeltPixel icon.jpeg"
import Link from "next/link";
import {LucideIcon} from "lucide-react";



function Footer() {
  return (
    <footer className="text-gray-300 justify-between pt-10">
  {/* Top Section */}
  <div className="container mx-auto w-full px-6 pt-28 pb-24 grid grid-cols-12 gap-y-10 md:gap-12">
    {/* Left: Logo + Description */}
    <div className='col-span-12 md:col-span-7'>
      <div className="flex items-center space-x-3">
        {/* Replace with your own logo */}
          <div className="w-40 md:w-60  h-26 md:h-44 ">
              <Image src={logo} alt={logo.src} className="object-contain" />
          </div>
        <h2 className="text-6xl md:text-7xl font-bold text-white">MeltPixel <br /> <span className="font-light">Agency</span></h2>
      </div>
    </div>
    <div className="col-span-12 md:col-span-5">
        <p className="mt-6 text-gray-400 max-w-md text-xl">
            MeltPixel is a creative digital agency for design, development, and marketing, partnering with brands across the globe.
      </p>
      <a
        href="#"
        className="relative inline-block text-gray-400 transition-colors text-2xl duration-300 group"
        >
        <span className="relative z-10 group-hover:text-gray-300">info@MeltPixel.com</span>
        <span
            className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400
                    transform scale-x-0 origin-right transition-transform duration-300
                    group-hover:scale-x-100 group-hover:origin-left"
        ></span>
        </a>

    </div>
    <hr className="border-gray-800 col-span-12 my-14" />
    <div className='col-span-12  md:col-span-7'>
        <form className="flex items-center bg-gray-900 rounded-full overflow-hidden max-w-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow pe-8 ps-10 py-7 text-xl bg-transparent outline-none text-white"
        />
        <button
          type="submit"
          className="pb-7 pe-4 text-xl transition -rotate-45"
        >
          ➤
        </button>
      </form>
      <p className="mt-3 text-xl text-gray-300 ps-4">
        By subscribing you agree with our{" "} <br />
        <Link href="privacy-policy" className="underline">Privacy Policy</Link>
      </p>
    </div>
    <div className="col-span-12  md:col-span-5 flex justify-between">
  {/* Company */}
  <div>
    <h3 className="mb-3 font-semibold text-xl text-gray-300">Company</h3>
    <ul className="space-y-2 text-lg group">
      {companyLinks.map((item) => (
        <li
          key={item.title}
          className="text-gray-300 group-hover:text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Social */}
 {/* <div>
    <h3 className="mb-3 font-semibold text-xl text-gray-300">Social</h3>
    <ul className="space-y-2 text-lg group">
      {socialLinks.map((item) => (
        <li
          key={item.title}
          className="text-gray-300 group-hover:text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  </div>*/}

  {/* Office */}
  <div>
    <h3 className="mb-3 font-semibold text-xl text-gray-300">Office</h3>
    <ul className="space-y-2 text-lg group">
      {["LGF-9 Central Plaza Main Boulevard Garden Town Lahore "].map((item) => (
        <li
          key={item}
          className="text-gray-300 group-hover:text-gray-500 hover:text-gray-300 transition-colors duration-300 max-w-[300px]"
        >
          {item}
        </li>
      ))}
    </ul>
    <div className="flex flex-row mt-4 gap-4 text-lg">
      {socialLinks.map((item) => (
          <span
              key={item.title}
              className="flex justify-center text-gray-300 hover:text-gray-500 transition-colors duration-300"
          >
              <a target="_blank" href={item.url} rel="noopener noreferrer">
                  {item.icon ? (
                      <item.icon className="w-6 h-6" />
                  ) : (
                      item.title
                  )}
              </a>
          </span>
      ))}
    </div>
  </div>
</div>
  </div>
  <hr className="border-gray-800" />
  <div className="flex items-center justify-center py-10 text-xl text-gray-500">
      <p>© 2025 MaltPixel. All rights reserved</p>
  </div>
</footer>

  )
}



export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-facebook-icon lucide-facebook"
        {...props}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-instagram-icon lucide-instagram"
        {...props}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

export default Footer

interface Link {
    title: string
    url: string
}

const companyLinks: Link[] = [
    {
        title: "About US", url: "about-us"
    },{
        title: "Contact", url: "contact"
    },{
        title: "Terms of Service", url: "terms-of-service"
    }
]

interface SocialLink {
    title: string
    url: string
    icon:  React.FC<React.SVGProps<SVGSVGElement>>
}

const socialLinks: SocialLink[] = [
    {
        title: "Facebook", url: "https://www.facebook.com/profile.php?id=61582796040988", icon: FacebookIcon
    },{
        title: "Instagram", url: "https://www.instagram.com/meltpixel/", icon: InstagramIcon
    }
]
