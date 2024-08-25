import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import backTask from "./routes/taskRoutes";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/task', backTask)

mongoose.connect("mongodb://localhost:27017/taskdb")
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error));

export {app, port}