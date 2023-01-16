import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username,
            password
        };
    
        axios.post('http://localhost:4000/users', data)
            .then(response => {
                console.log(response.data);
                // handle successful login here
            })
            .catch(error => {
                console.log(error);
                // handle error here
            });
    }
    
    
    return (
        <>
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
        </>
    );
}

export default Login;