import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Message {
    text: string;
}

const MessageList = ({ messages }: { messages: Message[] }) => (
    <div className="message-list max-w-lg mx-auto overflow-y-auto">
        {messages.map((message, index) => (
            <div key={index} className="message bg-white border-2 border-gray-300 rounded-lg p-2 my-2">
                {message.text}
            </div>
        ))}
    </div>
);

const ChatApp = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    const sendMessage = () => {
        const trimmedMessage = newMessage.trim();
        if (trimmedMessage) {
            setMessages([...messages, { text: trimmedMessage }]);
            setNewMessage('');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value);
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="chat-app">
            <MessageList messages={messages} />
            <input
                type="text"
                value={newMessage}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
            <button 
                onClick={sendMessage}
                className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            >Submit
            </button>
        </div>
    );
};

export default ChatApp;
