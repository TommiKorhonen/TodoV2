import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";

interface IList {
  name: string;
}

const List: React.FC<IList> = ({ name }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isForm, setIsForm] = useState(true);
  return (
    <div className="w-96">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{name}</h2>
        <button
          className="px-4 bg-blue-400 rounded-md"
          onClick={() => setModalOpen(true)}
        >
          New task
        </button>
      </div>
      <div className="mt-4 gap-6 flex flex-col">
        <Cards />
      </div>
      {modalOpen && (
        <Modal isForm={isForm} title="TASK">
          <Form setModalOpen={setModalOpen} />
        </Modal>
      )}
    </div>
  );
};

export default List;
