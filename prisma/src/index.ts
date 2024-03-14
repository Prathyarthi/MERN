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


async function createTodo(userId: number, title: string, description: string) {
    await prisma.todo.create({
        data: {
            userId,
            title,
            description,
        }
    })
}

createTodo(1, "go to gym", "go to gym and do 10 pushups");

async function getTodos(userId: number,) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
    });
    console.log(todos);
}

getTodos(1);

async function getTodosAndUserDetails(userId: number,) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);