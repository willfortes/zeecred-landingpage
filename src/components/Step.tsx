import Content from "@/shared/data.json";

const Step = () => {
    return (
        <section className="py-20 ">
            <div className="container m-auto">
                <div className="text-center mb-14">
                    <h1 className="text-3xl font-bold mb-5 font-sans">{Content.step.title}</h1>
                    <p className="text-sm font-light">{Content.step.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-1">
                    {Content.step.steps.map(step => (
                        <div key={step.title} className="md:flex sm:block m-auto md:m-0 items-center mb-16">
                            <img src={step.image} alt="" className="m-auto md:m-0"/>
                            <div className="ml-5 mt-10">
                                <h3 className="text-xl font-semibold text-center md:text-left">{step.title}</h3>
                                <p className="text-sm font-light w-48 text-center md:text-left leading-5 mt-5">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Step;