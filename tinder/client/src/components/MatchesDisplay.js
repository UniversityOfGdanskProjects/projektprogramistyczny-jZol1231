import axios from 'axios';
import { useState, useEffect } from 'react';

export default function MatchesDisplay({ matches, setClickedUser }) {

    const [matchedProfiles, setMatchedProfiles] = useState(null);

    const matchedUserIds = matches.map(({ user_id }) => user_id);

    const getMatches = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users', {
                params: { userIds: JSON.stringify(matchedUserIds) }
            });
            setMatchedProfiles(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMatches();
    }, []);

    return (
        <div className='matches-display'>
            {matchedProfiles?.map((match) => {
                return <div key={ match.user_id } className='match-card' onClick={() => setClickedUser(match)}>
                    <div className='img-container'>
                        <img src={match?.url} alt={match?.first_name + 'profile'}/>
                    </div>
                    <h3>{match?.first_name}</h3>
                </div>
            })}
        </div>
    )
}