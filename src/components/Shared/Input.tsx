"use client"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    className?: string
    inputClassName?: string
}

const Input = ({
    label,
    className,
    inputClassName,
    ...InputProps
}: InputProps) => {
    return (
        <div className={`${inputClassName}`}>
            {label &&
                <label 
                    htmlFor={label.toLowerCase().replaceAll(' ', '')} 
                    className="block mb-3 text-sm font-light text-[#939393] focus:text-primary ">{label}</label>
            }
            <input 
                {...InputProps} 
                id={label.toLowerCase().replaceAll(' ', '')}
                className={`bg-gray-50 shadow-lg  text-gray-900 text-sm rounded-xl block w-full p-5 border-1 focus:outline-none border-[#E5E5E5] focus:outline-primary focus:border-primary ${className}`}/>
        </div>
    );
};

export default Input