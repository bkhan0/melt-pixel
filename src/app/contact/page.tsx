import Link from "next/link";
import Footer from "@/app/footer";

export default function Contact () {
    const links: Links[] = [
        { title: 'Facebook', url: '#' },
        { title: 'Twitter', url: '#' },
        { title: 'LinkedIn', url: '#' },
        { title: 'Instagram', url: '#' },
        { title: 'Behance', url: '#' },
    ]
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
                            <h1 className="text-6xl md:text-7xl font-semibold">
                                Let’s drop us a line and get the project started.
                            </h1>
                        </div>
                        <div className="col-span-8 md:col-span-2"></div>
                        <div className="col-span-8 md:col-span-2 px-4 md:px-0">
                            <p>Get in touch</p>
                            <p className="mb-2 mt-8 font-semibold text-2xl">
                                We’re excited to hear from you and let’s start something special together
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
                            <form>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 mt-12 md:mt-0">
                                    <input type="text" name="name"
                                               placeholder="Name"    className="outline-none border-b-1 pb-2 text-sm" />
                                    <input type="text" name="email"
                                               placeholder="Email"   className="outline-none border-b-1 pb-2 text-sm" />
                                    <input type="text" name="phone"
                                               placeholder="Phone"   className="outline-none border-b-1 pb-2 text-sm" />
                                    <input type="text" name="company"
                                               placeholder="Company" className="outline-none border-b-1 pb-2 text-sm" />
                                    <input type="text" name="budget"
                                               placeholder="Budget"  className="outline-none border-b-1 pb-2 text-sm" />
                                    <input type="text" name="subject"
                                               placeholder="Subject" className="outline-none border-b-1 pb-2 text-sm" />
                                    <textarea name="message"
                                               placeholder="Message" className="outline-none border-b-1 pb-2 text-sm col-span-1 md:col-span-2 mt-16" />
                                </div>
                                <button type="submit" className="text-lg px-10 py-4 bg-white text-black rounded-full mt-16 cursor-pointer">Send Message</button>
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


