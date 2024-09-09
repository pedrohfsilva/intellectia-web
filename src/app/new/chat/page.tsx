'use client'

import { DashboardPage, DashboardPageFooter, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/page";
import { ChatArea } from "./_components/chat-area";
import { useState, useEffect } from "react";
import { ChatMessageInput } from "./_components/chat-message-input";
import { useChat, Message } from 'ai/react'; // Ajuste o import para incluir o tipo Message
import { basePrompt } from "@/prompts/contents-prompts";
import { useSearchParams } from 'next/navigation';
import { contents } from "@/prompts/contents-prompts";
import Link from "next/link";
import IconArrowBack from "@/components/icons/IconArrowBack";
import IconTrash from "@/components/icons/IconTrash";

export const runtime = 'nodejs'

export default function Page() {
  const searchParams = useSearchParams();
  const contentId = searchParams.get('content');
  const contentData = contents.find((content) => content.id === contentId);

  const [disabled, setDisabled] = useState(false);

  const deleteChat = () => {
    if(contentId) {
      setMessages([
        {
          id: '',
          content: basePrompt + '\n\n' + contentData?.schedule,
          role: 'system'
        },
      ]);
      localStorage.removeItem(contentId);
    }
  }
  
  // Função para salvar mensagens no localStorage
  const saveMessagesToLocalStorage = (messages: Message[]) => {
    localStorage.setItem(contentId ?? 'chatMessages', JSON.stringify(messages));
  };

  // Função para carregar mensagens do localStorage
  const loadMessagesFromLocalStorage = (): Message[] => {
    const savedMessages = localStorage.getItem(contentId ?? 'chatMessages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  };

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: '../../api/chat',
    initialMessages: [
      {
        id: '',
        content: basePrompt + '\n\n' + contentData?.schedule,
        role: 'system'
      },
      ...loadMessagesFromLocalStorage() // Carrega as mensagens do localStorage
    ]
  })

  // Salvar mensagens no localStorage sempre que elas forem atualizadas
  useEffect(() => {
    saveMessagesToLocalStorage(messages);
  }, [messages]);

  useEffect(() => {
    if (isLoading) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [isLoading]);

  return (
    <DashboardPage className="bg-intellectia-gray">
      <DashboardPageHeader className="border-white/20 flex justify-between items-center">
        <Link href="/new" className="bg-white/20 h-8 w-8 rounded-full flex justify-center items-center">
          <IconArrowBack width={24} height={24} color="white" />
        </Link>
        <DashboardPageHeaderTitle className="text-2xl">{contentData?.topic}</DashboardPageHeaderTitle>
        <button disabled={disabled} onClick={() => deleteChat()} className="bg-white/20 h-8 w-8 rounded-full flex justify-center items-center">
          <IconTrash width={16} height={16} color="white" />
        </button>
      </DashboardPageHeader>
      <DashboardPageMain className="flex flex-1 overflow-hidden">
        <ChatArea disabled={disabled} messages={messages} />
      </DashboardPageMain>
      <DashboardPageFooter className="flex justify-center border-white/20">
        <ChatMessageInput 
          disabled={disabled} 
          setDisabled={setDisabled} 
          input={input} 
          handleInputChange={handleInputChange} 
          handleSubmit={handleSubmit} 
          firstMessage={messages.filter((m) => m.role != 'system').length === 0} 
        />
      </DashboardPageFooter>
    </DashboardPage>
  );
}
