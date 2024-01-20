import React, { useState } from 'react'

let counter = 4
export default function Todo() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "one",
            description: "two",
        },
        {
            id: 2,
            title: "three",
            description: "four",
        },
        {
            id: 3,
            title: "five ",
            description: "six",
        }
    ])

    function addTodo() {
        setTodos([...todos, {
            id: counter++,
            title: "seven",
            description: "eight",
        }])
    }
    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            {todos.map((todo) => <GetTodo key={todo.id} title={todo.title} description={todo.description} />)}
        </div>
    )
}



function GetTodo({ title, description }) {
    return (
        <div>
            {title}
            {description}
        </div>
    )
}


