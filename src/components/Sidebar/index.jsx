/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Accordion from "../Accordion";

const Sidebar = ({ selectedNode, setSelectedNode, onUpdateNode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    role: "",
    description: "",
  });

  useEffect(() => {
    if (selectedNode) {
      const { about } = selectedNode.data;
      setFormData({
        name: about.name || "",
        email: about.email || "",
        title: about.title || "",
        role: about.role || "",
        description: about.description || "",
      });
    }
  }, [selectedNode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Updating the node in the main data
    onUpdateNode(selectedNode.id, formData);
  };

  if (!selectedNode) return null; // Hiding sidebar if no node is selected

  return (
    <div className="fixed left-2 md:left-auto md:absolute right-2 top-16 md:top-0 rounded-xl w-[97%] md:w-full h-[calc(100%-70px)] md:h-full p-2 sm:pl-0 sm:p-4 ">
      <div className="bg-[#1c1e26] relative py-4 p-2 sm:px-3 border border-[#222633] rounded-xl text-white h-full overflow-hidden overflow-y-scroll w-full">
        <div className="bg-[radial-gradient(circle_at_50%_0%,#283466_70%,#1c1e26_100%,transparent_100%)] z-[1] absolute h-60 w-full top-0 left-0"></div>

        <div className="z-[2] flex flex-col relative">
          <div className="flex gap-4 items-start justify-between">
            <div className="flex items-center gap-2 text-white ">
              <div className="rounded-full">
                <img
                  src={selectedNode?.data?.about?.image}
                  alt="Profile"
                  width="60"
                  height="60"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="font-bold text-base">
                  {selectedNode?.data?.about?.name}
                </h2>
                <p className="text-sm">{selectedNode?.data?.about?.title}</p>
              </div>
            </div>
            <div className="relative">
              <div
                className="bg-[#3c436b] px-1.5 py-1.5 rounded-md text-[#cecadb] cursor-pointer"
                onClick={() => setSelectedNode(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-[#1c1e26] rounded-xl p-2 py-4 sm:p-4 mt-5">
            <Accordion title="About" isComplete isOpenByDefault={true}>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#7c859d] text-sm mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="p-2 rounded-lg w-full text-sm text-white bg-[#1c1e26] border border-[#3f3c56]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7c859d] text-sm mb-1">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="p-2 rounded-lg w-full text-sm text-white bg-[#1c1e26] border border-[#3f3c56]"
                    />
                  </div>
                </div>
                <div className="mb-4 grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#7c859d] text-sm mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="p-2 rounded-lg w-full text-sm text-white bg-[#1c1e26] border border-[#3f3c56]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#7c859d] text-sm mb-1">
                      Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="p-2 rounded-lg w-full text-sm text-white bg-[#1c1e26] border border-[#3f3c56]"
                    >
                      <option value="">Select Role</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Member">Member</option>
                      <option value="Guest">Guest</option>
                      <option value="Editor">Editor</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[#7c859d] text-sm mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="p-2 rounded-lg w-full text-sm text-white bg-[#1c1e26] border border-[#3f3c56] min-h-32"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 p-2 px-4 rounded-xl"
                  >
                    Update
                  </button>
                </div>
              </form>
            </Accordion>
            <Accordion title="Management">
              <div className="">
                <p>No management information available yet.</p>
              </div>
            </Accordion>

            <Accordion title="To-do">
              <div className="">
                <p>No to-do items available yet.</p>
              </div>
            </Accordion>
          </div>
        </div>
        <div className="rounded-tl-full rounded-tr-full bg-[radial-gradient(circle_at_50%_100%,#283466_0%,#1c1e26_60%,transparent_100%)] z-[1] absolute h-80 w-full mx-auto flex justify-center -bottom-24 right-0 left-0"></div>
      </div>
    </div>
  );
};

export default Sidebar;
