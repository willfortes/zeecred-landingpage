"use client"

import Input from "@/components/Shared/Input"
import { SubmitHandler, useForm } from "react-hook-form"
import Content from "@/shared/data.json";
import SelectInput from "@/components/Shared/Select";
import mask from "@/utils/mask";
import { useState } from "react";

type FormClientProps = {
    pixType: string
    pixKey: string
}

const PixFormClient = () => {
    const [pixType, setPixType] = useState("")

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
                    onChange={(e) => {
                        setPixType(e.target.value)
                    }}
                    options={Content.form.pixTypes}
                    placeholder="Selecione aqui"
                    inputClassName="col-span-1 mb-10" />
                <Input 
                    label="Chave*" 
                    {...register("pixKey", {
                        onChange: (e) => {
                            switch (watch("pixType")) {
                                case "cpf":
                                    e.target.value = mask.cpfMask(e.target.value)
                                    break;
                                case "cnpj":
                                    e.target.value = mask.cnpjMask(e.target.value)
                                    break;
                                case "phone":
                                    e.target.value = mask.phoneMask(e.target.value)
                                    break;
                                case "email":
                                    e.target.value = e.target.value
                                    break;
                                default:
                                    e.target.value = e.target.value
                                    break;
                            }
                        }
                    })}
                    onChange={(e) => {
                        switch (pixType) {
                            case "cpf":
                                e.target.value = mask.cpfMask(e.target.value)
                                break;
                            case "cnpj":
                                e.target.value = mask.cnpjMask(e.target.value)
                                break;
                            case "phone":
                                e.target.value = mask.phoneMask(e.target.value)
                                break;
                            case "email":
                                e.target.value = e.target.value
                                break;
                            default:
                                e.target.value = e.target.value
                                break;
                        }
                    }}
                    placeholder="Digite aqui"
                    inputClassName="md:col-span-2" />
            </div>
        </div>
    );
};

export default PixFormClient;