import { useTranslations } from "next-intl";
import Layout from "../components/Layout";
export default function TermsOfUse() {
    const t = useTranslations("TermsOfUse");
    return (
        <Layout>
        <div className="container mx-auto px-4 min-h-[calc(100vh-180px)]">
            <div>
                <h1 className="font-bold mt-4 text-2xl">{t("title")}</h1>

                <p>{t("subtitle")}</p>

                <h2 className="font-bold mt-4">1. {t("terms.1.title")}</h2>
                <p>{t.rich("terms.1.content", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                    a: (chunks) => <a className='underline' href='https://colorlib.com/wp/template/space/' target='_blank'>{chunks}</a>
                })}</p>

                <h2 className="font-bold mt-4">2. {t("terms.2.title")}</h2>
                <div>{t.rich("terms.2.content", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                    p: (chunks) => <p>{chunks}</p>,
                    a: (chunks) => <a className='underline' href='https://www.vecteezy.com/vector-art/10683213-wavy-line-isolated-on-white-background' target='_blank'>{chunks}</a>
                })}</div>
               
                <h2 className="font-bold mt-4">3. {t("terms.3.title")}</h2>
                <p>{t("terms.3.content")}</p>

                <h2 className="font-bold mt-4">4. {t("terms.4.title")}</h2>
                <p>{t("terms.4.content")}</p>

                <h2 id="tags" className="font-bold mt-4">5. {t("terms.5.title")}</h2>
                <div>{t.rich("terms.5.content", {
                    strong: (chunks) => <strong>{chunks}</strong>,
                    p: (chunks) => <p>{chunks}</p>,
                })}</div>


                <p>{t("thanks")}</p>
            </div>

        </div>
        </Layout>
    );
}
