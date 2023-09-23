'use client'

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import { Session } from "next-auth";

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MyStudies } from "@/components/MyStudies";
// import { SessionProvider } from "@/components/SessionProvider";
import { Sidebar } from "@/components/Sidebar";
import { SidebarChatButton } from "@/components/SidebarChatButton";
import { Chat } from "@/types/Chat";
import { Profile } from "@/components/Profile";
import { ChatMessage } from "@/types/ChatMessage";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatListSearch, setChatListSearch] = useState<Chat[]>(chatList);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setIALoading] = useState(false);
  const [currentSubject, setCurrentSubject] = useState('Geral');
  const [currentExam, setCurrentExam] = useState('Todos');
  const [searchText, setSearchText] = useState('');
  const [myStudiesOpened, setMyStudiesOpened] = useState(false);
  const [profileOpened, setProfileOpened] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [chatLoading, setChatLoading] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);
  const openMyStudies = () => {
    closeSidebar();
    setMyStudiesOpened(true);
  }
  const closeMyStudies = () => setMyStudiesOpened(false);
  const openProfile = () => setProfileOpened(true);
  const closeProfile = () => setProfileOpened(false);

  let fheihfiehi = [
    {
      id: "fhiehifwhfe",
      title: "Título do chat",
      subject: "Português",
      messages: [
        {
          id: "fhiehfihiew",
          author: "me",
          exam: "Enem",
          body: "Exemplo de chat"
        },
        {
          id: "fhiehfihiew",
          author: "ai",
          exam: "Enem",
          body: "Exemplo de chat 1"
        },
      ]
    },
    {
      id: "fheihwiohfe",
      title: "Título do chat 2",
      subject: "Geografia",
      messages: [
        {
          id: "fhiehfihiew",
          author: "me",
          exam: "Enem",
          body: "Exemplo de chat 2"
        },
        {
          id: "huuwguegh",
          author: "ai",
          exam: "Enem",
          body: "Exemplo de chat 4"
        },
      ]
    }
  ]

  // const [chatList2, setChatList2] = useState<any>([[], { subject: "Geral" }]);

  const subjects = [
    'Português', 'Inglês', 'Geografia', 'História', 'Filosofia e sociologia', 'Arte e literatura'
  ];

  const exams = [
    'Enem', 'Fuvest'
  ];

  const suggestions = [
    [
      'Crie uma questão sobre ',
      'O que é uma metáfora?',
      'Como usar "to be" no presente?',
      'Quais são os pontos cardeais?',
      'Fale sobre a República da Espada',
      'Quem foi Sócrates?',
      'O que é o cubismo?'
    ],
    [
      'Crie uma questão sobre ',
      'Como se define um substantivo?',
      'Me explique o que são sinônimos?',
      'Quais são os pronomes pessoais?',
      'Como funcionam os tempos verbais?',
      'O que é uma metáfora?',
      'Quais são os antônimos?'
    ],
    [
      'Crie uma questão sobre ',
      'Como criar perguntas em inglês?',
      'Como usar "to be" no presente?',
      'Me explique present continuous ',
      'Qual é o passado simples de "go"?',
      'Qual é o antônimo de "happy"?',
      'Me fale o gerúndio de "play"'
    ],
    [
      'Crie uma questão sobre ',
      'Qual é o maior oceano do mundo?',
      'O que estuda a cartografia?',
      'O que é uma ilha?',
      'Quais são os pontos cardeais?',
      'O que é um vulcão?',
      'Qual é a capital do Canadá?'
    ],
    [
      'Crie uma questão sobre ',
      'O que foi o Renascimento?',
      'Quem foi Cleópatra?',
      'O que foi a Guerra Fria?',
      'Qual foi o objetivo das Cruzadas?',
      'Quem foi Marco Polo?',
      'Fale sobre a República da Espada'
    ],
    [
      'Crie uma questão sobre ',
      'Quem foi Sócrates?',
      'O que é anomia social?',
      'O que é o empirismo?',
      'O que é cultura de massa?',
      'Fale sobre Max Weber?',
      'Qual é a definição de ética?'
    ],
    [
      'Crie uma questão sobre ',
      'O que é o cubismo?',
      'Dê exemplos de gêneros literários',
      'Quem pintou a Mona Lisa?',
      'O que é o romantismo na literatura?',
      'Quem escreveu "A Metamorfose"?',
      'O que é o impressionismo?'
    ]
  ]

  useEffect(() => {
    setIsSmall(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if(AILoading) getAIResponse();
  }, [AILoading]);

  function getLocalStorage(key: string) {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data!);
  }

  function setLocalStorage(key: string, value: Chat[]) {
    const data = JSON.stringify(value);
    return window.localStorage.setItem(key, data);
  }

  useEffect(() => {
    setChatList(getLocalStorage("chatData") ?? []);
  }, []);

  const handleClearConversations = () => {
    if(AILoading) return;

    setChatActiveId('');
    setChatList([]);
  }

  const handleNewChat = () => {
    if(AILoading) return;

    setChatActiveId('');
    setCurrentSubject('Geral');
    closeSidebar();
  }

  const handleSearch = (): React.ReactNode => {
      return (
        searchText === '' ? 
          chatList.map(item => (
            <SidebarChatButton 
              key={item.id}
              chatItem={item}
              active={item.id === chatActiveId}
              onClick={handleSelectChat}
              onDelete={handleDeleteChat}
              onEdit={handleEditChat}
              AILoading={AILoading}
            />
          )) :
          chatList.filter(item => (item.title.toLowerCase().includes(searchText.toLowerCase()) || item.subject.toLowerCase().includes(searchText.toLowerCase()))).map(item => (
            <SidebarChatButton 
              key={item.id}
              chatItem={item}
              active={item.id === chatActiveId}
              onClick={handleSelectChat}
              onDelete={handleDeleteChat}
              onEdit={handleEditChat}
              AILoading={AILoading}
            />
          ))
      );
  }

  function convertChatList(chatId: string, curSubject: string): any {
    let currentChat = chatList.find((item) => item.id === chatId);
    let chatMessages = currentChat?.messages.map((item) => {
      // return { 
      //   author: item.author === 'me' ? 'user' : 'assistant',
      //   body: item.body
      // }
      return item.body;
    })
    if(chatMessages && chatMessages.length > 0) {
      let chatMessagesPair = [];
      for(let i=0; i<chatMessages.length / 2; i++) {
        chatMessagesPair.push({
          user: chatMessages[i*2],
          assistant: chatMessages[i*2+1]
        })
      }
      let chatAux = [];
      chatAux.push(chatMessagesPair);
      chatAux.push({ subject: curSubject });
      return chatAux;
    } else {
      return [[], { subject: curSubject }];
    }
  }

  async function sendChat(chatData: any) {
    setChatLoading(true);
    try {
      // Fazer uma solicitação POST para a API com os dados
      const response = await fetch('https://6b09-2001-12d0-2080-2800-172-26-ffff-f1dd.ngrok-free.app/loadChat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Certifique-se de definir o tipo de conteúdo correto
        },
        body: JSON.stringify(chatData), // Converter os dados para JSON
      });
  
      if (!response.ok) {
        throw new Error('Erro na solicitação à API');
      }
  
      // Processar a resposta JSON
      await response.json();

    } catch (error) {
      console.error('Erro ao enviar/obter dados da API:', error);
      throw error; // Lançar o erro novamente para que o componente que chama essa função possa lidar com ele
    }
    setChatLoading(false);
  }

  // useEffect(() => {
  //   sendChat(convertChatList());
  // }, []);

  async function getBackendResponse(dados: string) {
    try {
      // Fazer uma solicitação POST para a API com os dados
      const response = await fetch('https://6b09-2001-12d0-2080-2800-172-26-ffff-f1dd.ngrok-free.app/chat1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Certifique-se de definir o tipo de conteúdo correto
        },
        body: JSON.stringify(dados), // Converter os dados para JSON
      });
  
      if (!response.ok) {
        throw new Error('Erro na solicitação à API');
      }
  
      // Processar a resposta JSON
      const dadosDaResposta = await response.json();
    
      // Retornar os dados da resposta
      return dadosDaResposta.assistant;
    } catch (error) {
      console.error('Erro ao enviar/obter dados da API:', error);
      throw error; // Lançar o erro novamente para que o componente que chama essa função possa lidar com ele
    }
  }

  const getAIResponse = async () => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
    let arrayMessages = chatListClone[chatIndex].messages;
    let dataChat = await getBackendResponse(arrayMessages[arrayMessages.length - 1].body);

    if(chatIndex > -1) {
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'ai',
        exam: currentExam,
        body: dataChat ?? "Erro"
      });
    }
    setChatList(chatListClone);
    setLocalStorage("chatData", chatListClone);
    setIALoading(false);
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId) {
      let newChatId = uuidv4();
      sendChat(convertChatList(newChatId, currentSubject));

      setChatList([{
        id: newChatId,
        title: message,
        subject: currentSubject,
        messages: [
          { id: uuidv4(), author: 'me', exam: currentExam, body: message }
        ]
      }, ...chatList]);

      setChatActiveId(newChatId);
    } else {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(), author: 'me', exam: currentExam, body: message
      });
      setChatList(chatListClone);
    }
    
    setSearchText('');
    setIALoading(true);
  }

  const handleSelectChat = (id: string) => {
    if(AILoading) return;

    let item = chatList.find(item => item.id === id);
    if(item) {
      let chatId = item.id;
      let curSubject = item.subject;

      sendChat(convertChatList(chatId, curSubject));

      setChatActiveId(chatId);
      setCurrentSubject(curSubject);
    }
    closeSidebar();
  }

  const handleDeleteChat = (id: string) => {
    if(AILoading) return;

    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex(item => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setLocalStorage("chatData", chatListClone);
    setChatActiveId('');
    setCurrentSubject('Geral');
  }

  const handleEditChat = (id: string, newTitle: string) => {
    if(newTitle) {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === id);
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
      setLocalStorage("chatData", chatListClone);
    }
  }

  return (
    <main className="flex w-screen min-h-screen bg-intellectia-gray">
      {/* {myStudiesOpened && <MyStudies closeMyStudies={closeMyStudies} />} */}
      {/* {profileOpened && <Profile session={session} closeProfile={closeProfile} />} */}

      <Sidebar
        open={sidebarOpened}
        AILoading={AILoading}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
        onSearch={handleSearch}
        searchText={searchText}
        setSearchText={setSearchText}
        myStudiesOpened={myStudiesOpened}
        openMyStudies={openMyStudies}
      >
        {handleSearch()}
      </Sidebar>

      <section className="flex flex-col flex-1 overflow-hidden">
        <Header
          title={currentSubject}
          newChatClick={handleNewChat}
          AILoading={AILoading}
          currentSubject={currentSubject}
          exams={exams}
          currentExam={currentExam}
          isSmall={isSmall}
          setCurrentExam={setCurrentExam}
          // session={session}
          openProfile={openProfile}
          openSidebarClick={openSidebar}
        />

        <ChatArea 
          chat={chatActive} 
          loading={AILoading} 
          subjects={subjects} 
          currentSubject={currentSubject} 
          isSmall={isSmall}
          openSidebarClick={openSidebar}
          setCurrentSubject={setCurrentSubject}
        />

        <Footer
          disabled={AILoading}
          onSendMessage={handleSendMessage}
          subjects={subjects}
          currentSubject={currentSubject}
          suggestions={suggestions}
        />
      </section>
    </main>
  );
}

export default Page;