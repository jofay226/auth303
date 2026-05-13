import z from 'zod';
import { auth } from "../services/auth.services.ts";
import type {Request, Response} from "express";



export const register = async (req: Request, res: Response) => {
    
    const { email, password, name } = req.body;
    try {
        const data = await auth.register({ email, password, name });
        res.status(data.statusCode).json(data);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}