import AboutMe from "./components/about-me";
import LayoutButton from "./components/layout-button";
import SkillsArea from "./components/skills";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div>
        <h2 className="text-xl font-bold">Hey! I&apos;m <span className="text-indigo-500">David</span>.</h2>
        <p>
        Mid-Level Front-End Developer with over 4 years of experience in e-commerce and blogs
        </p>
        <LayoutButton type="link" href="/" className="mt-2">Continue</LayoutButton>
      </div>

      <SkillsArea/>

      <AboutMe/>

      <h2 className="text-xl font-bold back text-white bg-black text-center p-4 mt-5">Thanks for visiting! I&apos;m not finished building this page yet, so feel free to come back in the future. :) </h2>
    </div>
  );
}
