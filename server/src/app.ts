import express from "express";
import authRoutes from "./routes/auth.routes.ts";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(cookieParser())


app.use("/auth", authRoutes);


export default app;
