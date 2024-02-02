import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:1323/query';
const client = new GraphQLClient(endpoint);

const MESSAGE_POSTED_SUBSCRIPTION = `
    subscription messagePosted($id: ID!) {
        messagePosted(id: $id) {
            id
            text
        }
    }
`;

interface Message {
    id: string;
    text: string;
}

interface SubscriptionResponse {    
    messagePosted: Message;
}


export async function fetchMessageData (id: number): Promise<Message | null> {
    const variables = { id };

    try {
        const res = await client.request<SubscriptionResponse>(MESSAGE_POSTED_SUBSCRIPTION, variables);
        return res.messagePosted ?? null;
    } catch (error) {
        console.error("Error fetching message data:", error);
        throw error;
    }
}
