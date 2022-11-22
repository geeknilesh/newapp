// const express = require("express");
// const http = require("http");
// const app = express();
// const server = http.createServer(app);
// const io = require("socket.io")(server);

// io.on("connection", (socket) => {
//   console.log("A user connected with id: " + socket.id);

//   socket.on("hello", (data) => {
//     console.log(data);
//     socket.broadcast.emit("hello", `hola ${data}`);
//   });

//   socket.on("disconnect", () => {
//     console.log("User disconnected :" + socket.id);
//   });
// });

// app.use(express.static("public"));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index.ejs");
// });

// server.listen(80, () => {
//   console.log("server listening on 3001");
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(80, () => {
  console.log("server is running on port 80");
});
