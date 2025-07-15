import Image from "next/image";
import SectionTitle from "./section-title";
import { useTranslations } from "next-intl";

const AboutMe = () => {
    const t = useTranslations('AboutMe');
    return (<div className="mt-5">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-12">
            <div>
                <Image src={"/profile-image.png"} width={858} height={1200} alt="Delkz" className="w-full h-full rounded-3xl bg-gray-100 object-cover pt-5" />
            </div>
            <div className="flex flex-col gap-8">
                <h3 className="text-xl font-bold">{t("text_title")}</h3>
                {t.rich("text_content",{
                  p: (chunks) => <p>{chunks}</p>
                })}
                <h3 className="text-xl font-bold">{t("work_title")}</h3>

                {t.rich("work_content",{
                  p: (chunks) => <p>{chunks}</p>,
                  h2: (chunks) => <h2>{chunks}</h2>,
                  strong: (chunks) => <strong>{chunks}</strong>,
                  ul: (chunks) => <ul>{chunks}</ul>,
                  li: (chunks) => <li>{chunks}</li>,
                  section: (chunks) => <section>{chunks}</section>
                })}


            </div>
        </div>
    </div>);
}

export default AboutMe;