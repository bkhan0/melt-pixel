import Footer from "@/app/_components/footer";

export default function TermsOfService(){
    return (
        <>
            <main className="min-h-screen px-6 lg:px-20 py-16">
                <div className="container mx-auto mt-12">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 text-center ">
                        Terms of Service
                    </h1>

                    <p className=" mb-12 text-center text-xl">
                        Effective Date: <strong>15th September 2025</strong> <br />
                        {/*Last Updated: <strong></strong>*/}
                    </p>

                    <section className="space-y-8 text-lg">
                        <p>
                            Welcome to <strong>MeltPixel</strong>. These Terms of Service
                            govern all services provided by MeltPixel, including but not limited to software development,
                            digital marketing, and SEO. By engaging with our Services, you
                            agree to comply with and be bound by these Terms.
                        </p>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">1. Scope of Services</h2>
                            <p>
                                MeltPixel provides software development, digital marketing, and SEO solutions customized to
                                each client’s requirements. All project details, timelines, and deliverables will be defined
                                in a written agreement or project proposal prior to commencement.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">2. Payments and Fees</h2>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>A <strong>25% non-refundable deposit</strong> is required upfront before any work begins.</li>
                                <li>The remaining balance will be billed as per the agreed milestones.</li>
                                <li><strong>No refunds</strong> will be issued once <strong>50% or more</strong> of the project has been completed.</li>
                                <li>Work will not begin until initial payment has been received in full.</li>
                                <li>Late payments may result in suspension of Services.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">3. Client Responsibilities</h2>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>
                                    The Client must provide all <strong>relevant information, materials, and access
                                    credentials</strong> necessary for the project before work begins.
                                </li>
                                <li>
                                    Delays caused by incomplete or missing information may affect delivery timelines, for
                                    which MeltPixel will not be held responsible.
                                </li>
                                <li>
                                    The Client is responsible for ensuring that all provided content, media, or data{" "}
                                    <strong>does not infringe on third-party copyrights or intellectual property
                                        rights</strong>.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>MeltPixel does <strong>not use or distribute copyrighted or unlicensed
                                    material</strong>.</li>
                                <li>
                                    Upon full payment, the Client will receive ownership or licensed rights to all final
                                    deliverables as outlined in the project contract.
                                </li>
                                <li>
                                    MeltPixel retains the right to showcase completed projects in its portfolio or marketing
                                    materials unless otherwise stated in a signed Non-Disclosure Agreement (NDA).
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">5. Confidentiality & NDA</h2>
                            <p>
                                Both parties agree to maintain strict confidentiality regarding all proprietary information
                                shared during the project. Once a <strong>Non-Disclosure Agreement (NDA)</strong> is signed,
                                <strong> both MeltPixel and the Client are legally bound</strong> to fulfill their respective
                                contractual and confidentiality obligations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">6. Revisions & Changes</h2>
                            <p>
                                Revisions are limited to the agreed number stated in the project proposal. Additional changes
                                beyond the agreed scope will be billed separately.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
                            <p>
                                MeltPixel will not be held liable for any indirect, incidental, or consequential damages
                                arising from project outcomes, third-party actions, or delays caused by circumstances beyond
                                our control.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
                            <p>
                                Either party may terminate the agreement with written notice. If the project is terminated
                                after the halfway point, no refund will be issued. The Client remains responsible for any
                                outstanding payments for work completed up to the date of termination.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">9. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of{" "}
                                <strong>Pakistan</strong>, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-2">10. Acceptance of Terms</h2>
                            <p>
                                By engaging MeltPixel’s services or submitting payment, the Client acknowledges that they
                                have read, understood, and agreed to these Terms of Service.
                            </p>
                        </div>

                        <Footer/>
                    </section>
                </div>
            </main>
        </>
    );
};