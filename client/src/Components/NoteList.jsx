// import React from "react";

// const NotesList = () => {
//   const notes = [
//     { id: 1, title: "Note 1", content: "This is the content of note 1" },
//     { id: 2, title: "Note 2", content: "This is the content of note 2" },
//     { id: 3, title: "Note 3", content: "This is the content of note 3" },
//   ];

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">My Notes</h1>
//       {notes.map((note) => (
//         <div key={note.id} className="bg-gray-100 p-4 rounded-md mb-2">
//           <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
//           <p>{note.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NotesList;

import React from "react";
import Popup from "./Popup";

const NotesList = () => {
  const notes = [
    { id: 1, title: "Note 1", content: "This is the content of note 1" },
    { id: 2, title: "Note 2", content: "This is the content of note 2" },
    { id: 3, title: "Note 3", content: "This is the content of note 3" },
  ];

  const handleDelete = (id) => {
    // Implement delete functionality here
  };

  const handleUpdate = (id) => {
    // Implement update functionality here
  };

  return (
    <div className="p-4 lg:w-1/2">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-gray-100 p-4 rounded-md mb-2 flex flex-row ">
          <div
            className="flex justify-between items-left w-[95%]  flex-col"
            //       style={{ border: "2px solid black" }}
          >
            <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
            <p>{note.content}</p>
          </div>
          <div
            className="flex flex-col justify-between text-lg  items-start  w-[5%] "
            //       style={{ border: "2px solid black" }}
          >
            <button
              onClick={() => handleDelete(note.id)}
              className="text-red-500 mr-2 text-justify">
              <i class="fa-solid fa-trash"></i>
              {/* <FaTrash /> */}
            </button>
            <button
              onClick={() => handleUpdate(note.id)}
              className="text-blue-500">
              <i class="fa-solid fa-pen-to-square"></i>
              {/* <FaEdit /> */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
