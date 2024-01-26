import { 
    ApolloProvider,
    gql,
    useSubscription,
    useMutation,
    ApolloClient,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';
import { useState, ChangeEvent } from 'react';


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:1323/query'
    }),
});

const MESSAGE_POSTED_SUBSCRIPTION = gql`
    subscription {
        messagePosted(id: 1) {
            id
            text
        }
    }
`;

const MESSAGE_POSTED_MUTATION = gql`
    mutation PostMessage($id: ID!, $text: String!) {
        postMessage(id: $id, text: $text)
    }
`;


interface Message {
    id: number;
    text: string;
}

const Message = () => {
    const { data, loading, error } = useSubscription(MESSAGE_POSTED_SUBSCRIPTION);

    if (loading) return <p>...loading</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            {data && data.messagePosted && (
                <p key={data.messagePosted.id}>{data.messagePosted.text}</p>
            )}
        </div>
    );
}

const PostMessage = () => {
    const [postMessage, { loading, error }] = useMutation(MESSAGE_POSTED_MUTATION);
    const [newMessage, setNewMessage] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value);
    const handleSubmit = () => {
        const trimmedMessage = newMessage.trim();
        if (trimmedMessage) {
            postMessage({ variables: { id: 1, text: trimmedMessage } });
            setNewMessage('');
        }
    };

    if (loading) return <p>Posting...</p>;
    if (error) return <p>Error posting message: {error.message}</p>;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="message"
                    onChange={handleChange}
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <button 
                    className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                >Post
                </button>
            </form>
        </div>
    );
}


function Messages () {
    return (
        <ApolloProvider client={client}>
            <Message />
            <PostMessage />        
        </ApolloProvider>
    );
}

export default Messages;
