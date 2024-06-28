"use client"

import Menu from "@/components/Contract/Menu";
import PaymentForm from "@/components/Contract/Payment";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Payment() {

  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  const handlePayment = () => {
    router.push("/payment/status")
  }

  return (
    <div className="bg-[#F9F9F9]">
        <Menu />
        <div className="container m-auto py-5 p-5 md:p-5">
            <p className="text-sm mb-5 mt-5">Agora basta informar os dados do cartão e ter acesso a quantia via Pix.</p>
            <div className="shadow-md w-full rounded-3xl bg-white">
                <PaymentForm />
            </div>


            <div className={`mt-10 mb-40`}>
            <button type="button" onClick={handlePayment} className={`w-full bg-primary text-white py-3 rounded-2xl font-bold hover:bg-violet-900`}>Quero meu pix</button>
            </div>
        </div>
        <Footer />
    </div>
  );
}
