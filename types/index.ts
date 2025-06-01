export type PortfolioTags = "WordPress" | "FullProject" | "LandingPage" | "inHouse" | "CompanyProject" | "eCommerce" | "Shopify" | "WebApp" | "UI/UX" | "Design" | "Development" | "SEO" | "Marketing" | "SocialMedia" | "Branding" | "ContentCreation" | "Photography" | "Videography" | "Consulting" | "Strategy" | "Analytics" | "Research" | "Training" | "Support" | "Serie A";
export type PortfolioItem = {
    id: number;
    image: string;
    link: string;
    title: string;
    date?: string;
    tags?: PortfolioTags[];
    description?: {
        [key: string]: string; // Allow any language code as key
        pt: string;
        en: string;
    };
    textsFallback: {
        "viewProject": string,
    }
}