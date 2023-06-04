require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.ykjjhjg.mongodb.net/ecomernyt?retryWrites=true&w=majority`;

mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
