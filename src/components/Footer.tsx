import { ChatMessageInput } from "./ChatMessageInput";

type Props = {
    disabled: boolean;
    onSendMessage: (message: string) => void;
    currentSubject: string;
}

export const Footer = ({ disabled, onSendMessage, currentSubject }: Props) => {
    return (
        <footer className="w-full border-t-2 border-t-white/10 p-4">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                    disabled={disabled}
                    onSend={onSendMessage}
                    currentSubject={currentSubject}
                />
            </div>
        </footer>
    );
}