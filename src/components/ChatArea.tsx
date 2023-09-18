import { Chat } from "@/types/Chat";
import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageLoding } from "./ChatMessageLoading";
import IconChevronRight from "./icons/IconChevronRight";

type Props = {
    chat: Chat | undefined;
    loading: boolean;
    subjects: string[];
    currentSubject: string;
    isSmall: boolean;
    openSidebarClick: () => void;
    setCurrentSubject: (index: string) => void;
}

export const ChatArea = ({ chat, loading, subjects, currentSubject, isSmall, openSidebarClick, setCurrentSubject }: Props) => {
    return (
        <section className="flex-auto h-0 overflow-y-auto p-4 relative">
            <div className="md:max-w-4xl m-auto">
                {/* {isSmall &&
                    <div onClick={openSidebarClick} className="fixed left-4 top-16 w-10 h-10 rounded-full flex justify-center items-center bg-intellectia-blue shadow-md">
                        <IconChevronRight width={27} height={27} />
                    </div>
                } */}

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