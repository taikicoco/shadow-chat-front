import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Message {
    text: string;
}

// メッセージリストコンポーネント
const MessageList = ({ messages }: { messages: Message[] }) => (
    <div className="message-list">
        {messages.map((message, index) => (
            <div key={index} className="message">
                {message.text}
            </div>
        ))}
    </div>
);

// トーク画面コンポーネント
const ChatApp = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    // メッセージの送信処理
    const sendMessage = () => {
        const trimmedMessage = newMessage.trim();
        if (trimmedMessage) {
            setMessages([...messages, { text: trimmedMessage }]);
            setNewMessage('');
        }
    };

    // インプットフィールドの変更をハンドル
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value);

    // エンターキーでメッセージを送信
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
            />
            <button onClick={sendMessage}>送信</button>
        </div>
    );
};

export default ChatApp;
