import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';
import { useState } from 'react';
import { useCookies } from 'react-cookie';


export default function Home() {

    const [showModal, setShowModal ] = useState(false);
    const [signUp, setSignUp] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const authenticated = cookies.authToken;
    const minimal = false;

    const handleClick = () => {
        if (authenticated) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        console.log('Clicked!');
        setShowModal(true);
        setSignUp(true);
    };

    return (
    <div className='overlay'>
        <Nav minimal={minimal} 
            authToken={authenticated} 
            setShowModal={setShowModal} 
            showModal={showModal} 
            setSignUp={setSignUp}
        />
        <div className='home'>
            <h1 className='primary-title'>Swipe right</h1>
            <button className='primary-button' 
                    onClick={handleClick}>
                {authenticated ? 'Signout' : 'Create an account'}
            </button>

            {showModal && <AuthModal setShowModal={setShowModal} isSignUp={signUp}/>}
        </div>
    </div>
    )
}