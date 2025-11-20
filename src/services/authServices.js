import * as authRepository from '../repositories/authRepo.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Prisma from "../generated/prisma/client.js";


const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;


export async function createNewUser(newUserData) {
    const email = newUserData.email;
    const password = newUserData.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    try{
        const newUser = await authRepository.addNewUser({ 
            firstName: newUserData.firstName,
            lastName: newUserData.lastName,
            email: email,
            passwordHash: hashedPassword,
            role: newUserData.role, }); //if a user is added with role USER their role can only be changed by a PLANNER
            return newUser;

    }catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if(error.code === 'P2002') {
                const error = new Error('already been used');
                error.status = 409;
                throw error;
            }
            throw error;
        }
    }

}


export async function logInUser(userInfo){
    const user = await authRepository.logInfindUserByEmail(userInfo.email);
    

    if(!user) {
        const error = new Error('invalid credentials');
        error.status = 401;
        throw error;
    }

    const isMatch = await bcrypt.compare (userInfo.password, user.passwordHash);
    if (!isMatch ) {
        const error = new Error('invalid credentials');
        error.status = 401;
        throw error;
    }

    const accessToken = jwt.sign({id: user.id, role: user.role, email: user.email,},JWT_SECRET, {expiresIn: JWT_EXPIRES_IN,

    } );
    return accessToken;
}
