type Props = {
    subject: string;
    setCurrentSubject: (index: string) => void;
}

export const ChatPlaceholderItem = ({ subject, setCurrentSubject }: Props) => {
    return (
        <div onClick={() => setCurrentSubject(subject)} className={`rounded-lg text-center text-lg text-white p-4 flex-1 md:cursor-pointer border-2 md:hover:brightness-150 transition-all ${
            (subject === 'Português' && 'bg-portugues/20 border-portugues') ||
            (subject === 'Inglês' && 'bg-ingles/20 border-ingles') ||
            (subject === 'Geografia' && 'bg-geografia/20 border-geografia') ||
            (subject === 'História' && 'bg-historia/20 border-historia') ||
            (subject === 'Filosofia e sociologia' && 'bg-filosofia/20 border-filosofia') ||
            (subject === 'Arte e literatura' && 'bg-arte/20 border-arte')
        }`}>
            {subject}
        </div>
    );
}