import SectionTitle from "./section-title";

const AboutMe = () => {
    return (<div className="mt-5">
        <SectionTitle title="About Me" subtitle="Get to know me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-12">
            <div>
                <img src="https://placehold.co/1000x1200" alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-8">
                <h3 className="text-xl font-bold">Who am I?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia in corrupti eligendi inventore qui sed doloribus quaerat earum sap</p>


                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem cumque maiores quibusdam praesentium sint, nihil necessitatibus, quaerat quae odit magni labore. Id culpa repellendus delectus itaque adipisci, nostrum beatae.
                </p>
                <h3 className="text-xl font-bold">Work Experience</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia in corrupti eligendi inventore qui sed doloribus quaerat earum sap</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem cumque maiores quibusdam praesentium sint, nihil necessitatibus, quaerat quae odit magni labore. Id culpa repellendus delectus itaque adipisci, nostrum beatae.
                </p>
            </div>
        </div>
    </div>);
}

export default AboutMe;