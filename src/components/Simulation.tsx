import Content from "@/shared/data.json";
import Image from "next/image";

const Simulation = () => {
    return (
        <div id="simulation" className="py-20">
            <div className="container m-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-primary rounded-lg text-white md:h-[350px] sm:h-fit">
                    <div className="p-10">
                        <h1 className="md:text-3xl text-2xl text-center md:text-left font-bold mb-5 font-sans" dangerouslySetInnerHTML={{__html: Content.simulation.title}} />
                        <p className="text-sm font-light leading-5" dangerouslySetInnerHTML={{__html: Content.simulation.subtitle}} />

                        <div className="mt-10">
                            <form className="block md:flex items-center max-w-lg">   
                                <div className="relative md:w-80 sm:w-full mb-5 md:mb-0">
                                    <input type="text" id="simulation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Digite o valor" required />
                                </div>
                                <button type="submit" className="w-full md:w-fit py-2.5 px-10 md:ms-2 text-sm font-medium text-black bg-secondary rounded-lg border focus:ring-4 focus:outline-none">
                                    Simule agora
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src="simulation.svg" className="m-auto relative md:bottom-[85px] sm:bottom-0" alt="Simulação" width={300} height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Simulation;