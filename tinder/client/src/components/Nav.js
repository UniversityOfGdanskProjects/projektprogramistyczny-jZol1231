import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';


export default function Nav({ minimal, authToken, setShowModal, showModal, setSignUp }) {

    const handleClick = () => {
        setShowModal(true);
        setSignUp(false);
    }

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={minimal ? colorLogo: whiteLogo} alt='logo'/>
            </div>
            {!authToken && !minimal && <button className='nav-button' onClick={handleClick} disabled={showModal}>Log in</button>}
        </nav>
    )
}