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



// Interfaces

interface User {
    firstName: string,
    age: number
}
function isLegal(user:User) {
    if (user.age > 18) {
        return true
    }
    else {
        return false
    }
}


isLegal({
    firstName: "Prathu",
    age: 20
})
