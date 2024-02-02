
interface Message {
    text: string;
    type: 'sent' | 'received';
}

const messages: Message[] = [
    { text: 'Hello', type: 'sent' },
    { text: 'Hi there!' , type: 'received' },
    { text: 'How are you?', type: 'sent' },
    { text: 'I am doing well, thank you.', type: 'received' },
    { text: 'That is great to hear.', type: 'sent' },
    { text: 'Yes, it is.', type: 'received' },
    { text: 'Goodbye!', type: 'sent' },
    { text: 'Goodbye!', type: 'received' },
];

const Messages = ({ messages }: { messages: Message[] }) => (
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



const MessageList = () => {
    return (
        <div>
            <Messages messages={messages} />
        </div>
    )
}

export default MessageList;
