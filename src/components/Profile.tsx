import { Session } from "next-auth"
import { signOut } from "next-auth/react";
import Image from 'next/image'

import IconClose from "./icons/IconClose";
import IconUser from "./icons/IconUser";

type Props = {
    session: Session;
    closeProfile: () => void;
}

export const Profile = ({ session, closeProfile }: Props ) => {
    return (
        <div className="flex fixed left-0 top-0 w-screen h-screen bg-gray-600/50 justify-end items-start p-3 z-50">
            <div onClick={() => closeProfile()} className="flex w-8 h-8 justify-center items-center rounded-xl md:hover:bg-white/10 cursor-pointer transition-all mr-3">
                <IconClose width={24} height={24} className="text-white" />
            </div>
            <div className="h-auto w-80 bg-white rounded-xl p-3">
                <div className="flex justify-between h-12 mb-5">
                    <div className="flex flex-col justify-between h-full overflow-hidden w-60">
                        <h2 className="text text-gray-600 text-lg truncate">Olá, estudante {session?.user?.name}</h2>
                        <p className="text-gray-800 text-sm truncate">{session?.user?.email}</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-black/20 flex justify-center items-center border-2 border-intellectia-lightblue">
                        <IconUser width={36} height={36} className="text-white"/>
                        {/* <Image
                            loader={session?.user?.image}
                            src="/profile.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        /> */}
                    </div>
                </div>
                <button onClick={() => signOut()} className="w-full border border-gray-400 rounded-md flex justify-center items-center text-md text-[#444444] p-2 md:hover:bg-black/5 transition-all outline-none">Sair da plataforma</button>
            </div>
        </div>
    );
}