'use client'

import { signIn } from "next-auth/react";

export const Login = () => {
    return (
        <div className="flex w-screen h-screen justify-center items-center bg-intellectia-blue">
            <div className="w-80 max-w-full bg-white p-4 rounded-md shadow">
                <h1 className="font text-xl text-intellectia-blue mb-4 text-center font-semibold">Bem vindo ao IntellectIA</h1>
                <button onClick={() => signIn("google")} className="w-full border border-gray-300 rounded-md flex justify-center items-center text-[#444444] p-2 md:hover:bg-black/5 transition-all outline-none">Continuar com Google</button>
            </div>
        </div>
    );
}