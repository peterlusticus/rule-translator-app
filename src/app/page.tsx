
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
import { InputField } from "./components/input";
import { FormLineIf } from "./components/formLineIf";

export default function Home() {
  const [satz, setSatz] = useState("")

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setSatz(event.target.value)
  };

  const line = [(<FormLineIf number="1"/>)]

  return (
    <body>
      <main>
        <Navbar />
        <div className="flex justify-center mx-auto">
          <div className="grow max-w-7xl">

            <FormContainer>
                <FormItem title="Wenn...">
                  {line.map(i => {
                    return <div className="mb-2">{i}</div>;
                  })}
                </FormItem>
            </FormContainer>

            <FormContainer>
              <FormItem title="Dann...">
                {line.map(i => {
                  return <div className="mb-2">{i}</div>;
                })}
              </FormItem>
            </FormContainer>

            <FormContainer>
                <FlowchartComp />
            </FormContainer>

          </div>
        </div>
      </main>
      <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 Richard Peters</p>
    </body >
  );
}
