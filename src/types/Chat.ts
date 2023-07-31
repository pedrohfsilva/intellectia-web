import { ChatMessage } from "./ChatMessage";

export type Chat = {
    id: string;
    title: string;
    subject: string;
    messages: ChatMessage[];
}