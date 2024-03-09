// Form.jsx
import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        props.onCreateUser(newUser);
    };

    const updateUser = (field, value) => {
        const updatedUser = { ...props.user, [field]: value };
        props.onUpdateUser(updatedUser);
    };

    return (
        <form className="mt-4 mx-auto" onSubmit={createUser}>
            <div className="mb-3 row align-items-center form-container">
                <label htmlFor="firstName" className="col-sm-2 col-form-label form-label">First Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm form-input" id="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value); updateUser("firstName", e.target.value); }} />
                </div>
            </div>
            <div className="mb-3 row align-items-center form-container">
                <label htmlFor="lastName" className="col-sm-2 col-form-label form-label">Last Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control form-control-sm form-input" id="lastName" value={lastName} onChange={(e) => { setLastName(e.target.value); updateUser("lastName", e.target.value); }} />
                </div>
            </div>
            <div className="mb-3 row align-items-center form-container">
                <label htmlFor="email" className="col-sm-2 col-form-label form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm form-input" id="email" value={email} onChange={(e) => { setEmail(e.target.value); updateUser("email", e.target.value); }} />
                </div>
            </div>
            <div className="mb-3 row align-items-center form-container">
                <label htmlFor="password" className="col-sm-2 col-form-label form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control form-control-sm form-input" id="password" value={password} onChange={(e) => { setPassword(e.target.value); updateUser("password", e.target.value); }} />
                </div>
            </div>
            <div className="mb-3 row align-items-center form-container">
                <label htmlFor="confirmPassword" className="col-sm-2 col-form-label form-label">Confirm Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control form-control-sm form-input" id="confirmPassword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); updateUser("confirmPassword", e.target.value); }} />
                </div>
            </div>
        </form>
    );
};

export default Form;
