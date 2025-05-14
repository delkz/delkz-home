import { useTranslations } from "next-intl";
import AboutMe from "./components/about-me";
import LayoutButton from "./components/layout-button";
import SkillsArea from "./components/skills";
import ContactForm from "./components/contact-form";
import { ToastContainer } from 'react-toastify';
import Portfolio from "./components/portfolio";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="container mx-auto px-4">
         <ToastContainer />
      <div>
        <h2 className="text-xl font-bold"> {t("hello")} <span className="text-indigo-500">David</span>.</h2>
        <p>
        {t("hello_description")}
        </p>
        <LayoutButton type="link" href="/" className="mt-2">{t("continue")}</LayoutButton>
      </div>
      
      <SkillsArea/>
      <Portfolio/>
      <AboutMe/>

    
      {process.env.RECAPTCHA_SITE && <ContactForm sitekey={process.env.RECAPTCHA_SITE}/>}

      <h2 className="text-xl font-bold back text-white bg-black text-center p-4 mt-5">{t("working")} </h2>
    </div>
  );
}
