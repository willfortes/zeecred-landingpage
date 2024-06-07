import Content from "@/shared/data.json";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-20">
            <div className="container m-auto">
                <div className="grid md:grid-cols-10 sm:grid-cols-1 px-10 md:px-0">  
                    <div className="md:col-span-2 sm:col-span-1 mb-10 sm:mb-0">
                        <Image src="logo-white.svg" alt="ZeeCred Logo" width={200} height={200} />
                    </div>
                    <div className="md:col-span-8 sm:col-span-1">
                        <p className="text-sm font-light leading-5" dangerouslySetInnerHTML={{__html: Content.footer.description}} />
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;