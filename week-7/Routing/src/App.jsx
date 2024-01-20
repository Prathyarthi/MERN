import { useState, lazy, Suspense } from 'react'
// Suspense API -> Asynchronous component loading
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Prop_drilling from './components/Prop_drilling'
import Context_api from './components/Context_api'
const Dashboard = lazy(() => import('./components/Dashboard'))    // Reloads page whenever it is needed (lazily load instead of loading all at once)
const Landing = lazy(() => import('./components/Landing'))

function App() {
  return (
    <div>
      <Context_api />
      <br />
      <Prop_drilling />
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback="loading..."><Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback="loading..."><Landing /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate("/")
      }}>Landing</button>
      <button onClick={() => {
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
  )

}

export default App



