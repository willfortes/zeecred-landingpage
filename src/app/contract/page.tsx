"use client"

import Checkout from "@/components/Contract/Checkout";
import ContractFormClient from "@/components/Contract/ContractFormClient";
import Menu from "@/components/Contract/Menu";
import NextSteps from "@/components/Contract/NextSteps";
import PixFormClient from "@/components/Contract/PixFormClient";
import Steps from "@/components/Contract/Steps";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1);

  const router = useRouter();

  const handleStep = (next: boolean) => {
    if (next) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  }

  const handleLandingPage = () => {
    router.push("/")
  }

  return (
    <div className="bg-[#F9F9F9]">
        <Menu />
        <div className="container m-auto py-5 p-5 md:p-5">
            {currentStep != 4 ?
              <p className="text-sm mb-5 mt-5">Informe os dados solicitados abaixo para seguir com a contratação:</p>
            :
              <p className="text-sm mb-5 mt-5">Veja os próximos passos para receber o seu Pix.</p>
            }


            <div className="shadow-md w-full rounded-3xl bg-white">
                {currentStep != 4 &&
                  <div className="p-10 border-b-[1px] border-b-[#c9c9c9]">
                    <Steps currentStep={currentStep} steps={3} />
                  </div>
                }

                {currentStep === 1 &&
                  <div className="p-10">
                    <p className="text-xl font-bold mb-5">Informações pessoais</p>
                    <p className="text-sm font-light mb-5">Dados do titular</p>
                    <ContractFormClient />
                  </div>
                }
                
                {currentStep === 2 &&
                  <div className="p-10">
                    <p className="text-xl font-bold mb-5">Chave Pix para recebimento</p>
                    <p className="text-sm font-light mb-5">Dados da sua chave</p>
                    <PixFormClient />
                  </div>
                }

                {currentStep === 3 &&
                  <div>
                    <Checkout />
                  </div>
                }

                {currentStep === 4 &&
                  <div>
                    <NextSteps />
                  </div>
                }
            </div>

            {currentStep === 3 &&
              <div>
                <div className="flex items-center mb-5">
                    <input id="terms" type="checkbox" value="" className="w-10 h-10 text-primary bg-primary accent-primary border border-primary rounded-xl focus:ring-primary checked:bg-primary" />
                    <label htmlFor="terms" className="ms-2 md:text-xl text-base font-medium text-gray-900 ">Li e aceito os termos do <a href="" className="text-primary">Guia Contratual</a></label>
                </div>
                <div className="flex items-center">
                    <input id="politics" type="checkbox" value="" className="w-10 h-10 text-primary bg-primary accent-primary border-primary rounded-xl focus:ring-primary " />
                    <label htmlFor="politics" className="ms-2 md:text-xl text-base font-medium text-gray-900 ">Ao marcar, eu aceito <a href="" className="text-primary">Politica de Privacidade</a></label>
                </div>
              </div>
            }

            <div className={`${currentStep > 1 ? "grid md:grid-cols-2 sm:grid-cols-1" : currentStep >= 3 ? "flex justify-start" : "flex justify-end"} gap-5 mt-10 mb-40`}>
              {currentStep <= 1 &&
                <button type="button" onClick={handleLandingPage} className={`${currentStep > 1 ? "w-full" : "md:w-1/2 sm:w-full"} w-full border border-primary text-primary py-3 rounded-2xl hover:bg-primary hover:text-white`}>Voltar</button>
              }

              {currentStep > 1 && currentStep <= 3 &&
                <button type="button" onClick={() => handleStep(false)} className={`${currentStep > 1 ? "w-full" : "md:w-1/2 sm:w-full"} w-full border border-primary text-primary py-3 rounded-2xl hover:bg-primary hover:text-white`}>Anterior</button>
              }

              {currentStep <= 2 &&
                <button type="button" onClick={() => handleStep(true)} className={`${currentStep > 1 ? "w-full" : "md:w-1/2 sm:w-full"} w-full bg-primary text-white py-3 rounded-2xl hover:bg-violet-900`}>Próximo</button>
              }
              
              {currentStep === 3 &&
                <button type="button" onClick={() => handleStep(true)} className={`${currentStep > 1 ? "w-full" : "md:w-1/2 sm:w-full"} w-full bg-primary text-white py-3 rounded-2xl hover:bg-violet-900`}>Finalizar pedido</button>
              }

              {currentStep > 3 &&
                <button type="button" onClick={handleLandingPage} className={`${currentStep > 1 ? "w-full" : "md:w-1/2 sm:w-full"} w-full border border-primary text-primary py-3 rounded-2xl hover:bg-primary hover:text-white`}>Tive um problema</button>
              }

              {currentStep > 3 &&
                <button type="button" onClick={handleLandingPage} className={`${currentStep > 1 ? "w-full" : "md:w-1/2 sm:w-full"} w-full bg-primary text-white py-3 rounded-2xl hover:bg-violet-900`}>Ir para o início</button>
              }
            </div>
        </div>
        <Footer />
    </div>
  );
}
