const app = require("../server");
const http = require("http");
const socketIO = require("socket.io");
const {
  updateAndInsertSocketRecord,
  findSocketRecord,
} = require("../Services/socket.service");

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

io.on("connection", (socket) => {
  console.log("New user connected:", socket.id);

  socket.on("registerUser", async ({ userId }) => {
    await updateAndInsertSocketRecord(
      { userId: userId },
      {
        socketId: socket.id,
        userId: userId,
      }
    );
  });

  socket.on("sendMessage", async ({ senderId, receiverId, message }) => {
    const findReceiverSocket = await findSocketRecord({
      userId: receiverId,
    });

    if (findReceiverSocket) {
      io.to(findReceiverSocket.socketId).emit("receiveMessage", {
        senderId,
        receiverId,
        message,
      });
    } else {
      console.log("User is not found");
    }
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
