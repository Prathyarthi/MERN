// const x: number = 1;
// console.log(x);

// function greet(firstName: string) {
//     console.log(`Hello ${firstName}`);
// }

// greet("Prathu")


// Type Inference
// function sum(a: number, b: number): number {
//     return a + b;
// }

// const value = sum(1, 2)
// console.log(value);


// function isLegal(age: number) {
//     if (age > 18) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(isLegal(18));


// function run(fn: () => void) {
//     setTimeout(fn, 1000)
// }

// run(function () {
//     console.log("Hello World");
// })



// Interfaces : To give types for objects
// interface User {
//     firstName: string,
//     age: number
// }
// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// const user = {
//     firstName: "Prathu",
//     age: 20
// }

// isLegal(user)


// Type : type is similar to interface which also is used to aggregate data
// type User = {
//     firstName: string,
//     age: number
// }
// function isLegal(user: User) {
//     if (user.age > 18) {
//         return true
//     }
//     else {
//         return false
//     }
// }


// const user = {
//     firstName: "Prathu",
//     age: 20
// }

// isLegal(user)


// But the difference between type and interface is :
// type cannot be used in class whereas interface can
// But types let you do a few other things :
// 1. Unions
// 2. Intersection

// Union

type greetArgs = string | number    // Union of two types
function greet(firstName: greetArgs) {
    console.log(`Hello ${firstName}`);
}

greet("Prathu")
greet(1)