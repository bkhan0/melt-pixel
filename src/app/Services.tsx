import React, {useEffect} from 'react'
import Image, { StaticImageData } from 'next/image'
import p1 from "../../public/ax-service-01.webp"
import p2 from "../../public/ax-service-02.webp"
import p3 from "../../public/ax-service-03.webp"
import p4 from "../../public/ax-service-04.webp"
import gsap from "gsap";

interface Data {
  number: string
  img: StaticImageData
  category: string
  subCategories: string[]
  url: string
}

const data: Data[] = [
  {
    number: "01",
    img: p1,
    category: "Development",
    subCategories: ["Wordpress", "Webflow", "Laravel Framework", "React & Flutter", "Design System"],
    url: "#"
  },
  {
    number: "02",
    img: p2,
    category: "Design",
    subCategories: ["UI/UX", "Illustration", "Figma", "Branding"],
    url: "#"
  },
  {
    number: "03",
    img: p3,
    category: "Marketing",
    subCategories: ["SEO", "Social Media", "Ads", "Content Creation"],
    url: "#"
  },
  {
    number: "04",
    img: p4,
    category: "Analytics",
    subCategories: ["Google Analytics", "PowerBI", "Data Visualization"],
    url: "#"
  }
]

function Services() {
    useEffect(() => {
        // Animate each card separately
        gsap.utils.toArray(".service-card-image").forEach((el: any) => {
            gsap.fromTo(
                el,
                { width: "20%" },
                {
                    width: "100%",
                    duration: 5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "top top",
                        scrub: true,
                    },
                },
            );
        });
    }, []);

    return (
   <div className="space-y-10 mt-10 mx-5 mx-0">
  {data.map((item) => (
    <div
      key={item.number}
      className="border-t border-gray-700 pt-8 grid grid-cols-12 gap-6 "
    >
      {/* Number */}
      <div className="col-span-12 md:col-span-4 text-4xl font-bold">
        ({item.number})
      </div>

      {/* Category & Subcategories */}
      <div className="col-span-12 md:col-span-3">
        <h2 className="mb-4 text-2xl lg:text-3xl font-semibold">{item.category}</h2>
        <ul className="list-none space-y-1">
          {item.subCategories.map((sub, idx) => (
            <li key={idx}>{sub}</li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="col-span-12 md:col-span-6 xl:col-span-5 service-card-image  w-full ps-10 h-64 relative">
        <Image
          src={item.img}
          alt={item.category}
          fill
          className="object-cover w-[500px] md:w-auto rounded-xl"
        />
      </div>
    </div>
  ))}
</div>

  )
}

export default Services
