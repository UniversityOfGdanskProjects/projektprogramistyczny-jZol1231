

export default function AuthModal({ setShowModal }) {


    const handleClick = () => {
        setShowModal(false);
    }

    const isSignUp = true;

    return (
        <div className='auth-modal'>
            <div onClick={handleClick} className='close-icon'>X</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy.</p>
            <form>
                
            </form>
        </div>
    )
}