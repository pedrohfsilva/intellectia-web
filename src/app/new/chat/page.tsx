'use client'

import { DashboardPage, DashboardPageFooter, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/page";
import { ChatArea } from "./_components/chat-area";
import { useState } from "react";
import { ChatMessageInput } from "./_components/chat-message-input";
import { useChat } from 'ai/react'
import { basePrompt } from "@/prompts/contents-prompts";
import { useSearchParams } from 'next/navigation';
import { contents } from "@/prompts/contents-prompts";
import Link from "next/link";
import IconArrowBack from "@/components/icons/IconArrowBack";

export const runtime = 'nodejs'

export default function Page() {
  const searchParams = useSearchParams();
  const contentId = searchParams.get('content');
  const contentData = contents.find((content) => content.id === contentId);

  const [disabled, setDisabled] = useState(false);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '../../api/chat',
    initialMessages: [
      {
        id: '',
        content: basePrompt + '\n\n' + contentData?.schedule,
        role: 'system'
      }
    ]
  })

  return (
    <DashboardPage className="bg-intellectia-gray">
      <DashboardPageHeader className="border-white/20 flex justify-between items-center">
        <Link href="/new" className="bg-white/20 h-8 w-8 rounded-full flex justify-center items-center">
          <IconArrowBack width={24} height={24} color="white" />
        </Link>
        <DashboardPageHeaderTitle className="text-2xl">{contentData?.topic}</DashboardPageHeaderTitle>
        <div className="w-8 h-8"></div>
      </DashboardPageHeader>
      <DashboardPageMain className="flex flex-1 overflow-hidden">
        <ChatArea disabled={disabled} messages={messages} />
      </DashboardPageMain>
      <DashboardPageFooter className="flex justify-center border-white/20">
        <ChatMessageInput disabled={disabled} input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      </DashboardPageFooter>
    </DashboardPage>
  )
}
