"use client"
import { useState } from "react";
import { Input } from "./input";

export default function InputLabel({label, className, value, disabled}: any) {
    return ( 
        <div className="sm:flex flex-row items-center gap-2">
            <label className="text-sm text-end w-20 font-sans font-semibold">{label}</label>
            <Input  disabled={disabled} value={value} className={className}/>
        </div>
    )
}