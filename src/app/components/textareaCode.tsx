"use client";
import { DocumentDuplicateIcon } from "@heroicons/react/16/solid";
import { languages } from "../data/data";
import { SelectLanguage } from "./selectLanguage";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect, useState } from "react";

hljs.registerLanguage('javascript', javascript)


export function TextareaCode(props: any) {
    const [valueTransformed, setValueTransformed] = useState(<></>)
    var code = ""

    if (props.satz == "hih") {
        code = "if(document.getElementByName('893873').value == 3) {document.getElementByName('4367467').hide()}"
    }
    const highlightedCode = hljs.highlightAuto(code).value;

    return (
        <div className="relative">
            <textarea rows={10} id="code" className="form-input block w-full sm:text-sm  border-gray-300 h-64" style={{ color: "rgb(243 244 246)" }} defaultValue={''} />
            <button type="submit" id="btnCopy" className='absolute top-1 right-0 text-gray-400 button-secondary'><DocumentDuplicateIcon className="h-4 w-4" /></button>
            <div>
                <pre className='absolute top-2 left-4 sm:text-sm ' style={{whiteSpace: "pre-wrap"}} dangerouslySetInnerHTML={{ __html: highlightedCode, }} />
            </div>
        </div>
    )
}
