import express from "express";
import authRoutes from "./routes/auth.routes.ts";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());


app.use("/auth", authRoutes);


export default app;
