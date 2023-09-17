import { ReactNode, useEffect, useState } from "react";
import IconClose from "./icons/IconClose";
import IconAdd from "./icons/IconAdd";
import { SidebarButton } from "./SidebarButton";
import IconTrash from "./icons/IconTrash";
import IconBrain from "./icons/IconBrain";
import IconIconSearch from "./icons/IconIconSearch";
import Link from "next/link";

type Props = {
    children: ReactNode;
    open: boolean;
    AILoading: boolean;
    onClose: () => void;
    onClear: () => void;
    onNewChat: () => void;
    onSearch: () => ReactNode;
    searchText: string;
    setSearchText: (text: string) => void;
    myStudiesOpened: boolean;
    openMyStudies: () => void;
}

export const Sidebar = ({ children, open, AILoading, onClose, onClear, onNewChat, onSearch, searchText, setSearchText, openMyStudies, myStudiesOpened }: Props) => {
    useEffect(() => {
        onSearch();
    }, [searchText]);

    return (
        <section className={`fixed left-0 top-0 bottom-0 text-white z-20 ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`}>

            <div className={`transition-all duration-200 flex h-screen ${open ? 'ml-0' : '-ml-96'} md:ml-0`}>

                <div className="flex flex-col w-64 bg-intellectia-darkgray">
                    <div className="flex justify-center items-center h-14 px-3 border-b-2 border-white/10">
                        <IconBrain width={30} height={30} className="mr-3 text-intellectia-lightblue" />
                        <h1 className="font-bold text-2xl text-intellectia-lightblue">IntellectIA</h1>
                    </div>

                    <div className="flex flex-col border-b-2 border-white/10 gap-3 p-3">
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdPNv3JbjcMEiC5b02dKepD4aLSSw_QGZUXg0ovw9cQ26baZw/viewform?usp=sf_link " className="flex h-10">
                            <button className={`flex-1 select-none justify-center items-center rounded-md text-lg bg-intellectia-blue ${!AILoading && !myStudiesOpened && 'md:hover:brightness-125 cursor-pointer'}`}>
                                Feedback
                            </button>
                        </Link>

                        <div onClick={onNewChat} className={`transition-all flex items-center select-none h-10 px-3 rounded-md text-sm border-2 border-white/20 ${!AILoading && 'md:hover:bg-gray-500/20 cursor-pointer'}`}>
                            <IconAdd width={20} height={20} className="mr-3 text-white/80"/>
                            Nova seção
                        </div>

                        <div className={`transition-all flex items-center h-10 px-3 rounded-md text-sm border-2 border-white/20`}>
                            <IconIconSearch width={16} height={16} className="mr-3 text-white/80"/>
                            <input
                                className="w-full bg-transparent outline-none text-sm p-1.5"
                                value={searchText}
                                placeholder="Pesquiar seção"
                                onChange={e => setSearchText(e.target.value)}
                            />
                        </div>
                    </div>


                    <nav className="flex flex-col flex-1 overflow-y-auto p-3 pl-0 gap-3">
                        <h3 className="ml-4 text-xs text-intellectia-lightblue brightness-150">Histórico</h3>
                        {children}
                    </nav>

                    {/* <div className="border-t border-t-gray-700 pt-2">
                        <SidebarButton
                            icon={<IconTrash width={16} height={16} />}
                            label="Limpar todas as conversas"
                            onClick={onClear}
                        />
                    </div> */}
                </div>
                <div onClick={onClose} className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden">
                    <IconClose width={24} height={24}></IconClose>
                </div>
            </div>
        </section>
    );
}