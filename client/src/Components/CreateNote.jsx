import React, { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateNote = () => {
    // Logic to create note
    console.log("Note Created:", { title, description });
  };

  return (
    <div className="py-6 sm:py-12 lg:w-1/2">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Create a Note</h2>
        <input
          type="text"
          placeholder="Title"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={4}
          placeholder="Description"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className=" ">
          <button
            onClick={handleCreateNote}
            className=" mt-4  px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 w-full">
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function CreateNote() {
//   return (
//     <div className="py-6">
//       <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
//         <h2 className="text-lg font-bold text-gray-800 mb-4">Create a Note</h2>
//         <label
//           htmlFor="title"
//           className="block text-sm font-medium text-gray-700">
//           Title
//         </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           placeholder="Enter title..."
//           className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//         <label
//           htmlFor="description"
//           className="block mt-3 text-sm font-medium text-gray-700">
//           Description
//         </label>
//         <textarea
//           id="description"
//           name="description"
//           rows={4}
//           className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//         <button
//           type="button"
//           className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//           Create
//         </button>
//       </div>
//     </div>
//   );
// }
