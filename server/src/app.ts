import express from "express";
import authRoutes from "./routes/auth.routes.ts";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(bodyParser.json());


app.use(cookieParser())


app.use("/auth", authRoutes);


export default app;
