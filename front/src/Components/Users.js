import React from "react";

const Users = ({ userIcon, user: { name } }) => {
  return (
    <div className="w-full sm:w-auto bg-gray-800 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-7 py-1.5 dark:bg-gray-700 dark:hover:bg-purple-800 dark:focus:ring-gray-700 mt-5  cursor-pointer">
      <img src={userIcon} className="h-8 w-8 mr-5" alt="user" />
      <div className="text-left">
        <div className="-mt-1 font-sans text-sm font-semibold">{name}</div>
      </div>
    </div>
  );
};

export default Users;
