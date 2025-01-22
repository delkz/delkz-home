"use client"

import Link from "next/link";


const Header = () => {

    return (
        <div className="header">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <h1 className="text-2xl font-bold">
                            <Link href={"/"}>Delkz</Link>
                        </h1>
                    </div>
                    <div className="hidden">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;