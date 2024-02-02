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

const Messages = ({ messages }: { messages: Message[] }) => {
    return (
        <>
            {messages.map((message, index) => {
                let alignmentClass = '';
                if (message.type === 'sent') {
                    alignmentClass = 'ml-auto';
                } 
                if (message.type === 'received') {
                    alignmentClass = 'mr-auto';
                }

                return (
                    <div key={index} className="mx-auto my-2 flex">
                        <div className={`border-2 border-gray-300 rounded-lg p-2 ${alignmentClass}`}>
                            {message.text}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

const SubMessage = ({ id }: { id: number }) : Message|null => {
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

const MessageList = () => {
    const message = SubMessage({ id: 1 });
    if (!message) return null;
    const messages = [message];

    return (
        <div>
            <Messages messages={messages} />
        </div>
    )
}

export default MessageList;

