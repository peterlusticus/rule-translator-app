
"use client";
import { useState } from "react";
import { FlowchartComp } from "./components/flowchart";
import { FormLineIf } from "./components/formLineIf";
import { FormLineThan } from "./components/formLineThan";
import FormContainer from "./components/layout/formContainer";
import { FormItem } from "./components/layout/formItem";
import Navbar from "./components/navbar";
import { TextareaRuleOutput } from "./components/textareaRuleOutput";

export default function Home() {
  
  const [showLine1, setShowLine1] = useState(true)
  const [showLine2, setShowLine2] = useState(false)
  const [showLine3, setShowLine3] = useState(false)
  const [showLine4, setShowLine4] = useState(false)
  const [showLine5, setShowLine5] = useState(false)
  const [showLine6, setShowLine6] = useState(false)

  const [showLineThan1, setShowLineThan1] = useState(true)
  const [showLineThan2, setShowLineThan2] = useState(false)
  const [showLineThan3, setShowLineThan3] = useState(false)
  const [showLineThan4, setShowLineThan4] = useState(false)
  const [showLineThan5, setShowLineThan5] = useState(false)
  const [showLineThan6, setShowLineThan6] = useState(false)

  return (
    <body>
      <main>
        <Navbar />
        <div className="flex justify-center mx-auto">
          <div className="grow max-w-7xl flex">

            <div className="w-4/5 mr-10">
              <FormContainer>
                <FormItem title="Wenn...">
                  <div className="mb-2"> <FormLineIf id={1} setLineDel={setShowLine1} setLineAdd={setShowLine2} /> </div>
                  {showLine2 && <div className="mb-2"> <FormLineIf id={2} setLineDel={setShowLine2} setLineAdd={setShowLine3} /> </div>}
                  {showLine3 && <div className="mb-2"> <FormLineIf id={3} setLineDel={setShowLine3} setLineAdd={setShowLine4} /> </div>}
                  {showLine4 && <div className="mb-2"> <FormLineIf id={4} setLineDel={setShowLine4} setLineAdd={setShowLine5} /> </div>}
                  {showLine5 && <div className="mb-2"> <FormLineIf id={5} setLineDel={setShowLine5} setLineAdd={setShowLine6} /> </div>}
                  {showLine6 && <div className="mb-2"> <FormLineIf id={6} setLineDel={setShowLine6} setLineAdd={setShowLine6} /> </div>}
                </FormItem>

                <br /><br />

                <FormItem title="Dann...">
                  <div className="mb-2"> <FormLineThan id={1} setLineDel={setShowLineThan1} setLineAdd={setShowLineThan2} /></div>
                  {showLineThan2 && <div className="mb-2"> <FormLineThan id={2} setLineDel={setShowLineThan2} setLineAdd={setShowLineThan3} /></div>}
                  {showLineThan3 && <div className="mb-2"> <FormLineThan id={3} setLineDel={setShowLineThan3} setLineAdd={setShowLineThan4} /></div>}
                  {showLineThan4 && <div className="mb-2"> <FormLineThan id={4} setLineDel={setShowLineThan4} setLineAdd={setShowLineThan5} /></div>}
                  {showLineThan5 && <div className="mb-2"> <FormLineThan id={5} setLineDel={setShowLineThan5} setLineAdd={setShowLineThan6} /></div>}
                  {showLineThan6 && <div className="mb-2"> <FormLineThan id={6} setLineDel={setShowLineThan6} setLineAdd={setShowLineThan6} /></div>}
                </FormItem>
              </FormContainer>
            </div>

            <div className="w-2/5 ">
              <FormContainer>
                <FlowchartComp />
              </FormContainer>
            </div>

          </div>
        </div>

        <div className="flex justify-center mx-auto">
          <div className="grow max-w-7xl flex">
            <div className="w-full">
              <FormContainer>
                <FormItem title="Textausgabe">
                  <TextareaRuleOutput />
                </FormItem>
              </FormContainer>
            </div>
          </div>
        </div>

      </main>
      <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 FSU Jena</p>
    </body >
  );
}
