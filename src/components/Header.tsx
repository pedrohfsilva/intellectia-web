// import { Session } from "next-auth"

import IconAdd from "./icons/IconAdd";
import IconMenu from "./icons/IconMenu";
import IconUser from "./icons/IconUser";

type Props = {
    title: string;
    newChatClick: () => void;
    AILoading: boolean;
    currentSubject: string;
    exams: string[];
    currentExam: string;
    isSmall: boolean;
    setCurrentExam: (exam: string) => void;
    openProfile: () => void;
    openSidebarClick: () => void;
}

export const Header = ({ title, newChatClick, AILoading, currentSubject, exams, currentExam, isSmall, setCurrentExam, openProfile, openSidebarClick }: Props) => {
    return (
        <header className="flex justify-between items-center w-full border-b-2 border-b-white/10 p-3">
            {/* <select 
                disabled={AILoading} 
                value={currentExam} 
                onChange={(e) => setCurrentExam(e.target.value)} 
                className={`w-40 h-8 rounded-md bg-intellectia-gray border-2 border-intellectia-lightblue outline-none pl-2 ${!AILoading && 'cursor-pointer'}`}
            >
                {['Todos', ...exams].map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                ))}
            </select> */}

            <div onClick={openSidebarClick} className="h-8 w-8 flex justify-center items-center">
                <IconMenu width={24} height={24} className="md:hidden"/>
            </div>

            <div className={`mx-3 truncate w-80 rounded-full flex px-2 h-8 text-sm justify-center items-center border-2 text-white ${
                (currentSubject === 'Português' && 'bg-portugues/10 border-portugues/60') ||
                (currentSubject === 'Inglês' && 'bg-ingles/10 border-ingles/60') ||
                (currentSubject === 'Geografia' && 'bg-geografia/10 border-geografia/60') ||
                (currentSubject === 'História' && 'bg-historia/10 border-historia/60') ||
                (currentSubject === 'Filosofia e sociologia' && 'bg-filosofia/10 border-filosofia/60') ||
                (currentSubject === 'Arte e literatura' && 'bg-arte/10 border-arte/60') ||
                (currentSubject === 'Geral' && 'bg-white/5 border-white/40')
            }`}>{title}</div>

            {/* <div className="h-8 flex gap-3">
                {isSmall &&
                    <div onClick={newChatClick} className="h-8 w-8 rounded-full bg-white/10 flex justify-center items-center md:cursor-pointer md:hover:bg-white/10">
                        <IconAdd width={24} height={24} />
                    </div>
                }

                <div className="h-8 w-8 rounded-full bg-white/80 flex justify-center items-center md:cursor-pointer border-2 border-intellectia-lightblue">
                    <IconUser width={24} height={24} className="text-white" />
                </div>
            </div> */}

            <div onClick={newChatClick} className="h-8 w-8 rounded-full bg-white/10 flex justify-center items-center md:cursor-pointer md:hover:bg-white/10">
                <IconAdd width={24} height={24} />
            </div>
        </header>
    );
}