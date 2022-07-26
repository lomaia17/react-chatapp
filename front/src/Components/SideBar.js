import React from "react";
import Users from "./Users";
const SideBar = ({ users, userIcon }) => {
  return (
    <div className={`w-screen lg:block lg:w-1/4 h-full bg-slate-900  py-5`}>
      <h1 className="text-white text-2xl">Active:</h1>

      <div className="overflow-y-auto h-3/4 w-full scrollbar flex flex-col items-center">
        {users &&
          users?.map((user) => <Users user={user} userIcon={userIcon} />)}
      </div>
    </div>
  );
};

export default SideBar;
