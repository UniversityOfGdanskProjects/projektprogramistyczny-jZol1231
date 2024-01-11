import { useCookies } from 'react-cookie';

export default function ChatHeader({ user }) {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);


    const logout = () => {
        removeCookie('userId', cookies.UserId);
        removeCookie('AuthToken', cookies.AuthToken);
        window.location.reload();
    }

    console.log(user);

    return (
        <div className='chat-container-header'>
            <div className='profile'>
                <div className='img-container'>
                    <img src={ user.url } alt={`${user.first_name} photo`}/>
                </div>
                <h3>{ user.first_name }</h3>
            </div>
            <i className='log-out-icon' onClick={logout}>&#8617;</i>
        </div>
    )
}