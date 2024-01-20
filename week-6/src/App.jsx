import { useState } from 'react'
import Todo from './components/Todo'
import Wrapper from './components/Wrapper'
import TodoFetch from './components/TodoFetch'
import Memo from './components/Memo'
import Callback from './components/Callback'

function App() {

  return (
    <div>
      <Callback />
      <br />
      <Memo />
      <br />
      <TodoFetch />
      <br />
      <Wrapper />
      <Todo />
      <br />
      <HeaderWithButton />
      <Header title="Hello_world"></Header>
    </div>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Hi")

  function updateTitle() {
    setTitle("Hello")
  }
  return (
    <div>
      <button onClick={updateTitle}>Click to change the value of th first header</button>
      <Header title={title}></Header>
    </div>
  )
}

function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  )
}

export default App
