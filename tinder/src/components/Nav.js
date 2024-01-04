import logo from '../images/tinderLogo.png';


export default function Nav() {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"/>
            </div>
        </nav>
    )
}