"use client"
import Footer from "@/app/_components/footer";
import {useEffect, useState} from "react";
import Lenis from "@studio-freight/lenis";
import {ScrollTrigger} from "gsap/all";

type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    budget: string;
    subject: string;
    message: string;
};

export default function Contact () {
    const links: Links[] = [
        { title: 'Facebook', url: '#' },
        { title: 'LinkedIn', url: '#' },
        { title: 'Instagram', url: '#' },
    ]

    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        budget: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    budget: "",
                    subject: "",
                    message: "",
                });
            } else {
                const { error } = await res.json();
                setStatus(`❌ Failed to send: ${error}`);
            }
        } catch (err) {
            console.error(err);
            setStatus("❌ Something went wrong. Try again later.");
        }
    };

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
    }, []);

    return (
        <>
            <div>
                <div className="container mx-auto pt-40 text-white">
                    <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold text-center">Contact</h1>
                    <div className="h-[1px] bg-gray-900 w-full my-28"></div>
                    <div className="grid grid-cols-8 space-y-12 md:space-y-20 px-4 md:px-0">
                        <div className="col-span-8 md:col-span-2">
                            <p>Contact</p>
                        </div>
                        <div className="col-span-8 md:col-span-4">
                            <h1 className="text-6xl md:text-7xl font-medium">
                                Drop us a line — let’s bring your project to life.
                            </h1>
                        </div>
                        <div className="col-span-8 md:col-span-2"></div>
                        <div className="col-span-8 md:col-span-2 px-4 md:px-0">
                            <p>Get in touch</p>
                            <p className="mb-2 mt-8 font-semibold text-2xl">
                                We’re excited to hear from you — let’s start something special together.
                            </p>
                            <a href="#" className="relative inline-block
                                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white
                                after:w-full after:origin-left after:scale-x-100 after:transition-transform after:duration-300
                                hover:after:scale-x-0 text-2xl"
                            >
                                hello@redoxagency.com
                            </a>

                            <p className="mt-20 mb-8">Follow</p>
                            {links.map((link) => (<>
                                <a key={link.title} href={link.url}
                                    className="relative inline-block text-2xl text-white
                                       after:content-[''] after:absolute after:left-0 after:bottom-0
                                       after:h-[2px] after:bg-white after:w-full after:origin-left
                                       after:scale-x-100 after:transition-transform after:duration-300
                                       hover:after:scale-x-0 mb-2"
                                >
                                    {link.title}
                                </a><br/></>
                            ))}

                        </div>
                        <div className="col-span-8 md:col-span-6 md:pl-40 px-4 md:px-0">
                            <form onSubmit={handleSubmit} className="relative">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 mt-12 md:mt-0">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={form.name}
                                        onChange={handleChange}
                                        className="outline-none border-b pb-2 text-sm bg-transparent"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="outline-none border-b pb-2 text-sm bg-transparent"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className="outline-none border-b pb-2 text-sm bg-transparent"
                                    />
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={form.company}
                                        onChange={handleChange}
                                        className="outline-none border-b pb-2 text-sm bg-transparent"
                                    />
                                    <input
                                        type="text"
                                        name="budget"
                                        placeholder="Budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        className="outline-none border-b pb-2 text-sm bg-transparent"
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        className="outline-none border-b pb-2 text-sm bg-transparent"
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={form.message}
                                        onChange={handleChange}
                                        className="outline-none border-b pb-2 text-sm bg-transparent col-span-1 md:col-span-2 mt-16"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="text-lg px-10 py-4 bg-white text-black rounded-full mt-16 cursor-pointer hover:bg-gray-100 transition"
                                >
                                    Send Message
                                </button>

                                {status && (
                                    <p className="mt-6 text-sm text-center text-gray-300">{status}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

interface Links {
    title: string;
    url: string;
}


