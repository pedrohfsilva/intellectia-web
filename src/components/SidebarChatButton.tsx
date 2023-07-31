import { Chat } from "@/types/Chat";
import { useState } from "react";
import IconChatLeft from "./icons/IconChatLeft";
import IconTrash from "./icons/IconTrash";
import IconEdit3 from "./icons/IconEdit3";
import IconClose from "./icons/IconClose";
import IconCheckLg from "./icons/IconCheckLg";

type Props = {
    chatItem: Chat;
    active: boolean;
    AILoading: boolean;
    onClick: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

export const SidebarChatButton = ({ chatItem, active, AILoading, onClick, onDelete, onEdit }: Props) => {
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [titleInput, setTitleInput] = useState(chatItem.title);

    const handleClickButton = () => {
        if(!deleting && !editing) {
            onClick(chatItem.id);
        }
    }

    const handleConfirmButton = () => {
        if(deleting) onDelete(chatItem.id);

        if(editing && titleInput.trim() !== '') {
            onEdit(chatItem.id, titleInput.trim());
            setTitleInput(chatItem.title);
        } else {
            setTitleInput(chatItem.title);
        }

        setDeleting(false);
        setEditing(false);
    }

    const handleCancelButton = () => {
        setTitleInput(chatItem.title);
        setDeleting(false);
        setEditing(false);
    }

    return (
        <div onClick={handleClickButton} className={`flex items-center border-y-2 border-r-2 rounded-r-md px-3 py-1 text-sm bg-white/5 transition-all ${active ? 'border-white/20' : `border-transparent ${!AILoading && 'md:hover:bg-white/10 cursor-pointer'}`}`}>
            <div className="mr-3">
                {!deleting && !editing && <IconChatLeft width={16} height={16} className={`brightness-150 ${
                    (chatItem.subject === 'Português' && 'text-portugues') ||
                    (chatItem.subject === 'Inglês' && 'text-ingles') ||
                    (chatItem.subject === 'Geografia' && 'text-geografia') ||
                    (chatItem.subject === 'História' && 'text-historia') ||
                    (chatItem.subject === 'Filosofia e sociologia' && 'text-filosofia') ||
                    (chatItem.subject === 'Arte e literatura' && 'text-arte') ||
                    (chatItem.subject === 'Geral' && 'text-white/80')
                }`} />}
                {deleting && <IconTrash width={16} height={16} />}
                {editing && <IconEdit3 width={16} height={16} />}
            </div>
            
            <div className="flex-1 overflow-x-hidden">
                <div className={`text-xs brightness-150 ${
                    (chatItem.subject === 'Português' && 'text-portugues') ||
                    (chatItem.subject === 'Inglês' && 'text-ingles') ||
                    (chatItem.subject === 'Geografia' && 'text-geografia') ||
                    (chatItem.subject === 'História' && 'text-historia') ||
                    (chatItem.subject === 'Filosofia e sociologia' && 'text-filosofia') ||
                    (chatItem.subject === 'Arte e literatura' && 'text-arte') ||
                    (chatItem.subject === 'Geral' && 'text-white/80')
                }`}>{chatItem.subject}</div>

                <div className="flex-1 text-base overflow-x-hidden">
                    {editing && 
                        <input 
                            className="w-full bg-transparent outline-none border border-intellectia-lightblue"
                            value={titleInput}
                            onChange={e => setTitleInput(e.target.value)}
                        />
                    }
                    {!editing && 
                        <div className="border border-transparent truncate">
                            {!deleting && chatItem.title}
                            {deleting && `Delete "${chatItem.title}"`}
                        </div>
                    }
                </div>
            </div>

            {active && !deleting && !editing && 
                <div className="flex">
                    <div onClick={() => setEditing(true)} className="cursor-pointer mx-1 opacity-60 md:hover:opacity-100">
                        <IconEdit3 width={16} height={16} />
                    </div>
                    <div onClick={() => {if(!AILoading) setDeleting(true)}} className={`mx-1 ${AILoading ? 'opacity-40' : 'opacity-60 md:hover:opacity-100 cursor-pointer'} `}>
                        <IconTrash width={16} height={16} />
                    </div>
                </div>
            }

            {(deleting || editing) &&
                <div className="flex">
                    <div onClick={() => handleConfirmButton()} className="cursor-pointer mx-1 opacity-60 md:hover:opacity-100">
                        <IconCheckLg width={16} height={16} />
                    </div>
                    <div onClick={() => handleCancelButton()} className="cursor-pointer mx-1 opacity-60 md:hover:opacity-100">
                        <IconClose width={16} height={16} />
                    </div>
                </div>
            }
        </div>
    );
}