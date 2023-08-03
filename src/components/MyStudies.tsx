import IconClose from "./icons/IconClose";

type Props = {
    closeMyStudies: () => void;
}

export const MyStudies = ({ closeMyStudies }: Props) => {
    return (
        <section className="flex fixed left-0 top-0 w-screen h-screen bg-gray-600/75 justify-center items-center p-4 z-40">
            <div className="relative w-full h-full max-w-[60rem] max-h-[40rem] bg-intellectia-darkgray rounded-2xl p-4">
                <div onClick={() => closeMyStudies()} className="flex absolute top-2 right-2 w-8 h-8 justify-center items-center rounded-xl md:hover:bg-white/10 cursor-pointer transition-all">
                    <IconClose width={24} height={24} className="text-white" />
                </div>
                <h1 className="mb-8 text-xl text-intellectia-lightblue text-center">Meus estudos</h1>
                <div className="flex-col md:flex-row"></div>
            </div>
        </section>
    );
}