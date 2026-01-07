import express from "express";
import http from "http";
import { Server } from "socket.io"

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    console.log("User connected, id: ", socket.id);

    socket.on("disconnect", (message) => {
        console.log("User disconnected: ", message);
    });
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
