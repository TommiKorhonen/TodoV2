import { PaperClipIcon } from "@heroicons/react/outline";
import React from "react";
import { ITasks } from "../../redux/reducers/todoSlice";
import MenuDrop from "../Menu/MenuDrop";
import ProfileImage from "../Profile/ProfileImage";

const Card: React.FC<ITasks> = ({ title, details, date, priority }) => {
  const handlePriority = () => {
    if (priority.toUpperCase() === "LOW") {
      // const borderGreen = "border-l-green-700";
      return "border-l-green-700";
    }
    if (priority.toUpperCase() === "MEDIUM") {
      // const borderGreen = "border-l-green-700";
      return "border-l-yellow-700";
    }
    if (priority.toUpperCase() === "HIGH") {
      // const borderGreen = "border-l-green-700";
      return "border-l-red-700";
    }
    return "";
  };
  return (
    <div
      className={`flex flex-col w-full gap-2 border-l-4 bg-white shadow-md p-4 break-words ${handlePriority()}`}
    >
      <div className="flex justify-between">
        <h3>{title}</h3>
        <PaperClipIcon className="w-6 h-6 text-gray-600" />
      </div>
      <p>{details}</p>
      <p>{date}</p>
      <div className="flex justify-between">
        <ProfileImage />
        <MenuDrop
          title={title}
          details={details}
          date={date}
          priority={priority}
        />
      </div>
    </div>
  );
};

export default Card;
