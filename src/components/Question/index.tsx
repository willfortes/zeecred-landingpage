"use client"
import { useState } from "react";

type Question = {
    question: string;
    answer: string;
}

const Question = ({ question, answer }: Question) => {
    const [open, setOpen] = useState(false);

    const toogleOpen = () => setOpen(!open);

    return (
        <div className="p-10 bg-white rounded-lg mx-10 md:mx-0">
            <div className="flex justify-between">
                <h3 className="font-normal text-lg md:text-2xl mr-5 md:mr-0">{question}</h3>
                <div onClick={toogleOpen} className={`cursor-pointer text-3xl w-10 h-10 min-h-10 min-w-10 ${open ? "bg-primary text-secondary" : "bg-secondary text-primary"} rounded-md text-center`}>
                    {open ? "-" : "+"}
                </div>
            </div>
            {open && 
                <div className="mt-10 transition ease-in-out delay-150">
                    <p className="text-base font-light leading-7">{answer}</p>
                </div>
            }
        </div>
    )
}

export default Question