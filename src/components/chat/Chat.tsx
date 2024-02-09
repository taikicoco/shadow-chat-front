import MessageInput from '../message/MessageInput';
import MessageList from '../message/MessageList';

const Chat = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 h-2/3 flex flex-col">
            <div className="flex-grow overflow-y-auto">
                <MessageList />
            </div>
            <MessageInput />
        </div>
    );
}

export default Chat;
