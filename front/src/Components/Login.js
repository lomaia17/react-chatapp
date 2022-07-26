import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="h-full bg-gray-800 flex justify-center items-center">
      <div className="py-10 px-12 bg-gray-900 rounded-2xl shadow-xl z-20 w-11/12 lg:w-1/3">
        <div>
          <h1 className="text-3xl text-white font-bold text-center mb-4 cursor-pointer">
            Chat App
          </h1>
          <p className="text-center text-gray-200 text-sm mb-8 font-semibold tracking-wide cursor-pointer">
            Join our community!
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            className="block text-sm py-3 px-4 text-white rounded-lg w-full border border-purple-900 outline-none bg-gray-900"
          />
          <input
            type="text"
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
            className="block text-sm text-white py-3 px-4 rounded-lg w-full border outline-none border-purple-900 bg-gray-900"
          />
        </div>
        <div className="text-center mt-6">
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button
              type="submit"
              className="py-3 w-full text-xl text-white bg-purple-900 rounded-2xl"
            >
              Join
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
