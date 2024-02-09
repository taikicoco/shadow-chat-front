
interface Message {
    text: string;
    type: 'sent' | 'received';
}

const Messages = ({ messages }: { messages: Message[]}) => {
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

const MessageList = (props : { messages: Message[] | null}) => {
    const { messages } = props;
    if (!messages) return null;
    return (
        <div>
            <Messages messages={messages} />
        </div>
    )
}

export default MessageList;

