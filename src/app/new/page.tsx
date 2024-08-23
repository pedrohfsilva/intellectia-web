import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/page";
import { Board } from "./_components/board";
import { basePrompt, contents } from "@/prompts/contents-prompts";
import Link from "next/link";
import IconArrowBack from "@/components/icons/IconArrowBack";
import { ChatSubjectArea } from "./_components/chat-subject-area";

export default function Page() {
  return (
    <DashboardPage className="bg-intellectia-gray">
      <DashboardPageHeader className="border-white/20 flex justify-between items-center">
        <Link href="/" className="bg-white/20 h-8 w-8 rounded-full flex justify-center items-center">
          <IconArrowBack width={24} height={24} color="white" />
        </Link>
        <DashboardPageHeaderTitle className="text-2xl">Estudo dirigido</DashboardPageHeaderTitle>
        <div></div>
      </DashboardPageHeader>
      <DashboardPageMain className="bg-intellectia-gray">
        <ChatSubjectArea subject="Biologia" />
        <ChatSubjectArea subject="Biologia" />
      </DashboardPageMain>
    </DashboardPage>
  );
}