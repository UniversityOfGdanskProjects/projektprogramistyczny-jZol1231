import { useFormik } from 'formik';

export default function AuthModal({ setShowModal, isSignUp }) {

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required!';
        } else if (!values.password) {
            errors.password = 'Required!';
        } else if (!values.passwordConfirm) {
            errors.passwordConfirm = 'Required!';
        } else if (values.password !== values.passwordConfirm) {
            errors.passwordConfirm = 'Different password!';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validate,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (e) => {
            e.preventDefault();
            
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