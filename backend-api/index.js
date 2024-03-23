import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.listen(3000, () => {
  console.log("server is running");
});
mongoose
  .connect("process.env.MONGO_URI")
  .then(() => {
    console.log("connected t0 database");
  })
  .catch((err) => {
    console.log(err);
  });
