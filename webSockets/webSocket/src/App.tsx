import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () => {
      console.log('Connection established');
      socket.send('Hello Server!');
      setSocket(socket);
    }
    socket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setMessage(message.data);
    }
    return () => socket.close();
  }, [])

  if (!socket) {
    return <div>Loading...</div>
  }

  return (
    <>
      <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={() => {
        socket.send(newMessage);
        setNewMessage('');
      }}>Send</button>
      {message}
    </>
  )
}

export default App