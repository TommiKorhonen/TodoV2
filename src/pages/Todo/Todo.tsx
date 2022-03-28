import React from "react";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const Todo = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      <div className="flex">
        <Sidebar />
      </div>
      <div className="flex flex-col py-4 w-full container mx-auto overflow-auto">
        <Navbar />
        <div className="flex gap-4 justify-end mt-8">
          <p className="border-l-4 border-l-green-700 pl-1">Low</p>
          <p className="border-l-4 border-l-yellow-700 pl-1">Medium</p>
          <p className="border-l-4 border-l-red-700 pl-1">High</p>
        </div>
        <div className="grid grid-cols-3 mt-8">
          <List name="To do" />
          {/* <List name="In progress" />
          <List name="Done" /> */}
        </div>
      </div>
    </div>
  );
};

export default Todo;
