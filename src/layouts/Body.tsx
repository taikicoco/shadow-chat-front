import MessageInput from '../components/chat/MessageInput';
import MessageList from '../components/chat/MessageList';

const Body = () => {
    return (
        <div className="flex justify-center h-screen bg-gray-50 pt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/3 h-2/3 flex flex-col">
                <div className="flex-grow overflow-y-auto">
                    <MessageList />
                </div>
                <MessageInput />
            </div>
        </div>
    );
};

export default Body;
