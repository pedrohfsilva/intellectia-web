import { useEffect, useRef, useState } from "react";
import IconSend from "./icons/IconSend";

type Props = {
    disabled: boolean;
    onSend: (message: string) => void;
    currentSubject: string;
}

export const ChatMessageInput = ({ disabled, onSend, currentSubject }: Props) => {
    const [text, setText] = useState('');
    const textEl = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if(textEl.current) {
            textEl.current.style.height = '0px';
            let scrollHeight = textEl.current.scrollHeight;
            textEl.current.style.height = scrollHeight + 'px';
        }
    }, [text, textEl, currentSubject]);

    useEffect(() => {
        setText('');
    }, [currentSubject]);

    const handleSendMessage = () => {
        if(!disabled && text.trim() != '') {
            onSend(text);
            setText('');
        }
    }

    return (
        <div className={`flex items-center border-2 bg-white/10 p-2 rounded-[26px] ${disabled && 'opacity-50'} ${
            (currentSubject === 'Português' && 'border-portugues') ||
            (currentSubject === 'Inglês' && 'border-ingles') ||
            (currentSubject === 'Geografia' && 'border-geografia') ||
            (currentSubject === 'História' && 'border-historia') ||
            (currentSubject === 'Filosofia e sociologia' && 'border-filosofia') ||
            (currentSubject === 'Arte e literatura' && 'border-arte') ||
            (currentSubject === 'Geral' && ' border-white/60')
        }`}>

            <textarea 
                ref={textEl}
                className="flex-1 placeholder-white/60 border-0 bg-transparent resize-none outline-none h-8 max-h-44 overflow-y-auto pl-2"
                placeholder={`Faça uma pergunta${currentSubject != 'Geral' ? ' sobre ' + currentSubject.toLowerCase() : ''}`}
                value={text}
                onChange={e => setText(e.target.value)}
                disabled={disabled}
            >
            </textarea>

            <div onClick={handleSendMessage} className={`w-8 h-8 flex justify-center items-center rounded-full self-end ${(!disabled && text.length) ? 'cursor-pointer md:hover:bg-white/20' : 'opacity-40'}`}>
                <IconSend width={18} height={18} />
            </div>
        </div>
    );
}