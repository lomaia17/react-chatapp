import React from "react";

const Message = ({ message: { text, user }, name }) => {
  let currentUser = false;
  if (user) {
    if (user === name.trim().toLowerCase()) {
      currentUser = true;
    }
  }

  return currentUser ? (
    <div className="flex justify-end mb-3">
      <p className="text-white text-md py-2 px-5 bg-purple-600 rounded-xl">
        {text}
      </p>
    </div>
  ) : user === "Admin" ? (
    <div className="flex justify-start mb-3">
      <p className="text-gray-400 text-md py-2 ">{text}</p>
    </div>
  ) : (
    <div className="flex justify-start mb-3">
      <p className="text-white text-md py-2 px-5 bg-purple-900 rounded-xl">
        {user} : {text}
      </p>
    </div>
  );
};

export default Message;
