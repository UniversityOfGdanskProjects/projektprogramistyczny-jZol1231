import { useState } from 'react';

export default function ChatInput() {

    const [textArea, setTextArea] = useState(null);

    const onChangeHandler = (e) => {
        setTextArea(e.target.value);
    }


    return (
        <div className='chat-input'>
            <textarea value={textArea} onChange={onChangeHandler}/>
            <button className='secondary-button'>Send</button>
        </div>
    )
}