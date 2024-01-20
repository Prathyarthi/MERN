import React, { useCallback, useState } from 'react'

function Callback() {
    const [count, setCount] = useState(0)

    const inputFunction = useCallback(() => {
        console.log("Hi there!");
    }, [])           // Now it re-renders only when the dependency value changes


    return (
        <div>
            <CallbackDemo inputFunction={inputFunction} />
            <button onClick={() => {
                setCount(count + 1)
            }}> Counter : {count}
            </button>
        </div>
    )
}

const CallbackDemo = React.memo(function ({ inputFunction }) {
    console.log("Re-render");
    return (
        <div>
            <button>Button Clicked!</button>
        </div>
    )
})

export default Callback