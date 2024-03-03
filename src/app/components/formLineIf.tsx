import { fields, operators } from "../data/data";
import { Dropdown } from "./dropdown";
import { FormLine } from "./formLine";
import { AutocompleteInput } from "./autocompleteInput";
import "../custom.css"

export function FormLineIf(props: any) {
    const number = props.number;

    return (<FormLine>
        <div className="w-2/5 mr-4"><Dropdown items={fields} /></div>
        <div className="w-20 mr-4"><Dropdown items={operators} /></div>
        <div className="w-2/5 mr-4"> <AutocompleteInput /> </div>
        <button type="button" className="mb-3 mt-1 mr-4 w-9 rounded-none text-xl font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          +
        </button>
        <button type="button" className="mb-3 mt-1 w-9 rounded-none text-xl font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          -
        </button>
      </FormLine>
    )

}