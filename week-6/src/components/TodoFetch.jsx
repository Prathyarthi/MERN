import React, { useEffect, useState } from 'react'
import axios from 'axios'

function TodoFetch() {

    const [ids, setIds] = useState(1)
    return (
        <>
            <TodoFetching id={ids} />
            <button onClick={() => {
                setIds(1)
            }}>1</button>
            <button onClick={() => {
                setIds(2)
            }}>2</button>
            <button onClick={() => {
                setIds(3)
            }}>3</button>
            <button onClick={() => {
                setIds(4)
            }}>4</button>
        </>
    )
}

function TodoFetching({ id }) {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then(function (res) {
                setTodo(res.data.todo)
            })
    }, [id])


    return (
        <>


            <div>
                {todo.title}
                {todo.description}
            </div>
        </>
    )
}

export default TodoFetch