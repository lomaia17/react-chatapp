import React from "react";
import Users from "./Users";
const SideBar = ({ users, userIcon }) => {
  return (
    <div className="w-1/4 h-full bg-slate-900  py-5">
      <h1 className="text-white text-2xl">Active:</h1>
      {/* {users?.map((user) => (
        <Users user={user} userIcon={userIcon} />
      ))} */}
    </div>
  );
};

export default SideBar;
