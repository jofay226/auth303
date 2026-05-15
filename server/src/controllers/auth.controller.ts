import { registerSchemaZod } from "../libs/zod/zod.ts";
import { auth } from "../services/auth.services.ts";
import type {Request, Response} from "express";



export const register = async (req: Request, res: Response) => {
    const validationResult = registerSchemaZod.safeParse(req.body)
    if(!validationResult.success){
        res.status(400).json({ error: "invalid credentials" });
        return
    }
    try {
        const data = await auth.register(validationResult.data!);
        res.status(data.statusCode).json(data);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}