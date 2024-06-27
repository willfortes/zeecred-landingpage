"use client"

import Input from "@/components/Input"
import { SubmitHandler, useForm } from "react-hook-form"

type FormClientProps = {
    pixType: string
    pixKey: string
}

const PixFormClient = () => {

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
            <div className="mb-10">
                <Input 
                    label="Tipo de chave*" 
                    {...register("pixType")} 
                    placeholder="Selecione aqui"
                    inputClassName="col-span-1 mb-10" />
                <Input 
                    label="Chave*" 
                    {...register("pixKey")}
                    placeholder="Digite aqui"
                    inputClassName="md:col-span-2" />
            </div>
        </div>
    );
};

export default PixFormClient;