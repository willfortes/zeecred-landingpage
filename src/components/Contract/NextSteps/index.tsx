"use client"

import Input from "@/components/Shared/Input"
import { SubmitHandler, useForm } from "react-hook-form"

type FormClientProps = {
    pixType: string
    pixKey: string
}

const NextSteps = () => {

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
            <div className="mb-10 p-10">
                <div className="m-auto mb-10">
                    <p className="text-xl w-full text-center m-auto font-bold mb-5 mt-5">Próximos passos</p>
                    
                    <div className="w-1/2 md:flex sm:grid sm:grid-cols-1 justify-between m-auto gap-1 relative -left-5 md:-left-0">
                        <div className="w-48 h-52 rounded-2xl bg-[#F4EDFF] p-5 mb-10">
                            <p className="text-lg text-primary font-bold">1° Passo</p>
                            <p className="text-base font-normal mt-5">Você irá receber uma mensagem via Whatsapp de nossa equipe</p>
                        </div>
                        <div className="relative top-14 hidden md:block">
                            <p className="text-2xl text-primary font-bold">{">"}</p>
                        </div>
                        <div className="w-48 h-52 rounded-2xl bg-[#F4EDFF] p-5 mb-10">
                            <p className="text-lg text-primary font-bold">2° Passo</p>
                            <p className="text-base font-normal mt-5">Siga as instruções para realizar a prova de vida e reserva de limites do cartão.</p>
                        </div>
                        <div className="relative top-14 hidden md:block">
                            <p className="text-2xl text-primary font-bold">{">"}</p>
                        </div>
                        <div className="w-48 h-52 rounded-2xl bg-[#F4EDFF] p-5">
                            <p className="text-lg text-primary font-bold">3° Passo</p>
                            <p className="text-base font-normal mt-5">Assim que concluir a etapa anterior, aguarde validaçãoe o Pix será enviado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextSteps;