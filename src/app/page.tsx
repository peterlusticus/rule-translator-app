
"use client";
import { TextareaText } from "./components/textareaText";
import { TextareaCode } from "./components/textareaCode";
import Navbar from "./components/navbar";
import FormContainer from "./components/formContainer";
import { Dropdown } from "./components/dropdown";
import { languages } from "./data/data";
import { FormItem } from "./components/formItem";
import { ArrowsRightLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Home() {
  const [satz, setSatz] = useState("")

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setSatz(event.target.value)
  };

  return (
    <body>
      <main>
        <Navbar />

        <div className="flex justify-center mx-auto">
          <div className="grow max-w-7xl px-4 sm:px-6 ">
            <FormContainer>
              <div className="flex">

                <div className="w-3/4">
                  <FormItem title="Regel als Satz eingeben">
                    <TextareaText onChange={handleChange} satz={setSatz} />
                  </FormItem>
                </div>

                <div>
                  <button type="submit" id="btnChange" className='button-secondary ml-1 mr-1'><ArrowsRightLeftIcon className="h-4 w-4" /></button>

                </div>

                <div className="w-3/4">
                  <FormItem title="Code">
                    <Dropdown items={languages} />
                    <TextareaCode satz={satz} />
                  </FormItem>
                </div>

              </div>

              <div className="mt-6">
                <button className="button-primary w-full">Weiter →</button>
              </div>
            </FormContainer>
          </div>
        </div>

      </main>
      <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 Richard Peters</p>
    </body>
  );
}
