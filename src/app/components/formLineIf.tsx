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
        <button type="button" className="mb-2 w-11 rounded-none bg-red-600 hover:bg-red-500 text-xl text-center text-base text-white ">
         🗑
        </button>
        <button type="button" className="mb-2 ml-3 mr-2 w-11 rounded-none bg-green-600 hover:bg-green-500 text-xl text-center text-base text-white ">
          +
        </button>
        
      </FormLine>
    )

}