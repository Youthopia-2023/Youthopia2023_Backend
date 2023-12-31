const express = require("express");
const mongoose = require("mongoose");
const app = express();
const headRouter = require("./routes/headRoute");
const authRouter = require("./routes/authRoute");
const userRouter=require("./routes/userRoute");
const sponsorRouter=require("./routes/sponsorRoute");
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const eventRouter = require("./routes/eventRoutes");

const connectDb = function () {
  return mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
};

connectDb();

app.use(express.json());
app.use(cors("http://localhost:3000"));
app.use("/a", headRouter);
app.use("/event", eventRouter);
app.use("/auth", authRouter);
app.use("/sponsor",sponsorRouter);
app.use("/user",userRouter);

app.listen(PORT, () => {
  console.log(`server running on port no ${PORT}!!!!!!`);
});

