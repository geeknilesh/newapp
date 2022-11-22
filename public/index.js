const enterBtn = document.getElementById("enter");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");

function enterChat() {
  const socket = io();

  socket.on("connect", () => {
    console.log("client connected");
    console.log(socket.id);
  });

  chatBox.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = e.target.childNodes[1].value;
    console.log(value);
    socket.emit("hello", value);
  });

  socket.on("hello", (data) => {
    console.log(data);
  });
}

enterBtn.addEventListener("click", () => {
  enterChat();
  chatInput.hidden = false;
  enterBtn.hidden = true;
});
