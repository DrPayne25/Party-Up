import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const intialValues = { email: '', password: '' };

    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues)
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
      };

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format";
        }
    
        if (!values.password) {
            errors.password = "Cannot be blank";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }
    
        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);
    
    return (
        <div>
            <h1>Got an account? Sign In!</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span>{formErrors.email}</span>}
                </div>
    
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <span>{formErrors.password}</span>}
                </div>
                <button type="submit">Sign In</button>
                <ToSignUp />
            </form>
        </div>
      );
};

const ToSignUp = () => {
    const navigate = useNavigate()
    
    function handleClick() {
        navigate('/signup')
    }

    return(
        <button type="button" onClick={handleClick}>
            Sign Up
        </button> 
    )

}
export default Form
