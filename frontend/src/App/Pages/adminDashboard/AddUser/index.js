import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import { Button, Checkbox, Modal } from 'antd';

import './style.scss'

const AddUser = ({isModalOpen, closeModal}) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");


    // function to handle submit
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     axios.post('http://localhost:3001/register', { firstName, lastName, email, password })
    //         .then(result => {
    //             console.log(result);
    //             if (result.data === "Already registered") {
    //                 alert("E-mail already registered! Please Login to proceed.");
    //                 navigate('/login');
    //             }
    //             else {
    //                 alert("Registered successfully! Please Login to proceed.")
    //                 navigate('/login');
    //             }

    //         })
    //         .catch(err => console.log(err));
    // }


    return (
        <div className='signup-container'>
        <Modal
            title="Add User"
            className='add-user-modal'
            visible={isModalOpen}
            onCancel={() => {
                closeModal();
            }}
        >
           <div className='signup-form-container'>
                <div className='signup-right-container'>
                    <form className='signup-form-container' >
                        <div className='signup-form'>
                            <div className='name-container'>
                                <span>
                                    <p>First Name</p>
                                </span>
                                <span>
                                    <p>Last Name</p>
                                </span>
                            </div>
                            <div className='name-input-container'>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    className="signup-input-first-name"
                                    id="exampleInputFirstname"
                                    onChange={(event) => setFirstName(event.target.value)}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className="signup-input-last-name"
                                    id="exampleInputLastname"
                                    onChange={(event) => setLastName(event.target.value)}
                                    required
                                />
                            </div>
                            <div className='name-container'>
                                <span>
                                    <p>User Name</p>
                                </span>
                                <span>
                                    <p>Mobile Number</p>
                                </span>
                            </div>
                            <div className='name-input-container'>
                                <input
                                    type="text"
                                    placeholder="Enter User Name"
                                    className="signup-input-first-name"
                                    id="exampleInputFirstname"
                                    onChange={(event) => setFirstName(event.target.value)}
                                    required
                                />

                                <input
                                    type="text"
                                    placeholder="Enter Mobile Number"
                                    className="signup-input-last-name"
                                    id="exampleInputLastname"
                                    onChange={(event) => setLastName(event.target.value)}
                                    required
                                />
                            </div>
                            <p>Email</p>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="signup-input"
                                id="exampleInputEmail1"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                           <div className='name-container'>
                                <span>
                                    <p>Password</p>
                                </span>
                                <span>
                                    <p>Confirm you password</p>
                                </span>
                            </div>
                            <div className='name-input-container'>
                               <input
                                type="password"
                                placeholder="Enter Password"
                                className="signup-input-first-name"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                             <input
                                type="password"
                                placeholder="Enter Password"
                                className="signup-input-first-name"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            /> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    </div>
    )
}

export default AddUser;
