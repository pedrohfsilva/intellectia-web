import { useState } from 'react';
import { ChatMessageInput } from "./ChatMessageInput";
import { ChatMessageSugestion } from "./ChatMessageSugestion";

type Props = {
    disabled: boolean;
    onSendMessage: (message: string) => void;
    currentSubject: string;
    subjects: string[];
    suggestions: string[][];
}

export const Footer = ({ disabled, onSendMessage, currentSubject, subjects, suggestions }: Props) => {
    const [text, setText] = useState('');

    return (
        <footer className="w-full border-t-2 border-t-white/10 pb-4 pt-2">
            <h2 className="text-sm text-gray-200 indent-3">Sugestões de perguntas</h2>
            <ChatMessageSugestion 
                subjects={subjects}
                currentSubject={currentSubject}
                suggestions={suggestions}
                setText={setText}
            />
            <div className="w-full max-w-4xl m-auto">
                <ChatMessageInput
                    disabled={disabled}
                    onSend={onSendMessage}
                    currentSubject={currentSubject}
                    text={text}
                    setText={setText}
                />
            </div>
        </footer>
    );
}