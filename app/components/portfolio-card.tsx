import { PortfolioTags } from "@/types";
import Image from "next/image";
import Link from "next/link";
import PortfolioCardTag from "./portfolio-card-tag";

interface PortfolioCardProps {
    title: string;
    link: string;
    image: string;
    tags?: PortfolioTags[];
    textsFallback: {
        "viewProject": string,
    }

}

const PortfolioCard = ({ title, link, image, textsFallback, tags }: PortfolioCardProps) => {

    return (
        <div className="relative group">
            <Image src={image} alt={title} width={300} height={400} className="rounded-lg shadow-lg bg-gray-50 border-0 h-[400px] object-cover object-top" />

            <div rel="nofollow" title={title} className="h-full flex gap-2 items-baseline flex-col justify-end text-white absolute bottom-0 left-0 w-full pl-5 pb-3 bg-gradient-to-t from-[#0000006c] to-[#0000] rounded-lg">
                <div className="flex flex-row gap-2 flex-wrap">

                    <PortfolioCardTag tags={tags} />

                </div>
                <Link href={link} target="_blank" className="text-xl font-bold  cursor-pointer ">{textsFallback.viewProject}</Link>
            </div>

        </div>
    )

};

export default PortfolioCard;