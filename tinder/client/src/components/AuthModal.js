import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

export default function AuthModal({ setShowModal, isSignUp }) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required!';
        } else if (!values.password) {
            errors.password = 'Required!';
        }
        if (isSignUp) {
            if (!values.passwordConfirm) {
                errors.passwordConfirm = 'Required!';
            } else if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = 'Different password!';
            }
        }
        return errors;
    }

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validate,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values, actions) => {

            const { email, password } = values;
            // console.log(email + password);

            try {
                const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, { email, password });

                // setCookie('Email', response.data.email);
                setCookie('UserId', response.data.userId);
                setCookie('AuthToken', response.data.token);

                const success = response.status === 201;

                if (success && isSignUp) {
                    navigate('/onboarding');
                } else if (success && !isSignUp) {
                    navigate('/dashboard');
                }

                window.location.reload()

            } catch (error) {
                console.log(error);
            }
        }
    });

    const handleClick = () => {
        setShowModal(false);
    }

    return (
        <div className='auth-modal'>
            <div onClick={handleClick} className='close-icon'>&#10540;</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy.</p>
            <form onSubmit={formik.handleSubmit}>
                <label name='email'>Email</label>
                {/* {formik.errors.email && <div className='error'>{formik.errors.email}</div>} */}
                <input style={formik.errors.email ? { border: '2px solid red'} : null}
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                <br />
                <label name='password'>Password</label>
                {/* {formik.errors.password && <div className='error'>{formik.errors.password}</div>} */}
                <input style={formik.errors.password || formik.errors.passwordConfirm ? { border: '2px solid red'} : null}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                /><br />
                {isSignUp && <>
                    <label name='passwordConfirm'>Confirm your password</label>
                    {/* {formik.errors.passwordConfirm && <div className='error'>{formik.errors.passwordConfirm}</div>}                     */}
                    <input style={formik.errors.passwordConfirm ? { border: '2px solid red'} : null}
                        type='password'
                        name='passwordConfirm'
                        id='passwordConfirm'
                        placeholder='Confirm your password'
                        value={formik.values.passwordConfirm}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </>}
                <br />
                <button type='submit' className='secondary-button'>Submit</button>
            </form>
            <hr />
            <h2>WELCOME TO TINDER</h2>
        </div>
    )
}