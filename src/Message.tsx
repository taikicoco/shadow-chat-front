import { 
    ApolloProvider,
    gql,
    useSubscription,
    ApolloClient,
    HttpLink,
    InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:1323/query'
    }),
});

// サブスクリプションクエリ
const MESSAGE_POSTED_SUBSCRIPTION = gql`
    subscription {
        messagePosted(id: 1) {
            id
            text
        }
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
            <h1>Message from subscription</h1>
            {data && data.messagePosted && (
                <p key={data.messagePosted.id}>{data.messagePosted.text}</p>
            )}
        </div>
    );
}

function App2 () {
    return (
        <ApolloProvider client={client}>
            <Message />            
        </ApolloProvider>
    );
}

export default App2;
