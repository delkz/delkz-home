"use client"

import Image from "next/image";
import Link from "next/link";

const Header = () => {

    const changeLocale = (locale: string) => {
        document.cookie = `locale=${locale}; path=/`;
        window.location.reload();
    };

    const changeLocaleToPT = () => changeLocale('pt');
    const changeLocaleToEn = () => changeLocale('en');
    
    return (
        <div className="header">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <h1 className="text-2xl font-bold">
                            <Link href={"/"}>Delkz</Link>
                        </h1>
                    </div>
                    <div>

                        <button onClick={changeLocaleToPT}><Image width={32} height={32} src="https://flagsapi.com/BR/flat/32.png" alt="Portugues" /></button>
                        <button onClick={changeLocaleToEn}><Image width={32} height={32} src="https://flagsapi.com/GB/flat/32.png" alt="English" /></button>
                        <button className="hidden">
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