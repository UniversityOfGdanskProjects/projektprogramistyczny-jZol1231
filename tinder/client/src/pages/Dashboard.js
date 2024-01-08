import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from '../components/ChatContainer';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function Dashboard() {

    const [user, setUser] = useState(null);
    const [ cookies, setCookie, removeCookie ] = useCookies([ 'user' ]);

    const userId = cookies.UserId;

    const getUser = async () => {
        try {
            const response = axios.get('http://localhost:3000/user', {
                params: { userId }
            });
            setUser(response.data);

        } catch (error) {
            console.log(error);
        }
    }   

    useEffect(() => {
        getUser();
    }, [user]);

    const db = [
        {
            name: 'Richard Hendricks',
            url: 'https://imgur.com/oPj4A8u.jpeg'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://imgur.com/oPj4A8u.jpeg'
        },
        {
            name: 'Monica Hall',
            url: 'https://imgur.com/oPj4A8u.jpeg'
        },
        {
            name: 'Jared Dunn',
            url: 'https://imgur.com/oPj4A8u.jpeg'
        },
        {
            name: 'Dinesh Chugtai',
            url: 'https://imgur.com/oPj4A8u.jpeg'
        }
    ]

    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className='dashboard'>
            <ChatContainer />

            <div className='swipe-container'>

                <div className='card-container'>

                    {characters.map((character) =>
                        <TinderCard 
                            className='swipe' 
                            key={character.name} 
                            onSwipe={(dir) => swiped(dir, character.name)} 
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div 
                            style={{ backgroundImage: 'url(' + character.url + ')' }} 
                            className='card'>
                                <h3>{character.name}</h3>
                        </div>

                        </TinderCard>
                    )}

                    <div className='swipe-info'>
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>

                </div>
            </div>
        </div>
    )
}