import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';
import { useState } from 'react';


export default function Home() {

    const [showModal, setShowModal ] = useState(false);

    const authenticated = false;
    const minimal = false;

    const handleClick = () => {
        console.log('Clicked!');
        setShowModal(true);
    };

    return (
    <div className='overlay'>
        <Nav minimal={minimal} authToken={authenticated} setShowModal={setShowModal} showModal={showModal}/>
        <div className='home'>
            <h1>Swipe right</h1>
            <button className='primary-button' onClick={handleClick}>
                {authenticated ? 'Signout' : 'Create an account'}
            </button>

            {showModal && <AuthModal setShowModal={setShowModal}/>}
        </div>
    </div>
    )
}