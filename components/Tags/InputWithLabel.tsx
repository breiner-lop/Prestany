interface Props {
    name?:string,
    label?: string,
    placeholder?: string,
    type?: string,
    value?: any
    onChange?:any
    required?: boolean
}
export default function InputWithLabel({name, label, placeholder, type="text", value, onChange, required}:Props) {
    return (
        <div>
            <label htmlFor={name} className="font-medium">{label}</label>
           <input required={required} onChange={onChange} value={value} type={type} name={name} id={name} placeholder={placeholder} className="border w-full h-10 px-2 focus-within:outline-gray-300 mt-2" />
           </div>
    )
};
