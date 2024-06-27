"use client"

type options = {
    selected?: boolean
    label: string
    value: string
}

type InputProps = React.InputHTMLAttributes<HTMLSelectElement> & {
    label: string
    className?: string
    options: options[]
    inputClassName?: string
}
const SelectInput = ({
    label,
    className,
    inputClassName,
    options,
    ...InputProps
}: InputProps) => {

    return (
        <div className={`${inputClassName}`}>
            <label 
                htmlFor={label.toLowerCase().replaceAll(' ', '')} 
                className="block mb-3 text-sm font-light text-[#939393] focus:text-primary ">
                    {label}
            </label>

            <select 
                id={label.toLowerCase().replaceAll(' ', '')} 
                {...InputProps}
                className={`bg-gray-50 shadow-lg  text-gray-900 text-sm rounded-xl block w-full p-[23px] border-1 focus:outline-none border-[#E5E5E5] focus:outline-primary focus:border-primary ${className}`}>
                {options.map((item, index) => (
                    <option key={index} value={item.value} selected={item.selected ? true : false}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput