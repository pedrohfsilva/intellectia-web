import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/page";
import { Board } from "./_components/board";
import { basePrompt, contents } from "@/prompts/contents-prompts";
import Link from "next/link";
import IconArrowBack from "@/components/icons/IconArrowBack";

export default function Page() {
  return (
    <DashboardPage className="bg-intellectia-gray">
      <DashboardPageHeader className="border-white/20 flex justify-between items-center">
        <Link href="/" className="bg-white/20 h-8 w-8 rounded-full flex justify-center items-center">
          <IconArrowBack width={24} height={24} color="white" />
        </Link>
        <DashboardPageHeaderTitle className="">Estudo dirigido</DashboardPageHeaderTitle>
        <div></div>
      </DashboardPageHeader>
      <DashboardPageMain className="bg-intellectia-gray">
        <div className="p-6 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 h-auto">
          {contents.map((content) => {
            return (
              <Board id={content.id} title={content.topic} description={content.description} />
            )
          })}
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}