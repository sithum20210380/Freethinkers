import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import { Button, Form, Checkbox, message } from 'antd';

import './style.scss'

const Login = () => {
    const [data, setData] = useState({ userName: "", DTPCode: "", password: ""});
    const [error, setError] = useState("");

    // function to handle submit


    return (
        <div className='login-container'>
            <Form className='login-form-container'>
                <div className='login-form'>
                    <h2>Sign In</h2>
                    <p>UserName</p>
                    <input
                        type="username"
                        placeholder="Enter Username"
                        className="login-input"
                        name="UserName"
                        onChange={(e) => setData({ ...data, userName: e.target.value })}
                        value={data.userName}
                        required
                    />
                    <p>DTP Code</p>
                    <input
                        type="dtpCode"
                        placeholder="Enter DTP Code"
                        className="login-input"
                        name="dtpCode"
                        onChnage = {(e) => setData({ ...data, DTPCode: e.target.value })}
                        value={data.DTPCode}
                        required
                    />
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="login-input"
                        name="password"
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                        value={data.password}
                        required
                    />
                    {error && <div className='error-msg'>{error}</div>}
                </div>
            </Form>
            <Button type="secondary" className='user-login-btn' >
                SignIn
            </Button>
            <div className='bottom-text'>
                <p>Already have an account?<span>Login</span></p>
            </div>
        </div>
    )
}

export default Login;
