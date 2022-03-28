import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../redux/reducers/todoSlice";
import { v4 as uuidv4 } from "uuid";
interface IFormProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<IFormProps> = ({ setModalOpen }) => {
  const [values, setValues] = useState({
    title: "",
    details: "",
    date: "",
    priority: "",
    id: uuidv4(),
  });
  const dispatch = useDispatch();
  let handleChange = (e: { target: { name: any; value: any } }) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTask(values));
    setModalOpen(false);
  };
  return (
    <>
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">
          <input
            type="text"
            id="title"
            title="title"
            name="title"
            placeholder="Title:"
            className="w-full outline-none"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="">
          <textarea
            id="details"
            title="details"
            className="w-full resize-none h-48 outline-none"
            placeholder="Details: e.g go to gym, rent"
            name="details"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </label>
        <label htmlFor="" className="flex items-center gap-4">
          Due Date:
          <input
            type="date"
            id="date"
            title="date"
            name="date"
            className=" outline-none border p-1"
            onChange={(e) => handleChange(e)}
          />
        </label>
        <div className="mt-2 flex items-center gap-4">
          <input
            type="radio"
            name="priority"
            value="low"
            title="priority"
            onChange={(e) => handleChange(e)}
            id="low"
          />
          <label htmlFor="low">Low</label>
          <input
            type="radio"
            name="priority"
            value="medium"
            title="priority"
            id="medium"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            name="priority"
            value="high"
            title="priority"
            id="high"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="high">High</label>
        </div>

        <button className="border border-green-300 rounded-md px-4 mt-4 hover:bg-green-800 hover:text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
