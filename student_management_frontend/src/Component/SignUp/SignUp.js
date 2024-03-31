import React, { useState } from "react";
import axios from 'axios';
import '../../style/style.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const SignUp = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        city: '',
        department: ''
    });
    const navigate = useNavigate(); // Initialize the navigate function

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://localhost:7249/api/Login/register', formData);
            console.log(response.data); 
            navigate('/'); // Redirect to the login page
        } catch (error) {
            console.error('Error:', error.response.data); // Handle error response
        }
    };


    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-input" type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input className="form-input" type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input className="form-input" type="password" name="password" placeholder="Enter password" onChange={handleChange} />
                <input className="form-input" type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input className="form-input" type="text" name="city" placeholder="City" onChange={handleChange} />
                <input className="form-input" type="text" name="department" placeholder="Department" onChange={handleChange} />
                <button className="submit-button" type="submit">Submit</button>

            </form>
        </div>
    )
}

export default SignUp;
