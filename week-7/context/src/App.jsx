import { useState } from "react"
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";


function App() {
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      {/* // Use recoil for global states */}
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)     // By doing this(increasing count as a function), we can stop re-rendering of button
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector)
  return (
    <div>
      {isEven ? "Even" : null}
    </div>
  )
}

export default App
