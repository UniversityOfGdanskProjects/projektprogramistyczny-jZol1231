import TinderCard from 'react-tinder-card';
import {useEffect, useState} from 'react';
import ChatContainer from '../components/ChatContainer';
import {useCookies} from 'react-cookie';
import axios from 'axios';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [genderedUsers, setGenderedUsers] = useState(null);
    const [lastDirection, setLastDirection] = useState();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const userId = cookies.UserId;


    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:8000/user', {
                params: {userId}
            })
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getGenderedUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/gendered-users', {
                params: { gender: user?.gender_interest }
            })
            setGenderedUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUser();
        getGenderedUsers();
    }, [user, genderedUsers])


    const updateMatches = async (matchedUserId) => {
        try {
            await axios.put('http://localhost:8000/addmatch', {
                userId,
                matchedUserId
            })
            getUser()
        } catch (error) {
            console.log(error);
        }
    }

    const matchedUserIds = user?.matches.map(({ user_id }) => user_id).concat(userId); // without our userId

    const filteredGenderedUsers = genderedUsers?.filter(
        genderedUser => !matchedUserIds.includes(genderedUser.user_id)
    )


    const swiped = (direction, swipedUserId) => {

        if (direction === 'right') {
            updateMatches(swipedUserId);
        }

        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    }


    const characters = [
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

    console.log(genderedUsers);


    return (
        <>
            {user &&
            <div className="dashboard">
                <ChatContainer user={user}/>
                <div className='swipe-container'>

                    <div className='card-container'>
                        {genderedUsers.map((genderedUser) =>
                            <TinderCard 
                                className='swipe' 
                                key={genderedUser.user_id} 
                                onSwipe={(dir) => swiped(dir, genderedUser.user_id)} 
                                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}>
                            <div 
                                style={{ backgroundImage: 'url(' + genderedUser.url + ')' }} 
                                className='card'>
                                    <h3>{genderedUser.first_name}</h3>
                            </div>

                            </TinderCard>
                        )}

                        <div className='swipe-info'>
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                        </div>

                    </div>
                </div>
            </div>}
        </>
    )
}
