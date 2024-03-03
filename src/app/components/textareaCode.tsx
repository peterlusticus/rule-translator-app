"use client";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect, useState } from "react";

hljs.registerLanguage('javascript', javascript)


export function TextareaCode(props: any) {
    const [value, setValue] = useState('')
    var code = "props.satz"

    const handleChange = (event: any) => {
        console.log(event.target.value)
        setValue(event.target.value)
    };

    return (
        <div className="relative">
            <textarea rows={5} id="code" className="form-input block w-full sm:text-sm border-gray-300 h-64 text-black" value={value} onChange={handleChange} />
            <button type="submit" id="btnCopy" className='absolute top-1 right-0 text-gray-400 button-secondary'><DocumentDuplicateIcon className="h-4 w-4" /></button>
            
        </div>
    )
}