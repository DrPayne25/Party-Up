import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const SignUp = () => {
    const intialValues = { email: '', realname: '', password: '', confirm: '', birthday: '' };

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
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!emailregex.test(values.email)) {
            errors.email = "Invalid email format";
        }
        
        if (!values.realname) {
            errors.realname = "Cannot be blank";
        }

        if (!values.password) {
            errors.password = "Cannot be blank";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }

        if (!values.confirm) {
            errors.confirm = "Cannot be blank";
        } else if (values.confirm !== values.password) {
            errors.confirm = "Does not match!"
        }

        if (!values.birthday) {
            errors.birthday = "Cannot be blank";
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
            {/* <h1>Got an account? Sign In!</h1> */}
            <Form onSubmit={handleSubmit} noValidate>
                <div>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <span>{formErrors.email}</span>}
                </div>
                <div>
                    <Form.Label htmlFor="realname">Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="realname"
                        id="realname"
                        value={formValues.realname}
                        onChange={handleChange}
                    />
                    {formErrors.realname && <span>{formErrors.realname}</span>}
                </div>
                <div>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <span>{formErrors.password}</span>}
                </div>
                <div>
                    <Form.Label htmlFor="confirm">Confirm your password</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirm"
                        id="confirm"
                        value={formValues.confirm}
                        onChange={handleChange}
                    />
                    {formErrors.confirm && <span>{formErrors.confirm}</span>}
                </div>
                <div>
                    <Form.Label htmlFor="birthday">What is your birthday?</Form.Label>
                    <Form.Control
                        type="date"
                        name="birthday"
                        id="birthday"
                        value={formValues.birthday}
                        onChange={handleChange}
                    />
                    {formErrors.birthday && <span>{formErrors.birthday}</span>}
                </div>
                <button type="submit">Sign Up!</button>
            </Form>
        </div>
    );
}

export default SignUp
