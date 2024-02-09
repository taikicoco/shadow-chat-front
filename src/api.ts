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

const MESSAGE_POSTED_MUTATION = `
    mutation PostMessage($id: ID!, $text: String!) {
        postMessage(id: $id, text: $text) {
            id
            text
            type
        }
    }
`;

interface Message {
    id: string;
    text: string;
    type: string;
}

interface SubscriptionResponse {    
    messagePosted: Message;
}

interface MutationResponse {
    id: number;
    text: string;
    type: string;
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

export async function postMessageData (message: Message): Promise<MutationResponse> {
    const variables = { id: message.id, text: message.text };

    try {
        const res = await client.request<MutationResponse>(MESSAGE_POSTED_MUTATION, variables);
        return res
    } catch (error) {
        console.error("Error posting message data:", error);
        throw error;
    }
}
