// interface User {
//     name: string,
//     age: number
// }

// const sumOfAge = (user1: User, user2: User) => {
//     return user1.age + user2.age
// }

// const result = sumOfAge({ name: "Prathu", age: 20 }, { name: "Amitha", age: 23 })
// console.log(result);



// Pick
// interface User {
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// // What if i want to update only age or password?

// type UpdateProps = Pick<User, 'age' | 'password'>   // Pick lets us pick properties from an object
// const updateDetails = (updateProps: UpdateProps) => {

// }

// Partial

// interface User {
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// // What if i want to optionally take the details?

// type UpdateProps = Pick<User, 'age' | 'password'>

// type UpdatePropsOptional = Partial<UpdateProps>
// const updateDetails = (updateProps: UpdatePropsOptional) => {

// }


// ReadOnly

// What if i do not want to update any field, just make it read-only

// interface User {
//     readonly name: string,
//     readonly age: number
// }

// // or

// const user: Readonly<User> = {
//     name: "Prathu",
//     age: 20
// }

// The best usecase of this would be while initializing the api-key,secrets as Readonly


// Types to objects

// interface User {
//     id: string;
//     name: string;
// }

// type Users = {
//     [key: string]: User
// };

// const users: Users = {
//     'abc123': {
//         id: 'abc123',
//         name: 'John Doe'
//     },
//     'xyz789': {
//         id: 'xyz789',
//         name: 'Jane Doe'
//     },
// };

// Cleaner syntax for the above using Record

// Records and Maps

// interface User {
//     id: string;
//     name: string;
// }

// type Users = Record<string, User>;

// const users: Users = {
//     'abc123': {
//         id: 'abc123',
//         name: 'John Doe'
//     },
//     'xyz789': {
//         id: 'xyz789',
//         name: 'Jane Doe'
//     },
// };

// console.log(users['abc123']);

// maps
// Another syntax to create key-value pairs
// const users = new Map()


// type User = {
//     id: string,
//     name: string,
//     age: number
// }
// // To specify a type for map
// const users = new Map<string, User>()

// users.set('abc123', {
//     id: 'abc123',
//     name: 'John Doe',
//     age: 20
// })

// users.set('xyz789', {
//     id: 'xyz789',
//     name: 'Jane Doe',
//     age: 21
// })


// // To get values for accessing or updation or deletion

// const user = users.get('abc123')
// console.log(user);


// Similarly to pick, we can exclude certain properties in an object using Exclude API

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // only includes 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

handleEvent('click');


// Zod schema using as type

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type userSchema = z.infer<typeof userProfileSchema>

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody: userSchema = req.body; // Assigning a type to updateBody

    if (!success) {
        res.status(411).json({});
        return
    }
    // update database here
    res.json({
        message: "User updated"
    })
});

app.listen(3000);