"use client"

import Menu from "@/components/Contract/Menu";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CheckIcon from "@/assets/check.png"

export default function Payment() {

  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  const handlePayment = () => {
    router.push("/")
  }

  return (
    <div className="bg-[#F9F9F9]">
        <Menu />
        <div className="container m-auto py-5 p-5 md:p-5">
            <p className="text-sm mb-5 mt-5">Chegamos a conclusão do processamento de seu cartão.</p>
            <div className="shadow-md w-full rounded-3xl bg-white h-96 flex justify-center content-center">
                <div className="m-auto w-fit text-center">
                    <Image src={CheckIcon} className="m-auto mb-5" alt="ZeeCred Icon Check" width={94} height={94} />
                    <p className="font-bold text-sm">Seu cartão foi processado com sucesso</p>
                </div>
            </div>


            <div className={`mt-10 mb-40 grid md:grid-cols-2 sm:grid-cols-1 gap-5`}>
                <button disabled type="button" onClick={() => {}} className={`disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-gray-200 w-full border border-primary text-primary py-3 font-bold rounded-2xl hover:bg-primary hover:text-white`}>Anterior</button>
                <button type="button" onClick={handlePayment} className={`w-full bg-primary text-white py-3 rounded-2xl font-bold hover:bg-violet-900`}>Ir para o início</button>
            </div>
        </div>
        <Footer />
    </div>
  );
}
