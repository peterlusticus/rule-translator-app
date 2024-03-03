import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import { fields } from '../data/data'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function AutocompleteInput() {
    const [selectedField, setSelectedField] = useState('')
    const [query, setQuery] = useState('')

    const filteredFileds =
        query === ''
            ? fields
            : fields.filter((field) => {
                return field.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={selectedField} onChange={setSelectedField} nullable>
            <div className="relative w-full">

                <Combobox.Input onChange={(event) => setQuery(event.target.value)} displayValue={(person) => selectedField} className="relative w-full rounded-none border border-gray-300 bg-white text-left outline-none form-dropdown form-input cursor-text" />
                <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-none bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {query.length > 0 && (
                        <Combobox.Option value={query} />
                    )}
                    {filteredFileds.map((field) => (
                        <Combobox.Option key={field} value={field} className={({ active }) =>
                            classNames(
                                active ? 'text-white bg-green-600' : 'text-gray-900',
                                'relative cursor-pointer select-none rounded-none py-2 pl-3 pr-9'
                            )
                        }>
                            {field}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </div>
        </Combobox>
    )
}
