"use client";

import React from "react";
import Footer from "@/app/_components/footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen  px-6 lg:px-20 py-16">
            <div className="container mx-auto mt-12">
                <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 text-center">
                    Privacy Policy
                </h1>

                <p className="text-xl mb-12 text-center">
                    Effective Date: <strong>15th September 2025</strong> <br />
                {/*    Last Updated: <strong>[Insert Date]</strong>*/}
                </p>

                <section className="space-y-8 text-lg">
                    <p>
                        At <strong>MeltPixel</strong>, we respect your privacy and are committed to
                        protecting your personal information. This Privacy Policy explains how we collect, use, store,
                        and safeguard your information when you engage with our website, software development, digital
                        marketing, and SEO services.
                    </p>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
                        <p>We may collect the following types of information from you:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>
                                <strong>Personal Information:</strong> such as your name, email address, company name,
                                phone number, and billing details.
                            </li>
                            <li>
                                <strong>Project Information:</strong> materials, brand assets, or content you provide for
                                project completion.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> non-identifiable information like browser type, IP address,
                                and pages visited on our website for analytics and performance improvements.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
                        <p>Your information is used strictly for legitimate business purposes, including:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>To communicate with you about project details and updates.</li>
                            <li>To process invoices, payments, and project milestones.</li>
                            <li>To improve our Services, website experience, and client interactions.</li>
                            <li>To send marketing or promotional materials (only with your consent).</li>
                            <li>To comply with legal or regulatory obligations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>
                        <p>
                            We take data protection seriously. All personal and project-related data is stored securely
                            using modern encryption and restricted access. MeltPixel implements administrative,
                            technical, and physical safeguards to protect your data from unauthorized access or misuse.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">4. Data Sharing and Disclosure</h2>
                        <p>
                            We do <strong>not sell, rent, or trade</strong> your personal information. We may share your
                            data only in the following cases:
                        </p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>
                                With trusted third-party partners (such as hosting providers or analytics tools) who
                                assist us in delivering our Services.
                            </li>
                            <li>
                                When required by law, regulation, or legal request.
                            </li>
                            <li>
                                To enforce our Terms of Service or protect our rights, property, or safety.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">5. Cookies and Analytics</h2>
                        <p>
                            Our website may use cookies or similar technologies to enhance your browsing experience,
                            analyze traffic, and measure performance. You can manage or disable cookies through your
                            browser settings. We may also use analytics tools like Google Analytics to understand
                            anonymous user behavior and improve our website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">6. Data Retention</h2>
                        <p>
                            We retain personal and project-related data only for as long as necessary to fulfill the
                            purposes outlined in this policy or as required by law. Once data is no longer needed, it is
                            securely deleted or anonymized.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Access or request a copy of your personal information.</li>
                            <li>Request correction or deletion of inaccurate or outdated information.</li>
                            <li>Withdraw consent for marketing communications at any time.</li>
                            <li>
                                Contact us if you believe your data has been misused or improperly handled.
                            </li>
                        </ul>
                        <p className="mt-2">
                            To exercise any of these rights, please email us at{" "}
                            <a
                                href="mailto:meltpixel@gmail.com"
                                className="font-bold hover:underline"
                            >
                                meltpixel@gmail.com
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">8. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party sites. MeltPixel is not responsible for the
                            privacy practices or content of those external websites. We encourage you to review their
                            respective privacy policies.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">9. Updates to This Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in our practices or legal
                            requirements. The updated version will always be posted on this page with a revised “Last
                            Updated” date.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
                        <p>
                            For questions, concerns, or requests related to this Privacy Policy, please contact us.
                        </p>
                    </div>

                    <Footer />
                </section>
            </div>
        </main>
    );
}
