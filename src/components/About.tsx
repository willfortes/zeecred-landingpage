"use client"

import Content from "@/shared/data.json";
import { motion, Variants } from "framer-motion";
import Image from "next/image";


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

const About = () => {
    return (
        <section id="about" className="bg-secondary p-20">
            <motion.div 
                className="container m-auto p-10"
                initial="offscreen"
                whileInView="onscreen">
                <h1 className="text-3xl font-bold mb-20 text-center md:text-left leading-8 font-sans" dangerouslySetInnerHTML={{__html: Content.about.title}} />
                
                <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-10 mt-32">
                    {Content.about.steps.map(step => (
                        <motion.div key={step.title} variants={cardVariants} className="p-10 bg-white rounded-lg relative mb-10 md:mb-0">
                            <div className="p-1 rounded-full bg-white w-fit absolute -top-10 left-1/2 -translate-x-1/2">
                                <div className="p-5 bg-primary w-fit rounded-full">
                                    <Image src={step.image} width={40} height={40} alt="steps" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-center text-primary mt-7 mb-7">{step.title}</h3>
                            <p className="text-sm font-light leading-4 w-[80%] m-auto" dangerouslySetInnerHTML={{__html: step.description}} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
};

export default About;