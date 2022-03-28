import { Menu, Transition } from "@headlessui/react";
import { DotsHorizontalIcon, XIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import { ITasks } from "../../redux/reducers/todoSlice";
import Modal from "../Modal/Modal";

const MenuDrop: React.FC<ITasks> = ({ title, details, date, priority }) => {
  const [modalOpen, setModalOpen] = useState(false);
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <Menu as="div" className="ml-3 relative ">
        <div>
          <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <DotsHorizontalIcon className="w-7 h-7" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setModalOpen(true)}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm w-full text-left text-gray-700"
                  )}
                >
                  Details
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      {modalOpen && (
        <Modal title="TASK">
          <div className="flex flex-col gap-1">
            <XIcon
              className="h-6 w-6 self-end cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
            <div className="mb-2">
              <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
            <div className="font-medium">
              <p>Priority: {priority}</p>
              <p>Date: {date}</p>
              <p>Details: {details}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default MenuDrop;
