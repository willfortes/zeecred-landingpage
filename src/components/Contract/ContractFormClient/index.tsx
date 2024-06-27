"use client"

import Input from "@/components/Input"
import { SubmitHandler, useForm } from "react-hook-form"

type FormClientProps = {
    document: string
    name: string
    birthday: Date
    phone: string
    mobilePhone: string
    email: string
    cep: string
    address: string
    number: number
    complement: string
    neighborhood: string
    city: string
    state: string
    country: string
}

const ContractFormClient = () => {

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
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mb-10">
                <Input 
                    label="CPF" 
                    {...register("document")} 
                    placeholder="XXX.XXX.XXX-XX"
                    inputClassName="col-span-1" />
                <Input 
                    label="Nome" 
                    {...register("name")}
                    placeholder="Digite aqui"
                    inputClassName="md:col-span-2" />
                <Input 
                    label="Data de Nascimento" 
                    type="date" 
                    {...register("birthday")}
                    placeholder="dd/mm/aaaa"
                    inputClassName="col-span-1" />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mb-10">
                <Input 
                    label="Telefone" 
                    {...register("phone")}
                    placeholder="XX XXXXX-XXXX"
                    inputClassName="col-span-1" />
                <Input 
                    label="Celular" 
                    {...register("mobilePhone")}
                    placeholder="XX XXXXX-XXXX"
                    inputClassName="col-span-1" />
                <Input 
                    label="E-mail" 
                    {...register("email")}
                    placeholder="Digite aqui"
                    inputClassName="md:col-span-2" />
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-4 mb-10">
                <Input 
                    label="CEP" 
                    {...register("cep")}
                    placeholder="XXXXX-XXX"
                    inputClassName="col-span-1" />
                <Input 
                    label="Endereço" 
                    {...register("address")}
                    placeholder="Digite aqui"
                    inputClassName="md:col-span-2" />
                <Input 
                    label="Número" 
                    {...register("number")}
                    placeholder="Digite aqui"
                    inputClassName="col-span-1" />
                <Input 
                    label="Complemento" 
                    {...register("complement")}
                    placeholder="Digite aqui"
                    inputClassName="col-span-1" />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
                <Input 
                    label="Bairro" 
                    {...register("neighborhood")}
                    placeholder="Digite aqui"
                    inputClassName="col-span-1" />
                <Input 
                    label="Cidade" 
                    {...register("city")}
                    placeholder="Digite aqui"
                    inputClassName="md:col-span-2" />
                <Input 
                    label="Estado" 
                    {...register("state")}
                    placeholder="Digite aqui"
                    inputClassName="col-span-1" />
            </div>
        </div>
    );
};

export default ContractFormClient;