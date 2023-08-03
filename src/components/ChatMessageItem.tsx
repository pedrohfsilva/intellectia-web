import { ChatMessage } from "@/types/ChatMessage"
import IconUser from "./icons/IconUser";
import IconRobot from "./icons/IconRobot";

type Props = {
    item: ChatMessage;
    currentSubject: string;
}

export const ChatMessageItem = ({ item, currentSubject }: Props) => {
    return (
            <div className={`w-full flex mb-4 ${item.author === 'me' ? 'justify-end' : 'justify-start'}`}>
                {item.author === 'me' && <div className="w-40 md:w-3/12"></div>}
                <div className={`max-w-full w-auto text-base whitespace-pre-wrap p-3 rounded-xl shadow-md ${item.author === 'me' ? (
                    (currentSubject === 'Português' && 'bg-portugues/40') ||
                    (currentSubject === 'Inglês' && 'bg-ingles/40') ||
                    (currentSubject === 'Geografia' && 'bg-geografia/40') ||
                    (currentSubject === 'História' && 'bg-historia/40') ||
                    (currentSubject === 'Filosofia e sociologia' && 'bg-filosofia/40') ||
                    (currentSubject === 'Arte e literatura' && 'bg-arte/40') ||
                    (currentSubject === 'Geral' && 'bg-intellectia-lightblue/40')
                ) : 'bg-white/20'}`}>
                    {item.body}
                </div>
                {item.author === 'ai' && <div className="w-40 md:w-3/12"></div>}
        </div>
    )
}