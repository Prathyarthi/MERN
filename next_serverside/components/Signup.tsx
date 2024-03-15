"use client"

import { useState } from "react";
import axios from "axios";

export function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="h-screen flex justify-center items-center bg-black">
            <div className="flex flex-col m-2 p-5 rounded gap-3 justify-center items-center border">
                <h1 className="text-white text-3xl">Signup</h1>
                <input onChange={(e) => {
                    setUsername(e.target.value)
                }} className="rounded p-3" type="text" placeholder="Name" />
                <input onChange={(e) => setEmail(e.target.value)} className="rounded p-3" type="email" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} className="rounded p-3" type="password" placeholder="Password" />
                <button className="w-full p-3 text-2xl bg-slate-10 text-white rounded-lg border border-slate-300" onClick={() => {
                    axios.post("http://localhost:3000/api/user", {
                        username,
                        email,
                        password
                    })
                }}>Signup!</button>
            </div>
        </div>
    )
}