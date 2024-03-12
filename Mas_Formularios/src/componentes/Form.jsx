import React, { useState } from 'react';
import './Form.css';

const Form = ({ onCreateUser }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case "firstName":
            case "lastName":
                return value.trim().length < 2 ? `${fieldName} must be at least 2 characters long.` : "";
            case "email":
                return value.trim().length < 5 ? "Email must be at least 5 characters long." : "";
            case "password":
                return value.trim().length < 8 ? "Password must be at least 8 characters long." : "";
            case "confirmPassword":
                return value !== formData.password ? "Passwords do not match." : "";
            default:
                return "";
        }
    };

    const handleInputChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value
        });
        setErrors({
            ...errors,
            [fieldName]: validateField(fieldName, value)
        });
    };

    const createUser = (e) => {
        e.preventDefault();
        const formErrors = {};
        Object.keys(formData).forEach(fieldName => {
            formErrors[fieldName] = validateField(fieldName, formData[fieldName]);
        });
        setErrors(formErrors);

        if (Object.values(formErrors).every(error => !error)) {
            onCreateUser(formData);
        }
    };

    return (
        <form className="mt-4 mx-auto" onSubmit={createUser}>
            {Object.keys(formData).map(fieldName => (
                <div key={fieldName} className="mb-3 row align-items-center form-container">
                    <label htmlFor={fieldName} className="col-sm-2 col-form-label form-label">{fieldName === 'confirmPassword' ? 'Confirm Password' : fieldName}</label>
                    <div className="col-sm-10">
                        <input type={fieldName === 'password' || fieldName === 'confirmPassword' ? 'password' : 'text'} className="form-control form-control-sm form-input" id={fieldName} value={formData[fieldName]} onChange={(e) => handleInputChange(fieldName, e.target.value)} />
                        {errors[fieldName] && <small className="text-danger">{errors[fieldName]}</small>}
                    </div>
                </div>
            ))}
        </form>
    );
};

export default Form;
