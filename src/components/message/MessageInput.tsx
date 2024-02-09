import { useState } from 'react';
import { FormEvent } from 'react';
import { postMessageData } from '../../api';

interface Message {
    id: string;
    text: string;
    type: string;
}

const MessageInput = (props:any) => {
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const postMessageData : Message = {
            id: '1',
            text: message,
            type: 'sent'
        };
        const res = postMessage({ message: postMessageData });
        props.handleValueChange(res);
        setMessage('');  
    };

    return (
        <form
            className="flex items-center mt-4"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Enter your message..."
                className="flex-grow mr-4 p-2 rounded-lg bg-gray-100"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 ">
                Send
            </button>
        </form>
    );
};


async function postMessage ({ message }: { message: Message }) {
    if (!message) return null;

    try {
        const messageId = await postMessageData(message);
        console.log("Message sent!", messageId);
    } catch (error) {
        console.error("Error posting message data:", error);
    } finally {
        //
    }
    return message;
}

export default MessageInput;
