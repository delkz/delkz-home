import { PortfolioItem } from "@/types";
import Image from "next/image";
import PortfolioCardTag from "./portfolio-card-tag";
import PortfolioModal from "./portfolio-modal";
import { useState } from "react";

interface PortfolioCardProps {
    item: PortfolioItem
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
    const { title, image, textsFallback, tags } = item;
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className="relative group"  >
            <Image  src={image} alt={title} width={300} height={400} className="rounded-lg shadow-lg bg-gray-50 border-0 h-[400px] object-cover object-top" />

            <div onClick={()=>{setIsModalOpen(!isModalOpen)}} rel="nofollow" title={title} className="cursor-pointer h-full flex gap-2 items-baseline flex-col justify-end text-white absolute bottom-0 left-0 w-full pl-5 pb-3 bg-gradient-to-t from-[#0000006c] to-[#0000] rounded-lg">
                <div className="flex flex-row gap-2 flex-wrap z-10">
                    <PortfolioCardTag tags={tags} />
                </div>
                <span className="text-xl font-bold  cursor-pointer ">{textsFallback.viewProject}</span>
            </div>
            <PortfolioModal modalController={{isModalOpen,setIsModalOpen}} item={item} />
        </div>
    )

};

export default PortfolioCard;