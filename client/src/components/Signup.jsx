import React from 'react'
import { useState } from 'react';
function Signup() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const registerUser = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:8000/api/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <div>
            <h1>Register</h1>
            <form action="POST" onSubmit={registerUser}>
                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="name"></input><br />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="email"></input><br />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password"></input><br />
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default Signup
