import React, { useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={onClose}>
      <div className="bg-white p-8 rounded-lg w-80 transition duration-300 transform">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full border focus:outline-none focus:border-blue-500 mb-4"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full h-20 resize-none border focus:outline-none focus:border-blue-500 mb-4"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onClose}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Popup;
