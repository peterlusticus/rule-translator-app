"use client";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";


export function TextareaText(props: any) {
    const [error, setError] = useState(false)

    const handleChange = (event: any) => {
        console.log(event.target.value)
        setError(true)
    };

    return (
        <div>
            <textarea rows={1} name="comment" id="comment" className="form-input block w-full sm:text-sm border-gray-300 h-80" defaultValue={''} onChange={props.onChange} />
            {error && <div className="flex">
                <div className="inset-y-0 right-0 pr-3 flex items-center pointer-events-none"><ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" /></div>
                <p className="mt-2 text-sm text-red-600" id="email-error">Bitte geben Sie einen validen Satz ein (Hilfe zu der Syntax finden Sie hier).</p>
            </div>}

        </div>
    )
}
