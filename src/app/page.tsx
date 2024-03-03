
"use client";
import { TextareaText } from "./components/textareaText";
import Navbar from "./components/navbar";
import FormContainer from "./components/formContainer";
import { Dropdown } from "./components/dropdown";
import { fields, languages, operators } from "./data/data";
import { FormItem } from "./components/formItem";
import { ArrowsRightLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { FlowchartComp } from "./components/flowchart";
import { FormLine } from "./components/formLine";
import { FormLineIf } from "./components/formLineIf";
import { TextareaCode } from "./components/textareaCode";

export default function Home() {
  const [satz, setSatz] = useState("")

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setSatz(event.target.value)
  };

  const line = [(<FormLineIf number="1" />)]

  return (
    <body>
      <main>
        <Navbar />
        <div className="flex justify-center mx-auto">
          <div className="grow max-w-7xl flex">

            <div className="w-2/5 mr-10">
              <FormContainer>
                <FlowchartComp />
              </FormContainer>
            </div>

            <div className="w-4/5">
              <FormContainer>
                <FormItem title="Wenn...">
                  {line.map(i => {
                    return <div className="mb-2">{i}</div>;
                  })}
                </FormItem>
                <br /><br />
                <FormItem title="Dann...">
                  {line.map(i => {
                    return <div className="mb-2">{i}</div>;
                  })}
                </FormItem>
              </FormContainer>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-auto">
          <div className="grow max-w-7xl flex">
            <div className="w-full">
              <FormContainer>
                <FormItem title="Textausgabe">
                  <TextareaCode />
                </FormItem>
              </FormContainer>
            </div>
          </div>
        </div>
      </main>
      <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 Richard Peters</p>
    </body >
  );
}
