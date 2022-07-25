import React from "react";

const Users = ({ userIcon, user: { name } }) => {
  return (
    <div className="w-5/6 bg-gray-800 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg flex items-center lg:px-7 py-1.5 dark:bg-gray-700 dark:hover:bg-purple-800 dark:focus:ring-gray-700 mt-5 cursor-pointer">
      <img src={userIcon} className="h-8 w-8 mr-2" alt="user" />
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default Users;
