import React from 'react'
import Image from "next/image";
import logo from "../../../public/MeltPixel icon.jpeg"

function Footer() {
  return (
    <footer className="text-gray-300 justify-between pt-10">
  {/* Top Section */}
  <div className="container mx-auto w-full px-6 pt-28 pb-24 grid grid-cols-12 gap-y-10 md:gap-12">
    {/* Left: Logo + Description */}
    <div className='col-span-12 md:col-span-7'>
      <div className="flex items-center space-x-3">
        {/* Replace with your own logo */}
          <div className="w-40 md:w-60 h-26 md:h-44 ">
              <Image src={logo} alt={logo.src} className="object-contain" />
          </div>
        <h2 className="text-6xl md:text-7xl font-bold text-white">MeltPixel <br /> <span className="font-light">Agency</span></h2>
      </div>
    </div>
    <div className="col-span-12 md:col-span-5">
        <p className="mt-6 text-gray-400 max-w-md text-xl">
            Melt Pixel is a creative digital agency for design, development, and marketing, partnering with brands across the globe.
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
        <a href="#" className="underline">Privacy Policy</a>
      </p>
    </div>
    <div className="col-span-12  md:col-span-5 flex justify-between">
  {/* Company */}
  <div>
    <h3 className="mb-3 font-semibold text-xl text-gray-300">Company</h3>
    <ul className="space-y-2 text-lg group">
      {["Agency", "Solutions", "Creative", "Work", "Contact"].map((item) => (
        <li
          key={item}
          className="text-gray-300 group-hover:text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </div>

  {/* Social */}
  <div>
    <h3 className="mb-3 font-semibold text-xl text-gray-300">Social</h3>
    <ul className="space-y-2 text-lg group">
      {["Facebook", "Twitter", "Instagram"].map((item) => (
        <li
          key={item}
          className="text-gray-300 group-hover:text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </div>

  {/* Office */}
  <div>
    <h3 className="mb-3 font-semibold text-xl text-gray-300">Office</h3>
    <ul className="space-y-2 text-lg group">
      {["New York", "Toronto", "Berlin", "London"].map((item) => (
        <li
          key={item}
          className="text-gray-300 group-hover:text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          {item}
        </li>
      ))}
    </ul>
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

export default Footer
