import Nav from '../components/Nav';

export default function Home() {

    const authenticated = true;
    const minimal = true;

    const handleClick = () => {
        console.log('Clicked!');
    };

    return (
    <div className="overlay">
        <Nav minimal={minimal} authToken={authenticated}/>
        <div>
            <h1>Swipe right</h1>
            <button className='primary-button' onClick={handleClick}>
                {authenticated ? 'Signout' : 'Create an account'}
            </button>
        </div>
    </div>
    )
}