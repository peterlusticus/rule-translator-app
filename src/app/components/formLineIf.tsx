import { fields, logOperators, operators } from "../data/data";
import { Dropdown } from "./dropdown";
import { FormLine } from "./layout/formLine";
import { AutocompleteInput } from "./autocompleteInput";
import { Dispatch, SetStateAction } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import "../style/custom.css"

export function FormLineIf(props: {id: number, setLineDel: Dispatch<SetStateAction<boolean>>, setLineAdd: Dispatch<SetStateAction<boolean>>}) {
  const id = props.id

  const handleAdd = () => {
    props.setLineAdd(true)
  }

  const handleDel = () => {
    props.setLineDel(false)
  }

  return (
    <div>
      {id !== 1 && <FormLine><div className="w-full mx-4"><Dropdown items={logOperators} prop={"logoperator_"+id} order={true}/></div></FormLine>}
      <FormLine>
        <div className="w-4/12 mr-4"><Dropdown items={fields} prop={"field_" + id} order={true}/></div>
        <div className="w-2/12 mr-4"><Dropdown items={operators} prop={"operator_" + id} order={true}/></div>
        <div className="w-4/12 mr-4"> <AutocompleteInput prop={"value_" + id} /> </div>
        {id !== 1 && <button type="button" className="mb-2 w-11 rounded-none bg-red-600 hover:bg-red-500 text-xl text-center text-base text-white " onClick={handleDel}> <TrashIcon className="mx-auto h-5 w-5" /> </button>}
        {id == 1 && <button type="button" className="mb-2 w-11 rounded-none bg-gray-300 hover:bg-gray-200 text-xl text-center text-base text-white " onClick={handleDel}> <TrashIcon className="mx-auto h-5 w-5" /></button>}
        <button type="button" className="mb-2 ml-3 mr-2 w-11 rounded-none bg-green-600 hover:bg-green-500 text-xl text-center text-base text-white " onClick={handleAdd}><PlusIcon className="mx-auto h-5 w-5" /></button>
      </FormLine>
    </div>
  )

}