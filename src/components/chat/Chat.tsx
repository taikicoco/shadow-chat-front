import MessageInput from '../message/MessageInput';
import MessageList from '../message/MessageList';
import { useEffect, useState } from 'react';
import { fetchMessageData } from '../../api';
interface Message {
    text: string;
    type: 'sent' | 'received';
}

interface Message2 {
    id: string;
    text: string;
}

const Chat = () => {
    const message = getMessage({ id: 1 });
    let messages: Message[] | null;
    if (message) {
        messages = [message];
    } else {
        messages = null;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 h-2/3 flex flex-col">
            <div className="flex-grow overflow-y-auto">
                <MessageList messages={messages} />
            </div>
            <MessageInput />
        </div>
    );
}

const getMessage = ({ id }: { id: number }) : Message|null => {
    const [message, setMessage] = useState<Message2 | null>(null);
    useEffect(() => {
        const fetchAndSetMessage = async () => {
            try {
                const data = await fetchMessageData(id);
                if (data) {
                    setMessage(data);
                }
                
            } catch (error) {
                console.error("Error fetching message data:", error);
            } finally {
                console.log("Message data fetched!");
            }
        };

        fetchAndSetMessage();
    }, [id]);

    if (!message) return null;

    const resMessage: Message = {
        text: message.text,
        type: 'received',
    };
    return resMessage;
};

export default Chat;
