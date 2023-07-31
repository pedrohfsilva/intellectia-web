import IconAdd from "./icons/IconAdd";
import IconMenu from "./icons/IconMenu";
import IconUser from "./icons/IconUser";

type Props = {
    openSidebarClick: () => void;
    title: string;
    newChatClick: () => void;
    currentSubject: string;
}

export const Header = ({ openSidebarClick, title, newChatClick, currentSubject }: Props) => {
    return (
        <header className="flex justify-between items-center w-full border-b-2 border-b-white/10 h-14 px-3">
            <div onClick={openSidebarClick}>
                <IconMenu width={24} height={24} />
            </div>

            <div className={`mx-2 truncate w-80 rounded-full flex px-2 h-8 text-sm justify-center items-center border-2 justify-self-center ${
                (currentSubject === 'Português' && 'bg-portugues/10 border-portugues/60') ||
                (currentSubject === 'Inglês' && 'bg-ingles/10 border-ingles/60') ||
                (currentSubject === 'Geografia' && 'bg-geografia/10 border-geografia/60') ||
                (currentSubject === 'História' && 'bg-historia/10 border-historia/60') ||
                (currentSubject === 'Filosofia e sociologia' && 'bg-filosofia/10 border-filosofia/60') ||
                (currentSubject === 'Arte e literatura' && 'bg-arte/10 border-arte/60') ||
                (currentSubject === 'Geral' && 'bg-white/5 border-white/40')
            }`}>{title}</div>

            <div className="h-8 flex gap-3">
                <div onClick={newChatClick} className="h-8 w-8 rounded-full flex justify-center items-center md:cursor-pointer md:hover:bg-white/10">
                    <IconAdd width={24} height={24} />
                </div>

                <div className="h-8 w-8 rounded-full bg-white/80 flex justify-center items-center md:cursor-pointer border-2 border-intellectia-lightblue">
                    <IconUser width={24} height={24} className="text-white" />
                </div>
            </div>
        </header>
    );
}