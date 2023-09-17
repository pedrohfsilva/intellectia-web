type Props = {
    suggestion: string;
    currentSubject: string;
    setText: (text: string) => void;
}

export const ChatMessageSugestionItem = ({ suggestion, currentSubject, setText }: Props) => {
    return (
        <div 
            className="h-full w-auto max-w-sm px-3 flex items-center rounded-full text-sm truncate border-2 border-intellectia-blue text-intellectia-lightblue brightness-125 cursor-pointer md:hover:bg-intellectia-blue/10 transition-all"
            onClick={() => setText(suggestion)}
        >
            <div className="truncate">
                {suggestion}
            </div>
        </div>
    );
}