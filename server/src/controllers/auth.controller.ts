
import { loginSchemaZod, registerSchemaZod } from "../libs/zod/zod.ts";
import { auth } from "../services/auth.services.ts";
import type {Request, Response} from "express";
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.ts";



export const register = async (req: Request, res: Response) => {
    console.log(req.body);
    
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


export const login = async (req: Request, res: Response) => {
    const validationResult = loginSchemaZod.safeParse(req.body)
    
    if(!validationResult.success){
      return  res.status(400).json({ error: "invalid credentials" })  
    }

    const result = await auth.login(validationResult.data!)

    if(result.statusCode === 409) {
        return  res.status(result.statusCode).json(result)
    }


    res.cookie("refreshToken", generateRefreshToken(result.data?.id!), {
        httpOnly: true,
        secure: false,
        sameSite: "strict"
    })
    
    res.status(200).json(generateAccessToken(result.data?.id!))
}



export const verifyMe = async (req: Request, res: Response) => {
    return res.json({message: "access granted"}) 
}




