import React, { Fragment, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpIcon,
  PaperClipIcon,
  SelectorIcon,
} from "@heroicons/react/outline";
import { ArchiveIcon } from "@heroicons/react/outline";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import CreateProject from "../Form/CreateProject";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];
const Dropdown = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  const [isForm, setIsForm] = useState(true);

  return (
    <div className="flex flex-col gap-7 items-center bg-white py-4 px-8">
      <div className="flex gap-8">
        <h2 className="text-xl font-bold">Projects</h2>
        <PlusCircleIcon
          className="text-blue-700 h-7 w-7 cursor-pointer"
          onClick={() => setModalOpen(true)}
        />
      </div>
      <div className="w-full">
        <div className="w-full max-w-md flex flex-col gap-4">
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <div className="relative mt-1">
              <Listbox.Button className="flex gap-8 items-center justify-between w-full text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
                <span className="block truncate">{selectedPerson.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>

          <Disclosure as={"div"}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex gap-4 items-center justify-between w-full text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
                  <div className="flex items-center gap-2">
                    <ArchiveIcon className="w-7 h-7" />
                    <span>Projects</span>
                  </div>
                  <ChevronUpIcon
                    className={`${open ? "transform rotate-180" : ""} w-5 h-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col gap-3 p-4 text-sm text-gray-500">
                  <p>Marjo</p>
                  <p>Sketchddddd</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as={"div"}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex gap-4 items-center justify-between w-full text-sm font-medium text-left focus:outline-none focus-visible:ring focus-visible:ring-black focus-visible:ring-opacity-75">
                  <div className="flex items-center gap-2">
                    <PaperClipIcon className="w-7 h-7" />
                    <span>Pinned</span>
                  </div>
                  <ChevronUpIcon
                    className={`${open ? "transform rotate-180" : ""} w-5 h-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-col gap-3 p-4 text-sm text-gray-500">
                  <p>Marjo</p>
                  <p>Sketchddddd</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      {modalOpen && (
        <Modal isForm={isForm} title="PROJECT">
          <CreateProject setModalOpen={setModalOpen} />
        </Modal>
      )}
    </div>
  );
};

export default Dropdown;
