import Link from "next/link";

type layoutButtonProps = {
    type: "button" | "link";
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    target?: string;
    className?: string;
    title?: string;
}

const LayoutButton = ({ type, children, onClick, href, className, target = "_blank", title="Delkz, Front-end developer"}: layoutButtonProps) => {

    const DefaultClassName = "bg-black border-black border text-white px-4 py-2 text-center block lg:inline-block hover:bg-indigo-500 hover:text-black ";

    if (type === "link") {
        return (
            <Link className={`${DefaultClassName} ${className}`} target={target} title={title} href={href ? href : ""}>{children}</Link>
        );
    }

    return (
        <button title={title} className={`${DefaultClassName} ${className}`} onClick={onClick}>{children}</button>
    );
};

export default LayoutButton;