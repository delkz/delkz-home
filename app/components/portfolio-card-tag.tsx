import { PortfolioTags } from "@/types";
import Link from "next/link";

interface PortfolioCardTagsProps {
    tags?: PortfolioTags[];

}

const PortfolioCardTag = ({ tags }: PortfolioCardTagsProps) => {

    return (
        <>
            {tags && tags.map((tag, index) => {
                let tagBackground = "bg-orange-500";

                switch (tag.toLowerCase()) {
                    case "wordpress":
                        tagBackground = "bg-blue-500";
                        break;
                    case "companyproject":
                        tagBackground = "bg-purple-500";
                        break;
                    case "shopify":
                        tagBackground = "bg-green-500";
                        break;
                    case "serie a":
                        tagBackground = "bg-black";
                        break;
                    default:
                        break;
                }


                let linkTag = "/terms-of-use#tags";
                let isExternalLink = false;
                if(tag === "Serie A"){
                    isExternalLink = true;
                    linkTag = "https://www.seriedesign.com.br/";
                }

                return (
                    <Link title={tag} href={linkTag} target={isExternalLink ? "_blank" : "_self"} key={index} className={"text-[11px] font-semibold text-white rounded-full px-3 py-1 uppercase " + tagBackground}>{tag}</Link>
                )
            })}</>
    )

};

export default PortfolioCardTag;