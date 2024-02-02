const MessageInput = () => {
    return (
        <div className="flex items-center mt-4">
            <input
                type="text"
                placeholder="メッセージを入力..."
                className="flex-grow mr-4 p-2 rounded-lg bg-gray-100"
            />
            <button type="submit" className="bg-blue-500 text-white rounded p-2 ">
                送信
            </button>
        </div>
    );
};

export default MessageInput;
