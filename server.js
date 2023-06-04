const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
require("./connections");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "*",
  method: "*",
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.listen(8080, () => {
  console.log("server runing at port", 8080);
});
