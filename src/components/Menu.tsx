"use client"
import Image from "next/image";
import { useState } from "react";
import Recommendation from "./Recommendation";

const Menu = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false);

    return (
        <>
            <nav className="w-full">
                <div className="container m-auto py-5 px-5 md:px-0">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center relative">
                            <Image src="logo.svg" alt="ZeeCred Logo" width={182.92} height={34}/>
                            
                            <Recommendation name={"Marcos Vinicius Teixeira Fernandes"} />
                        </div>
                        <div className="flex justify-end content-center items-center">
                            <ul className="gap-5 items-center hidden md:flex">
                                <li><a href="#about" className="text-primary">Como funciona?</a></li>
                                <li><a href="#faq" className="text-primary">Perguntas frequentes</a></li>
                                <li className="ml-10">
                                    <a href="#simulation" className="block text-black px-10 font-semibold py-2 bg-buttons rounded">
                                        Simule aqui
                                    </a>
                                </li>
                            </ul>

                            <div className="md:hidden">
                                <div onClick={() => setOpenMenuMobile(!openMenuMobile)}>
                                    {openMenuMobile ?
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.832764" y="20.8389" width="29" height="4" rx="2" transform="rotate(-45 0.832764 20.8389)" fill="#6A25DA"/>
                                            <rect x="21.3389" y="23.6673" width="29" height="4" rx="2" transform="rotate(-135 21.3389 23.6673)" fill="#6A25DA"/>
                                        </svg>                                    
                                    :
                                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="29" height="4" rx="2" fill="#6A25DA"/>
                                            <rect y="10" width="29" height="4" rx="2" fill="#6A25DA"/>
                                            <rect y="20" width="29" height="4" rx="2" fill="#6A25DA"/>
                                        </svg>
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {openMenuMobile && 
                <nav className="w-full bg-white p-2 z-50 absolute md:hidden">
                    <ul className="">
                        <li><a href="#about" className="block w-full p-5 py-4 text-primary">Como funciona?</a></li>
                        <li><a href="#faq" className="block w-full p-5 py-4 text-primary mb-5">Perguntas frequentes</a></li>
                        <li>
                            <a href="#simulation" className="w-full block text-black px-10 font-semibold py-4 bg-buttons rounded">
                                Simule aqui
                            </a>
                        </li>
                    </ul>
                </nav>
            }
        </>
    )
};

export default Menu;