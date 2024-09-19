import React, { useState } from "react";

const Accordion = ({ title, isComplete = false, children, isOpenByDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault); // Start with default open state

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#1c1e26] rounded-xl mb-3">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer flex justify-between items-center p-2 bg-[#2c3149] rounded-xl"
      >
        <div className="flex items-center gap-3">
          <div
            className={`border w-5 h-5 flex items-center justify-center border-[#3e54ff] rounded-full ${
              isComplete ? "bg-[#3e54ff]" : ""
            }`}
          >
            {isComplete && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                ></path>
              </svg>
            )}
          </div>
          <h3 className="text-base text-white">{title}</h3>
        </div>
        <span className="text-white">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14z"
              ></path>
            </svg>
          )}
        </span>
      </div>
      {isOpen && <div className="py-4">{children}</div>}
    </div>
  );
};

export default Accordion;
