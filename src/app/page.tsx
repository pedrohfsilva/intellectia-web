"use client"

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SidebarChatButton } from "@/components/SidebarChatButton";
import { Chat } from "@/types/Chat";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setIALoading] = useState(false);
  const [currentSubject, setCurrentSubject] = useState('Geral');

  const subjects = [
    'Português', 'Inglês', 'Geografia', 'História', 'Filosofia e sociologia', 'Arte e literatura'
  ];

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if(AILoading) getAIResponse();
  }, [AILoading]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const getAIResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      if(chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ai',
          body: `A Revolução Industrial começou na indústria têxtil, que foi uma das primeiras a adotar novas tecnologias e métodos de produção. Antes desse período, a produção de roupas era principalmente realizada em casa, de forma artesanal.`
        });
      }
      setChatList(chatListClone);
      setIALoading(false);
    }, 4000);
  }

  const handleClearConversations = () => {
    if(AILoading) return;

    setChatActiveId('');
    setChatList([]);
  }

  const handleNewChat = () => {
    if(AILoading) return;

    setChatActiveId('');
    closeSidebar();
    setCurrentSubject('Geral');
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId) {
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        subject: currentSubject,
        messages: [
          { id: uuidv4(), author: 'me', body: message }
        ]
      }, ...chatList]);

      setChatActiveId(newChatId);
    } else {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(), author: 'me', body: message
      });
      setChatList(chatListClone);
    }

    setIALoading(true);
  }

  const handleSelectChat = (id: string) => {
    if(AILoading) return;

    let item = chatList.find(item => item.id === id);
    if(item) {
      setChatActiveId(item.id);
      setCurrentSubject(item.subject);
    }
    closeSidebar();
  }

  const handleDeleteChat = (id: string) => {
    if(AILoading) return;

    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex(item => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId('');
  }

  const handleEditChat = (id: string, newTitle: string) => {
    if(newTitle) {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === id);
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
    }
  }

  return (
    <main className="flex min-h-screen bg-intellectia-gray">
      <Sidebar
        open={sidebarOpened}
        AILoading={AILoading}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        {chatList.map(item => (
          <SidebarChatButton 
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={handleEditChat}
            AILoading={AILoading}
          />
        ))}
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={currentSubject}
          newChatClick={handleNewChat}
          currentSubject={currentSubject}
        />

        <ChatArea chat={chatActive} loading={AILoading} subjects={subjects} currentSubject={currentSubject} setCurrentSubject={setCurrentSubject} />

        <Footer
          disabled={AILoading}
          onSendMessage={handleSendMessage}
          currentSubject={currentSubject}
        />
      </section>
    </main>
  );
}

export default Page;