const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const cors = require("cors");
const { Server } = require("socket.io");
const router = require("./router");
const server = http.createServer(app);
const PORT = process.emit.PORT || 5000;

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const user = addUser({ id: socket.id, name, room });

    socket.join(user.room);

    socket.emit("message", {
      user: "Admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "Admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

app.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
