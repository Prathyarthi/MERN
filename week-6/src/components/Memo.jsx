import React, { useMemo, useState } from 'react'

function Memo() {
    return (
        <Result />
    )
}

function Result() {
    const [count, setCount] = useState(0)
    const [inputText, setInputText] = useState(0)

    let counter = useMemo(() => {
        console.log("Memo got called");
        let sum = 0;
        for (let i = 1; i <= inputText; i++) {
            sum += i
        }
        return sum
    }, [inputText])
    return (
        <>
            <input onChange={function (e) {
                setInputText(e.target.value)
            }} type="text" />

            <h2>Sum of numbers from 1 to {inputText} = {counter} </h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>Counter : ({count})</button>
        </>
    )
}

export default Memo