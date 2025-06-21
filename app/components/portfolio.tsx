'use client';

import { useTranslations } from "next-intl";
import PortfolioCard from "./portfolio-card";
import SectionTitle from "./section-title";
import { useEffect, useState } from "react";
import { PortfolioTags } from "@/types";

interface PortfolioCase {
    id: number,
    image: string,
    link: string,
    title: string,
    tags: PortfolioTags[],
    viewModel: string
}


const Portfolio = () => {
    const [cases, setCases] = useState<PortfolioCase[]>([]);
    useEffect(() => {
        const fetchCases = async () => {
            const res = await fetch("api/portfolio");
            const data = await res.json();
            setCases(data);
            console.log(cases);
        }
        fetchCases();
    }, [])


    const t = useTranslations('Portfolio');
    return (<div className="mt-5 lg:mt-10 mb-10">
        <div className="flex flex-col items-center justify-center">
            <SectionTitle title={t("title")} subtitle={t("subtitle")} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 min-h-[400px]">
                {cases.map((item) => {
                    return (
                        <PortfolioCard key={item.id} item={{ ...item, textsFallback: { viewProject: t("viewProject") } }} />
                    )
                })}
            </div>

        </div>
    </div>)

};

export default Portfolio;