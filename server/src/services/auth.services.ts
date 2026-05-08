import prisma from "../libs/prisma/prisma.ts"
import bcrypt from "bcryptjs"

export const auth = {
    register: async (userData: {email: string, password: string, name: string}) => { 
    
        
        const user = await prisma.user.findUnique({
            where: {email: userData.email}
        })

        if(user){
            return {message: "user with this email already registered", statusCode: 409, data: null}
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10)

        const newUser = await prisma.user.create({
            data: {
                email: userData.email,
                password: hashedPassword,
                name: userData.name
            }
        })

        return {message: "successfully registered", statusCode: 201, data: newUser}


    }
}