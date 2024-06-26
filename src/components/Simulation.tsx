"use client"

import Content from "@/shared/data.json";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { useRouter } from "next/navigation";

const cardVariants: Variants = {
    offscreen: {
        scale: 0.5,
    },
    onscreen: {
        scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
};

const MIN_VALUE_FOR_INSTALLMENTS = 200;
const LOAN_INTEREST_RATE = 5

const Simulation = () => {
    const [amount, setAmount] = useState(0);

    const router = useRouter();

    const [installments, setInstallments] = useState<any[]>([]);
    const [inputAmount, setInputAmount] = useState<any>();

    const formatCurrency = (value: any) => {
        if (!value) return '';
        
        // Converte o valor para string
        const stringValue = value.toString();
        
        // Remove tudo que não é número
        const cleanValue = stringValue.replace(/\D/g, '');
        
        // Formata o número
        const formattedValue = (Number(cleanValue) / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        
        return formattedValue;
    };

    const getTotal = (valor: number, parcelas: any, validateMinValue = true) => {
        let taxaMensal = 5 / 100;
        let taxaTotal = 0;
        let montante = 0;
    
        if (!isNaN(valor) && !isNaN(parcelas) && valor > 0 && parcelas > 0) {
            if(!validateMinValue || Number(valor) >= 200) {
                montante = Number(valor);
                taxaTotal += (Number(valor) * Number(taxaMensal)) * Number(parcelas);
                montante += (Number(valor) * Number(taxaMensal)) * Number(parcelas);

                montante = parseFloat(montante.toFixed(2));
            }
        }
        return [montante, taxaTotal];
    }

    const calcula = (parcelas: any) => {
        console.log("calc", amount);
        setInstallments([]);

        let taxaTotal = 0;
        let montante = 0;

        let installment = [2, 3, 6, 12]

        installment.map((i) => {
            if (!isNaN(amount) && !isNaN(parcelas) && amount > 0 && parcelas > 0) {
                // Call external function
                [montante, taxaTotal] = getTotal(amount, i);
            }

            let installmentAmount = montante / i
    
            let outMontante = montante.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            let outTaxa = taxaTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
            let installmentAmountCurrency = installmentAmount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            setInstallments((prev) => [...prev, { installment: i, installmentAmount: installmentAmountCurrency, montante: outMontante, taxa: outTaxa }])
        })
    }

    const handleGetAmount = (e: any) => {
        setAmount(Number((parseFloat(e.target.value.toString().replace(/\D/g, '')) / 100).toFixed(2)))
        setInputAmount(formatCurrency(e.target.value))
    }

    const [selectedInstallmentIndex, setSelectedInstallmentIndex] = useState(3);
    const [selectedInstallment, setSelectedInstallment] = useState();

    const handleSelectInstallment = (index: any, item: any) => {
        setSelectedInstallmentIndex(index)
        setSelectedInstallment(item)
    }

    const handleContract = () => {
        console.log("selectedInstallment", selectedInstallment);
        router.push("/contract");
    }

    return (
        <div id="simulation" className="py-20" >
            <div className="container m-auto md:px-20 px-10">
                <motion.div 
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={cardVariants}
                    className="grid md:grid-cols-2 sm:grid-cols-1 bg-primary rounded-lg text-white md:h-[350px] sm:h-fit">
                    <div className="p-10">
                        <h1 className="md:text-3xl text-2xl text-center md:text-left font-bold mb-5 font-sans" dangerouslySetInnerHTML={{__html: Content.simulation.title}} />

                            {installments.length > 0 ?
                                <div className="mt-4">
                                    <p className="text-sm font-light leading-5 mb-3">Veja os valores liberados:</p>
                                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 w-fit m-auto md:m-0">    
                                        {installments.map((item, index) => (
                                            <div key={index} onClick={() => handleSelectInstallment(index, item)} className={`flex justify-center	items-center w-fit py-2 px-5 rounded-full border-secondary border-[1px] hover:bg-secondary hover:text-black cursor-pointer ${selectedInstallmentIndex === index ? 'bg-secondary text-black' : ''}`}>
                                                <p className="text-base whitespace-nowrap"><b>{item.montante} •</b> <span className="font-light">{item.installment}x de {item.installmentAmount}</span></p>
                                            </div>
                                        )).reverse()}
                                    </div>
                                </div>
                            : (
                                <p className="text-sm font-light leading-5" dangerouslySetInnerHTML={{__html: Content.simulation.subtitle}} />
                            )}

                        <div className="mt-10">
                            {installments.length > 0 ?
                                <button onClick={handleContract} type="button" className="w-full md:w-fit py-2.5 px-5 md:ms-2 text-sm font-medium text-black bg-secondary rounded-lg border focus:ring-4 focus:outline-none hover:bg-[#96CD00]">
                                    Contratar
                                </button>
                            :
                                <form className="block md:flex items-center max-w-lg">   
                                    <div className="relative md:w-80 sm:w-full mb-5 md:mb-0">
                                        <input onChange={handleGetAmount} value={inputAmount} type="text" id="simulation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Digite o valor R$ 0,00" required />
                                    </div>
                                    <button onClick={() => calcula(12)} type="button" className="w-full md:w-fit py-2.5 px-5 md:ms-2 text-sm font-medium text-black bg-secondary rounded-lg border focus:ring-4 focus:outline-none hover:bg-[#96CD00]">
                                        Simule agora
                                    </button>
                                </form>
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image src="simulation.svg" className="m-auto relative md:bottom-[85px] sm:bottom-0" alt="Simulação" width={300} height={300} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default Simulation;