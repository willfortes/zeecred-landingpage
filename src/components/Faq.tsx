import Content from "@/shared/data.json";
import Question from "./Question";

const Faq = () => {
    
    return (
        <div id="faq" className="bg-tertiary py-20">
            <div className="container m-auto ">
                <div className="text-center my-5 mb-16 mx-10 md:mx-0">
                    <h1 className="text-3xl font-bold mb-3 font-sans">{Content.faq.title}</h1>
                    <p className="text-sm font-light">{Content.faq.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                    {Content.faq.questions.map(question => (
                        <Question key={question.question} question={question.question} answer={question.answer} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Faq;