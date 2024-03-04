"use client";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export function TextareaRuleOutput(props: any) {
    const [value, setValue] = useState('')

    const handleChange = (event: any) => {
        setValue(event.target.value)
    };

    return (
        <div className="relative">
            <textarea rows={5} id="code" className="form-input block w-full sm:text-sm border-gray-300 h-64 text-black" value={value} onChange={handleChange} />
            <button type="submit" id="btnCopy" className='absolute top-1 right-0 text-gray-400 button-secondary'><DocumentDuplicateIcon className="h-4 w-4" /></button>

        </div>
    )
}