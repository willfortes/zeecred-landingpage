import Content from "@/shared/data.json";
import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-primary text-white">
            <div className="container m-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-6xl font-bold mb-5 mt-28 text-center md:text-left leading-10" dangerouslySetInnerHTML={{__html: Content.header.title}} />
                        <p className="text-sm text-center md:text-left w-60 m-auto md:m-0 md:w-fit font-extralight">{Content.header.subtitle}</p>
                        <br/>
                        <a 
                            className="w-4/5 md:w-fit m-auto md:m-0 border-2 text-secondary border-secondary px-14 py-2 rounded-md block text-center md:text-left mb-20"
                            href={Content.header.buttonHref}>{Content.header.button}</a>
                    </div>
                    <div className="flex justify-center">
                        <Image src="header.svg" alt="ZeeCred" width={500} height={500} />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;