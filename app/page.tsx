import LayoutButton from "./components/layout-button";
import SkillsArea from "./components/skills";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div>
        <h2 className="text-xl font-bold">Hey! I&apos;m <span className="text-indigo-500">David</span>.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <LayoutButton type="link" href="/" className="mt-2">Continue</LayoutButton>
      </div>

      <SkillsArea/>
    </div>
  );
}
