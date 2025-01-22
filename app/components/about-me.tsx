import Image from "next/image";
import SectionTitle from "./section-title";

const AboutMe = () => {
    return (<div className="mt-5">
        <SectionTitle title="About Me" subtitle="Get to know me" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-12">
            <div>
                <Image src={"/profile-image.png"} width={858} height={1200} alt="Delkz" className="w-full h-full rounded-3xl bg-gray-100 object-cover pt-5" />
            </div>
            <div className="flex flex-col gap-8">
                <h3 className="text-xl font-bold">Who am I?</h3>
                <p>Mid-Level Front-End Developer with over 4 years of experience in e-commerce and blogs, I am seeking new opportunities, preferably in a home office model. I am open to diverse projects, such as application development, software, and databases, as well as roles in back-end or full-stack positions.</p>
                <p>I have expertise in modern technologies such as React, Next.js, and GraphQL, as well as practices like Clean Code, TDD, and integrations with RESTful APIs. I value teamwork, self-management, and mentoring, always focusing on delivering efficient and high-impact solutions.</p>
                <h3 className="text-xl font-bold">Work Experience</h3>
                <section>
                    <h2>Mid-Level Front-End Developer (SERI.E DESIGN)</h2>
                    <p><strong>October 2019 - Present</strong></p>
                    <ul>
                        <li>
                            Developed and maintained e-commerce platforms such as Wake Storefront, Jet, Linx, Tray, Nuvemshop, Shopify, among others; as well as created and maintained WordPress blogs.
                        </li>
                        <li>
                            Refactored legacy code and proposed new technologies for the development team.
                        </li>
                        <li>
                            Optimized the performance of contracted websites.
                        </li>
                        <li>
                            Assisted other team members and estimated/validated tasks.
                        </li>
                        <li>
                            Trained development team members.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Junior Front-End Developer (Grupo Ideal Trends)</h2>
                    <p><strong>February 2019 - October 2019</strong></p>
                    <ul>
                        <li>Developed websites focused on SEO and organic positioning.</li>
                        <li>Developed internal tools.</li>
                    </ul>
                </section>


            </div>
        </div>
    </div>);
}

export default AboutMe;