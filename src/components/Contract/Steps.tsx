"use client"

type StepsProps = {
    steps: number
    currentStep: number
}

const Steps = ({
    steps = 3,
    currentStep
}: StepsProps) => {

    let width = Math.round((currentStep / steps) * 100)

    console.log("width", width);

    return (
        <div className="flex justify-between relative">
            {[...Array(steps)].map((_, index) => (
                <div key={index} className={`w-10 h-10 flex justify-center content-center items-center rounded-full  ${Number(currentStep) >= Number(index) + 1 ? "bg-secondary" : "bg-[#E5E5E5]"} z-10`}>
                    <b>{index + 1}</b>
                </div>
                )
            )}
            <div className="w-full h-3 bg-[#E5E5E5] absolute top-[32%]">
                <div style={{width: `${width}%`}} className={`bg-gradient-to-r from-secondary  to-[#EAFFB1] h-3 rounded-full`}></div>
            </div>
        </div>
    )
}

export default Steps