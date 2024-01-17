import express from "express";
import dotenv from "dotenv"; //environment variables
import mongoose from "mongoose";
import morgan from "morgan"; //log request endpoints
import cors from "cors";

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
