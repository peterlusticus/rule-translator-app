/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { Fragment, useEffect, useRef, useState } from 'react'

export function UpdateFileModal(props: any) {
  const cancelButtonRef = useRef(null)
  // State to store uploaded file
  const [file, setFile] = useState<File>();

  // Upload file on change
  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  // Handle file upload event and update state
  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    const content = file == undefined ? new File([""], "") : file;

  };

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={props.setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-auto sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:block sm:items-start">
              <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    XML-Datei einlesen
                  </Dialog.Title>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex">
                  
                  <div className="mt-2 mx-auto">
                    <div className="flex flex-col">
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <ArrowUpTrayIcon className="h-5 w-5" />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>{!file && "XML-Datei hochladen"}{file && "XML-Datei erfolgreich hochgeladen"}</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleChange} />
                            </label>
                            <p className="pl-1">{!file && "oder hereinziehen"}</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">.XML bis Maximal 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-none border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 sm:text-sm"
                  onClick={() => props.setOpen(false)}
                >
                  Fertig
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}