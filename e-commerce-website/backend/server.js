import express  from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());

export default app

