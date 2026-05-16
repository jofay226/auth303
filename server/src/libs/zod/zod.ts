import z from "zod";

export const registerSchemaZod = z.object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(4)
})

export const loginSchemaZod = z.object({
    email: z.email(),
    password: z.string().min(4)
})