import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
      setSocket(socket);
    }
    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setMessage(message.data);
    }
    return () => newSocket.close();
  }, [])

  if (!socket) {
    return <div>Loading...</div>
  }

  return (
    <>
      {message}
    </>
  )
}

export default App