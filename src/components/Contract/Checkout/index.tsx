"use client"

import Input from "@/components/Input"
import { SubmitHandler, useForm } from "react-hook-form"

type FormClientProps = {
    pixType: string
    pixKey: string
}

const Checkout = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormClientProps>()
      
    const onSubmit: SubmitHandler<FormClientProps> = (data) => {

    }

    return (
        <div>
            <div className="mb-10 grid md:grid-cols-2 sm:grid-cols-1">
                <div className="sm:w-full p-10 h-[500px]">
                    <p className="text-xl font-bold mb-5">Dados do contratante</p>

                    <div className="mt-5">
                        <p className="text-xs text-primary">Nome completo</p>
                        <p className="text-sm mb-5">Luís Archanjo</p>
                        <p className="text-xs text-primary">CPF</p>
                        <p className="text-sm">567.***.***-09</p>
                    </div>
                </div>
                <div className="sm:w-full bg-[#F9F9F9] p-10 h-[500px]">
                    <p className="text-xl font-bold mb-5">Resumo</p>

                    <div className="mt-5">
                        <div className="flex justify-between w-full border-b-[1px] border-b-[#c9c9c9] py-5">
                            <p className="text-sm">Valor pedido</p>
                            <p className="font-semibold">R$ 200,00</p>
                        </div>
                        <div className="flex justify-between w-full border-b-[1px] border-b-[#c9c9c9] py-5">
                            <p className="text-sm">Valor a ser liberado</p>
                            <p className="font-semibold">R$ 185,00</p>
                        </div>
                        <div className="flex justify-between w-full py-5">
                            <p className="text-sm">Parcelas a pagar</p>
                            <p className="font-semibold">3x de R$ 66,67</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;