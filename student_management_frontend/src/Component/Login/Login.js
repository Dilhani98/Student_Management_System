import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import '../../style/style.css'; // Import the CSS file for styling
import StudentList from '../DashBoard/Student_List/StudentList';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7249/api/Login/login', {
                username,
                password
            });
            console.log(response.status)
            if (response.status === 200) {
                // Update the loggedIn state variable to true upon successful login
                setLoggedIn(true);
            } else {
                setError('Invalid username or password');
            }

        } catch (error) {
            // Handle login error
            console.error('Login error:', error.response.data.message);
            setError(error.response.data.message);
        }
    };

    if (loggedIn) {
        return <StudentList />;
    }

    return <div className="container">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={e => {
            e.preventDefault();
            handleLogin();
        }}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <p>Don't have an account? <Link to="SignUp">Sign Up</Link></p>

            <button type="submit">Login</button>
        </form>


    </div>;
};

export default Login;
