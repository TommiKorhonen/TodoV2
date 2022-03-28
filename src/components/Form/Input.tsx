import React from "react";

interface IInputProps {
  name: string;
  handleChange: (e: { target: { name: any; value: any } }) => void;
}

const Input: React.FC<IInputProps> = ({ handleChange, name }) => {
  return (
    <label htmlFor="">
      <input
        type="text"
        id={name}
        title={name}
        name={name}
        placeholder={`${name}:`}
        className="w-full outline-none"
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
};

export default Input;
