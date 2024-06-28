"use client"

import Input from "@/components/Shared/Input"
import { SubmitHandler, useForm } from "react-hook-form"
import mask from "@/utils/mask"

type FormClientProps = {
    pixType: string
    pixKey: string
}

const PaymentForm = () => {

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
                    <p className="text-xl font-bold mb-5">Dados do cartão</p>

                    <div className="mt-5">
                        <Input 
                            label="Número do cartão*" 
                            onChange={(e) => {
                                e.target.value = mask.cardNumberMask(e.target.value);
                            }}
                            placeholder="Digite aqui"
                            inputClassName="mb-10" />
                        <Input 
                            label="Nome impresso no cartão*" 
                            placeholder="Digite aqui"
                            inputClassName="mb-10" />

                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                            <Input 
                                label="Data de validade*" 
                                placeholder="mm/aa"
                                onChange={(e) => {
                                    e.target.value = mask.dateCardMask(e.target.value);
                                }}
                                inputClassName="mb-10" />
                            <Input 
                                label="CVV*" 
                                placeholder="123"
                                maxLength={4}
                                max={4}
                                inputClassName="mb-10" />
                        </div>
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

export default PaymentForm;