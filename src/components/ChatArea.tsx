import { Chat } from "@/types/Chat";
import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageLoding } from "./ChatMessageLoading";

type Props = {
    chat: Chat | undefined;
    loading: boolean;
    subjects: string[];
    currentSubject: string;
    setCurrentSubject: (index: string) => void;
}

export const ChatArea = ({ chat, loading, subjects, currentSubject, setCurrentSubject }: Props) => {
    return (
        <section className="flex-auto h-0 overflow-y-auto p-4">
            <div className="md:max-w-4xl m-auto">
                {currentSubject === 'Geral' && !chat && <ChatPlaceholder subjects={subjects} setCurrentSubject={setCurrentSubject} />}
                {chat && chat.messages.map(item => (
                    <ChatMessageItem
                        key={item.id}
                        item={item}
                        currentSubject={currentSubject}
                    />
                ))}
                {loading && <ChatMessageLoding />}
            </div>
        </section>
    );
}