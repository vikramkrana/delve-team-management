/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProfileCard = ({ selectedNodeId, nodeData }) => {
  return (
    <div
      className={`flex bg-[#1b1c21] rounded-xl p-1 border ${
        selectedNodeId === nodeData.id.toString()
          ? "border-transparent"
          : " border-[#222633]"
      }`}
    >
      <div
        className={`flex gap-2 text-white p-[1px] rounded-lg ${
          selectedNodeId === nodeData.id.toString()
            ? "bg-gradient-to-r from-[#232d4b] to-[#152cf8]"
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-col gap-3 bg-[#1b1c21] rounded-lg sm:px-2 sm:py-2.5 min-w-60">
          <div className="flex gap-4 items-start justify-between">
            <div className="flex items-center gap-2 text-white ">
              <div className="rounded-full">
                <img
                  src={nodeData.about.image}
                  alt="Profile"
                  width="40"
                  height="40"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="font-bold text-xs">{nodeData.about.name}</h2>
                <p className="text-xs">{nodeData.about.title}</p>
              </div>
            </div>
            <div className="relative">
              <div
                onClick={(e) => {}}
                className="bg-[#30323f] px-1.5 py-1.5 rounded-md text-[#7c859d] cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-between">
            <div className="progress-container bg-[#222222] w-[90%]">
              <div
                className="progress-bar h-1 bg-gradient-to-r from-[#c1c7f7] to-[#152cf8] rounded-lg"
                style={{ width: `${nodeData.about.progress}%` }} // Dynamic progress
              ></div>
            </div>
            <p className="text-[#7c859d] text-xs">{nodeData.about.progress}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
