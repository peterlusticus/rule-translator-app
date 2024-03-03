import { fields, logOperators, operators } from "../data/data";
import { Dropdown } from "./dropdown";
import { FormLine } from "./formLine";
import { AutocompleteInput } from "./autocompleteInput";
import "../custom.css"

export function FormLineIf(props: any) {
  const number = props.number;
  const handleAdd = () => {
    props.setLineAdd(true);
  }

  const handleDel = () => {
    props.setLineDel(false);
  }

  return (
    <div>
      {number !== 1 && <FormLine><div className="w-full mx-4"><Dropdown items={logOperators} number={number} /></div></FormLine>}
      <FormLine>
        <div className="w-2/5 mr-4"><Dropdown items={fields} number={number} /></div>
        <div className="w-20 mr-4"><Dropdown items={operators} number={number} /></div>
        <div className="w-2/5 mr-4"> <AutocompleteInput number={number} /> </div>
        {number !== 1 && <button type="button" className="mb-2 w-11 rounded-none bg-red-600 hover:bg-red-500 text-xl text-center text-base text-white " onClick={handleDel}> 🗑</button>}
        {number == 1 && <button type="button" className="mb-2 w-11 rounded-none bg-gray-300 hover:bg-gray-200 text-xl text-center text-base text-white " onClick={handleDel}>🗑</button>}
        <button type="button" className="mb-2 ml-3 mr-2 w-11 rounded-none bg-green-600 hover:bg-green-500 text-xl text-center text-base text-white " onClick={handleAdd}>+</button>
      </FormLine>
    </div>
  )

}