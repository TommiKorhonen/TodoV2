import React from "react";

const Modal: React.FC<{ children: any; isForm?: boolean; title: string }> = ({
  children,
  isForm,
  title,
}) => {
  return (
    <div className=" fixed z-10 top-0 left-0 w-full h-full backdrop-blur-md bg-transparent">
      <div className="max-w-[480px] my-[200px] mx-auto bg-white ">
        {isForm && (
          <div className="bg-blue-700 p-3 text-white">
            <p>
              Create a new <span className="font-bold">{title}</span>
            </p>
          </div>
        )}
        <div className="p-8">
          {children}
          {/* <button>Close</button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
