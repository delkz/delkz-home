import Image from "next/image";

interface PortfolioCardProps {
    title: string;
    link: string;
    image: string;
    textsFallback: {
        "viewProject": string,
    }
        
}

const PortfolioCard = ({ title, link, image,textsFallback }: PortfolioCardProps) => {

    return (
        <div className="relative group">
            <Image src={image} alt={title} width={300} height={400} className="rounded-lg shadow-lg bg-gray-50 border-0 h-[400px] object-cover object-top" />


            <a href={link} rel="nofollow" target="_blank" title={title} className="h-full flex items-end text-white hover:underline cursor-pointer absolute bottom-0 left-0 w-full pl-5 pb-3 bg-gradient-to-t from-[#0000006c] to-[#0000] rounded-lg">
                <h3 className="text-xl font-bold">{textsFallback.viewProject}</h3>
            </a>

        </div>
    )

};

export default PortfolioCard;