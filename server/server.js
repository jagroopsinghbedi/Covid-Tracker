// // const express = require("express");
// // const cors = require("cors");
// // const mongoose = require("mongoose");
// // // const authRoutes = require("./routes/auth");
// // // const messageRoutes = require("./routes/messages");
// // const app = express();
// // const socket = require("socket.io");
// // // require("dotenv").config();

// // app.use(cors());
// // app.use(express.json());
// // const port = 5000;
// // const hostname = 'localhost'
// // mongoose
// //   .connect(process.env.MONGO_URL, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => {
// //     console.log("DB Connetion Successfull");
// //   })
// //   .catch((err) => {
// //     console.log(err.message);
// //   });

// // app.use("/api/auth", authRoutes);
// // app.use("/api/messages", messageRoutes);

// // const server = app.listen(process.env.PORT, () =>
// //   console.log(`Server started on ${process.env.PORT}`)
// // );
// // const io = socket(server, {
// //   cors: {
// //     origin: "http://localhost:3000",
// //     credentials: true,
// //   },
// // });

// // global.onlineUsers = new Map();
// // io.on("connection", (socket) => {
// //   global.chatSocket = socket;
// //   socket.on("add-user", (userId) => {
// //     onlineUsers.set(userId, socket.id);
// //   });

// //   socket.on("send-msg", (data) => {
// //     const sendUserSocket = onlineUsers.get(data.to);
// //     if (sendUserSocket) {
// //       socket.to(sendUserSocket).emit("msg-recieve", data.msg);
// //     }
// //   });
// // });

// //const atlasDbUrl = 'mongodb+srv://Booking_App:ALRdYPS9tJYzlhAw@cluster0.2wi3h86.mongodb.net/Booking?retryWrites=true&w=majority'

// //1WawhxTsoZO4LxDe
// //netflix_clone-mern

// const express = require("express");
// const cors = require("cors");
// const userRoutes = require("./routes/UserRoutes");
// const mongoose = require("mongoose");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // mongoose
// //   .connect("mongodb://localhost:27017/netflix", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => {
// //     console.log("DB Connetion Successfull");
// //   })
// //   .catch((err) => {
// //     console.log(err.message);
// //   });

// app.use("/api/user", userRoutes);

// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });




const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());


const port = 5000;
const hostname = 'localhost'
const atlasDbUrl = 'mongodb+srv://netflix_clone-mern:1WawhxTsoZO4LxDe@cluster0.fa3no2s.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(atlasDbUrl, {
  useNewUrlParser: true, useUnifiedTopology: true

})

  .then(res => {
    app.listen(port, hostname, () => {
      console.log(`Server is running at ${hostname}:5000`)
      console.log("connected to mongoDB.")
    });
  })
  .catch(err => console.log(err));

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected!!")
})
mongoose.connection.on("connected", () => {
  console.log("mongodb connected!!")
})


// mongoose
//   .connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

app.use("/api/user", userRoutes);

// app.listen(5000, () => {
//   console.log("server started on port 5000");
// });