import { ChatPlaceholderItem } from "./ChatPlaceholderItem";
import IconSunTwentyFour from "./icons/IconSunTwentyFour";

type Props = {
    subjects: string[];
    setCurrentSubject: (index: string) => void;
}

export const ChatPlaceholder = ({ subjects, setCurrentSubject }: Props) => {
    return (
        <div className="my-5 md:my-20">
            <h3 className="text-2xl fron-bold text-center my-10">Escolha uma disciplina para estudar</h3>
            <div className="flex flex-col md:flex-row gap-5 w-full">

                <div className="flex flex-col flex-1 gap-5">
                    <ChatPlaceholderItem subject={subjects[0]} setCurrentSubject={setCurrentSubject} />
                    <ChatPlaceholderItem subject={subjects[1]} setCurrentSubject={setCurrentSubject} />
                </div>

                <div className="flex flex-col flex-1 gap-5">
                    <ChatPlaceholderItem subject={subjects[2]} setCurrentSubject={setCurrentSubject} />
                    <ChatPlaceholderItem subject={subjects[3]} setCurrentSubject={setCurrentSubject} />
                </div>

                <div className="flex flex-col flex-1 gap-5">
                    <ChatPlaceholderItem subject={subjects[4]} setCurrentSubject={setCurrentSubject} />
                    <ChatPlaceholderItem subject={subjects[5]} setCurrentSubject={setCurrentSubject} />
                </div>
            </div>
        </div>
    );
}