type layoutButtonProps = {
    type: "button" | "link";
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?:string;
}

const LayoutButton = ({type,children,onClick,href,className}:layoutButtonProps) => {

    const DefaultClassName = "bg-black border-black border text-white px-4 py-2 text-center block lg:inline-block hover:bg-indigo-500 hover:text-black ";

    if(type === "link"){
        return (
            <a className={`${DefaultClassName} ${className}`} href={href}>{children}</a>
        );
    }

    return (
        <button className={`${DefaultClassName} ${className}`} onClick={onClick}>{children}</button>
    );
};

export default LayoutButton;