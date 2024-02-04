import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstname: string) {
    await prisma.user.create({
        data: {
            email,
            firstname,
            password
        }
    })
}