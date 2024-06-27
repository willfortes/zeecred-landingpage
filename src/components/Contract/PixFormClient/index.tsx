"use client"

import Input from "@/components/Shared/Input"
import { SubmitHandler, useForm } from "react-hook-form"
import Content from "@/shared/data.json";
import SelectInput from "@/components/Shared/Select";

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
                <SelectInput
                    label="Tipo de chave pix"
                    {...register("pixType")}
                    options={Content.form.pixTypes}
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