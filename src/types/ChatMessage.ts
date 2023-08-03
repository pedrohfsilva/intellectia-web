export type ChatMessage = {
    id: string;
    author: 'me' | 'ai';
    exam: string;
    body: string;
}