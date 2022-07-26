import React, { useState, useEffect, useRef } from "react";
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
  const bottomRef = useRef();
  let location = useLocation();
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(Object.values(error));
      }
    });
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);
  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
    event.target.value = null;
  };
  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  });
  const [isActive, setIsActive] = useState(true);
  const toggleUsers = () => {
    if (window.innerWidth < 900) {
      setIsActive(!isActive);
    }
  };
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center">
      <div className="flex h-screen w-screen lg:h-3/4 lg:w-3/4 ">
        {isActive && (
          <SideBar users={users} userIcon={userIcon} isActive={isActive} />
        )}
        <div className="bg-gray-900 h-full w-full lg:w-3/4  py-5 px-5 flex flex-col justify-between">
          <TopBar
            turnOffIcon={turnOffIcon}
            room={room}
            toggleUsers={toggleUsers}
            isActive={isActive}
          />
          <div className="scrollbar mt-2">
            {messages.map((message, i) => (
              <Message message={message} name={name} key={i} />
            ))}
            <div ref={bottomRef}></div>
          </div>

          <div className="flex">
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
