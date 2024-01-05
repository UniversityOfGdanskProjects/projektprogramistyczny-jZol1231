import whiteLogo from '../images/tinder_logo_white.png';
import colorLogo from '../images/color-logo-tinder.png';


export default function Nav({ minimal, authToken }) {

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={minimal ? whiteLogo: colorLogo} alt='logo'/>
            </div>
            {!authToken && <button className='nav-button'>Log in</button>}
        </nav>
    )
}