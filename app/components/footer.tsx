"use client"

import Link from "next/link";

const Footer = ()=>{
    
    return (
        <div className="footer bg-black text-white mt-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between items-center py-4">
                    <div>
                        <h2 className="text-xl font-bold mt-5 lg:mt-0">
                            Delkz
                        </h2>
                    </div>
                    <div>
                        <ul className="mt-5 lg:mt-0">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={"/terms-of-use"}>Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="items-center py-4 text-[11px] text-gray-500  text-center lg:text-left">
                    Layout Inspired by <a target="_blank" title="ColorLib" href="https://colorlib.com/wp/template/space/" >ColorLib</a>
                </div> */}
            </div>
        </div>
    );
}

export default Footer;