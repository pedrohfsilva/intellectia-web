import { ReactNode, useEffect, useState } from "react";
import { ChatMessageSugestionItem } from "./ChatMessageSugestionItem";

type Props = {
    subjects: string[];
    currentSubject: string;
    suggestions: string[][];
    setText: (text: string) => void;
}

export const ChatMessageSugestion = ({ subjects, currentSubject, suggestions, setText }: Props) => {
    const [suggestionsShuffle, setSuggestionsShuffle] = useState<string[]>([]);

    const shuffle = (array: string[]): string[] => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 

    useEffect(() => {
        let indexSubject = ['Geral', ...subjects].indexOf(currentSubject);
        let suggestionsShuffleAux = shuffle(suggestions[indexSubject]);

        setSuggestionsShuffle(suggestionsShuffleAux);
    }, [currentSubject]);
    
    const renderSuggestions = (): ReactNode => {
        return (
            <div className="h-full w-fit flex gap-x-3">
                {suggestionsShuffle.map((item) => {
                    return (<ChatMessageSugestionItem currentSubject={currentSubject} suggestion={item} setText={setText}/>)
                })}
            </div>
        );
    }

    return (
        <div className="h-12 w-full mb-4 mt-2 px-3 pb-1 overflow-auto">
            {renderSuggestions()}
        </div>
    );
}