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
                    case "external":
                        tagBackground = "bg-purple-500";
                        break;
                    case "shopify":
                        tagBackground = "bg-green-500";
                        break;
                    default:
                        break;
                }


                return (
                    <Link href={"/terms-of-use#tags"} key={index} className={"text-[11px] font-semibold text-white rounded-full px-3 py-1 uppercase " + tagBackground}>{tag}</Link>
                )
            })}</>
    )

};

export default PortfolioCardTag;