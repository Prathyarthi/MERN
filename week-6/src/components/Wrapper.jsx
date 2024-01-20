import React from 'react'

function Wrapper() {
    return (
        <>
            {/* <CardWrapper innerComponent={<TextComponent />} /> */}
            <CardWrapper>
                Hi There
            </CardWrapper>
            <CardWrapper>
                <TextComponent />
            </CardWrapper>
        </>
    )
}

function TextComponent() {
    return (
        <div>Hello World</div>
    )
}

function CardWrapper({ children }) {
    return (
        <div style={{ border: "2px solid black" }}>
            {/* {innerComponent} */}
            {children}
        </div >
    )
}

export default Wrapper