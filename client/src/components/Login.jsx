import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from "./Home"
function Login() {
    const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState("");


    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const data = await response.json()
        console.log(data)
        if (data.user) {
            alert("Login successful")
            const token = data.user;
            setToken(token)
            // const decodedToken = jwt_decode(token);
            // console.log(decodedToken)
            // window.location.href = "/"
        }
        else {
            alert("Wrong Credentials Little Bitch")
        }
    }
    if (token) {
        return <Home token={token} />
    }
    return (
        <div className='login'>
            <h1>Login</h1>
            <form action="POST" onSubmit={loginUser}>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="email"></input><br />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="password"></input><br />
                <input type="submit"></input>
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">Signup</Link>
        </div >
    )
}

export default Login
