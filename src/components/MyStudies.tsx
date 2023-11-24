import IconClose from "./icons/IconClose";
import IconPlayFill from "./icons/IconPlayFill";

type Props = {
    closeMyStudies: () => void;
}

export const MyStudies = ({ closeMyStudies }: Props) => {
    return (
        <section className="flex fixed left-0 top-0 w-screen h-screen bg-gray-600/75 justify-center items-center p-4 z-40">
            <div className="relative w-full h-auto max-w-[45rem] bg-intellectia-darkgray rounded-xl">
                {/* <div onClick={() => closeMyStudies()} className="flex absolute top-2 right-2 w-8 h-8 justify-center items-center rounded-xl md:hover:bg-white/10 cursor-pointer transition-all">
                    <IconClose width={24} height={24} className="text-white" />
                </div> */}
                <div className="px-6 py-4 border-b border-white/20">
                    <h1 className="mb-1 text-lg font-bold">Bem vindo a IntellectIA</h1>
                    <h2 className="text-sm text-white/80">Recursos da plataforma</h2>
                </div>
                <div className="p-6">
                    <div className="flex flex-row gap-8 mb-4">
                        <div className="border-intellectia-lightblue rounded-md mb-4 flex-1">
                            <div className="flex flex-rol items-center mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                                <h2 className="font-bold ml-2 text-sm">Chat personalizado</h2>
                            </div>
                            <p className="text-sm text-white/80">Nossa plataforma possui um chat com inteligência artificial projetado especificamente para te auxiliar nos estudos para o vestibular.</p>
                        </div>
                        <div className="border-intellectia-lightblue rounded-md mb-4 flex-1">
                            <div className="flex flex-rol items-center mb-2">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <h2 className="font-bold ml-2 text-sm">Pesquisa na web</h2>
                            </div>
                            <p className="text-sm text-white/80">Com esse recurso, você poderá fazer perguntas sobre qualquer assunto recente para economizar o seu tempo de pesquisa na internet.</p>
                        </div>
                        <div className="border-intellectia-lightblue rounded-md mb-4 flex-1">
                            <div className="flex flex-rol items-center mb-2">
                                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                                <h2 className="font-bold ml-2 text-sm">Busca de questões</h2>
                            </div>
                            <p className="text-sm text-white/80">Não perca mais tempo procurando questões na internet, aqui você pode pedir questões sobre diversos assuntos e ter um feedback imediato da resposta.</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-end">
                        <div onClick={() => closeMyStudies()} className="flex w-40 h-10 justify-center items-center rounded-md md:hover:brightness-75 bg-green-600 cursor-pointer transition-all">
                            <p className="font-bold text-lg">Começar</p>
                            <IconPlayFill width="20" height="20" className="ml-2"></IconPlayFill>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}