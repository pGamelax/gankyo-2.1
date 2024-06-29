"use client"
import { Input } from "./input";

export default function InputLabel({label, className, register, value, disabled}: any) {
    return ( 
        <div className="sm:flex flex-row items-center gap-2">
            <label className="text-sm text-end w-20 font-sans font-semibold">{label}</label>
            <Input {...register} disabled={disabled} value={value} className={className} />
        </div>
    )
}
