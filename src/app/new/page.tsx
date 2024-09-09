import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/page";
import { Board } from "./_components/board";
import { basePrompt, contents } from "@/prompts/contents-prompts";
import Link from "next/link";
import IconArrowBack from "@/components/icons/IconArrowBack";
import { ChatSubjectArea } from "./_components/chat-subject-area";
import IconTrash from "@/components/icons/IconTrash";

export default function Page() {
  return (
    <DashboardPage className="bg-intellectia-gray">
      <DashboardPageHeader className="border-white/20 flex justify-between items-center">
        <Link href="/" className="bg-white/20 h-8 w-8 rounded-full flex justify-center items-center">
          <IconArrowBack width={24} height={24} color="white" />
        </Link>
        <DashboardPageHeaderTitle className="text-2xl">Estudo dirigido</DashboardPageHeaderTitle>
        <div className="w-8 h-8"></div>
      </DashboardPageHeader>
      <DashboardPageMain className="bg-intellectia-gray flex justify-center">
        <div className="md:max-w-6xl">
          <ChatSubjectArea subject="Biologia" bgColor={"bg-green-200/30"} />
          <ChatSubjectArea subject="Geografia" bgColor={"bg-green-200/30"} />
          <ChatSubjectArea subject="Filosofia e Sociologia" bgColor={"bg-green-200/30"} />
          <ChatSubjectArea subject="Português" bgColor={"bg-red-200/30"} />
          <ChatSubjectArea subject="Inglês" bgColor={"bg-green-200/30"} />
          <ChatSubjectArea subject="História" bgColor={"bg-green-200/30"} />
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}