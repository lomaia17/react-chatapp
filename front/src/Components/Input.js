import React from "react";

const Input = ({ setMessage, sendMessage }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Write your message!"
        className="w-full focus:outline-none focus:placeholder-gray-300 text-white placeholder-gray-400 pl-12 bg-gray-800 rounded-xl py-2 mr-2"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <div className="items-center inset-y-0 hidden sm:flex">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl px-3 py-3 transition duration-500 ease-in-out text-white bg-purple-800 hover:bg-purple-900 focus:outline-none"
          onClick={(e) => sendMessage(e)}
        >
          <span>Send</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 ml-2 transform rotate-90"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Input;
