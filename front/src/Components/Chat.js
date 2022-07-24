import React, { useState, useEffect } from "react";
import userIcon from "../assets/icons8-male-user-48.png";
import turnOffIcon from "../assets/power-xxl.png";
import io from "socket.io-client";
import queryString from "query-string";
import { useLocation, Link } from "react-router-dom";
import Input from "./Input";
import Users from "./Users";
import Message from "./Message";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  let location = useLocation();
  const ENDPOINT = "http://localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="h-screen w-full bg-gray-800 flex justify-center items-center">
      <div className="flex h-3/4 w-3/4 ">
        <SideBar users={users} userIcon={userIcon} />
        <div className="bg-gray-900 h-full w-3/4  py-5 px-5 flex flex-col justify-between">
          <TopBar turnOffIcon={turnOffIcon} room={room} />
          <div className="overflow-y-auto">
            {messages.map((message, i) => (
              <Message message={message} key={i} />
            ))}
          </div>

          <div className="flex">
            <Input setMessage={setMessage} sendMessage={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
