import React from "react";

const Message = ({ message: { text, user }, name }) => {
  return (
    <div className="flex justify-end mb-3">
      <p className="text-white text-md py-2 px-5 bg-purple-900 rounded-xl">
        {text}
      </p>
    </div>
  );
};

export default Message;
