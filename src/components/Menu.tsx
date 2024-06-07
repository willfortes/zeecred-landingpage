import Image from "next/image";

const Menu = () => {
    return (
        <nav className="w-full">
            <div className="container m-auto py-5 px-5 md:px-0">
                <div className="grid grid-cols-2">
                    <div className="flex items-center">
                        <Image src="logo.svg" alt="ZeeCred Logo" width={200} height={200}/>
                    </div>
                    <div className="justify-end hidden md:flex">
                        <ul className="flex gap-5 items-center">
                            <li><a href="#about" className="text-primary">Como funciona?</a></li>
                            <li><a href="#faq" className="text-primary">Perguntas frequentes</a></li>
                            <li className="ml-10">
                                <a href="#simulation" className="block text-black px-10 font-semibold py-2 bg-buttons rounded">
                                    Simule aqui
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Menu;