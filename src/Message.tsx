import { ApolloProvider, gql, useQuery } from '@apollo/client';

// applo client
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:1323/query'
    }),
});

const QUERY = gql`
    query {
        messages{
        id
        text
        }
    }
`

interface Message {
    id: number;
    text: string;
}

const Message = () => {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return <p>...loading</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <h1>Get Message from GraphQL</h1>
            {data && data.messages && data.messages.map((message: Message) => (
                <p key={message.id}>{message.text}</p>
            ))}
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
