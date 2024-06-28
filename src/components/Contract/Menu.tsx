"use client"
import Image from "next/image";
import LogoWhite from "@/assets/logo-white.svg";
const Menu = () => {

    return (
        <>
            <nav className="w-full bg-primary">
                <div className="container m-auto py-5 px-5 md:px-0">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center relative">
                            <Image src={LogoWhite} alt="ZeeCred Logo" width={182.92} height={34}/>
                        </div>
                        <div className="flex justify-end content-center items-center">
                           
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Menu;