
import { TextareaText } from "./components/textareaText";
import { TextareaCode } from "./components/textareaCode";
import Navbar from "./components/navbar";
import FormContainer from "./components/formContainer";
import { Dropdown } from "./components/dropdown";
import { languages } from "./data/data";
import { FormItem } from "./components/formItem";

export default function Home() {
  return (
    <body>
      <main>
        <Navbar />

        <div className="flex justify-center mx-auto">
          <div className="grow max-w-7xl px-4 sm:px-6 ">
            <FormContainer>
              <div className="grid grid-cols-21 grid-flow-col gap-4 ">

                <div className="col-span-10">
                  <FormItem title="Regel als Satz eingeben">
                    <TextareaText />
                  </FormItem>
                </div>

                <div className="col-span-1">
                  <button type="submit" id="btnLogin" className='button-secondary'>                  &harr;                  </button>
                </div>

                <div className="col-span-10">
                  <FormItem title="Code">
                    <Dropdown items={languages} />
                    <TextareaCode />
                  </FormItem>
                </div>

              </div>
            </FormContainer>
          </div>
        </div>

      </main>
      <p className="mt-8 text-center text-base text-gray-400">&copy; 2023 Richard Peters</p>
    </body>
  );
}
