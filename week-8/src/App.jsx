import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <RevenueCard title={"Next Payout"} amount={"2,312.23"}/>
  )
}

export default App
