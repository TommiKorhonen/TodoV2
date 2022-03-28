import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "../../redux/reducers/todoSlice";
import Input from "./Input";
interface ICreateProject {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateProject: React.FC<ICreateProject> = ({ setModalOpen }) => {
  const [title, setTitle] = useState({
    title: "",
  });
  const dispatch = useDispatch();
  let handleChange = (e: { target: { name: any; value: any } }) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createProject(title));
    setModalOpen(false);
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <Input name="Title" handleChange={handleChange} />
      <button className="border border-green-300 rounded-md px-4 mt-4 hover:bg-green-800 hover:text-white">
        Submit
      </button>
    </form>
  );
};

export default CreateProject;
