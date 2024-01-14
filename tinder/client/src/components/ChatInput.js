import { useState } from 'react';
import axios from 'axios';

export default function ChatInput({ user, clickedUser, getUsersMessages, getClickedUsersMessages }) {

    const userId = user?.user_id;
    const clickedUserId = clickedUser?.user_id;

    const [textArea, setTextArea] = useState(null);

    const onChangeHandler = (e) => {
        setTextArea(e.target.value);
    }

    const addMessage = async () => {
        const message = {
            timestamp: new Date().toISOString(),
            from_userId: userId,
            to_userId: clickedUserId,
            message: textArea
        }

        try {
            await axios.post('http://localhost:8000/message', { message })
            getUsersMessages();
            getClickedUsersMessages();
            setTextArea('');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='chat-input'>
            <textarea value={textArea} onChange={onChangeHandler}/>
            <button className='secondary-button' onClick={addMessage}>Send</button>
        </div>
    )
}