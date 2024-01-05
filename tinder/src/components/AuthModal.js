import { useFormik } from 'formik';

export default function AuthModal({ setShowModal }) {

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
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleClick = () => {
        setShowModal(false);
    }

    const isSignUp = true;

    return (
        <div className='auth-modal'>
            <div onClick={handleClick} className='close-icon'>X</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy.</p>
            <form onSubmit={formik.handleSubmit}>
                <label name='email'>Email</label><br />
                <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                /><br />
                {formik.errors.email && <div>{formik.errors.email}</div>}
                <label name='password'>Password</label><br />
                <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                /><br />
                {formik.errors.password && <div>{formik.errors.password}</div>}
                <label name='passwordConfirm'>Confirm your password</label><br />
                <input 
                    type='password'
                    name='passwordConfirm'
                    id='passwordConfirm'
                    placeholder='Confirm your password'
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                /><br />
                {formik.errors.passwordConfirm && <div>{formik.errors.passwordConfirm}</div>}
                <button type='submit' className='secondary-button'>Submit</button>
            </form>
            <hr />
            <h2>WELCOME TO TINDER</h2>
        </div>
    )
}