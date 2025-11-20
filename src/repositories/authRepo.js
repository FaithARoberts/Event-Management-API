import prisma from "../config/db.js";

//get users by email
export async function logInfindUserByEmail(email) {
    return await prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,
            passwordHash: true,
        },
    });
}

//create a user
export async function addNewUser(data) {  
    return await prisma.user.create({
        data,
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            role: true,

        },
    });
}