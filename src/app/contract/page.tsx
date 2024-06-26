"use client"

import Menu from "@/components/Contract/Menu";
import Steps from "@/components/Contract/Steps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9]">
        <Menu />
        <div className="container m-auto py-5">
            <p className="text-sm mb-5">Informe os dados solicitados abaixo para seguir com a contratação:</p>

            <div className="shadow-md w-full rounded-3xl bg-white p-5">
                <Steps currentStep={1} steps={3} />
            </div>
        </div>
        <Footer />
    </div>
  );
}
