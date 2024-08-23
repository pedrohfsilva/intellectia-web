import { contents } from "@/prompts/contents-prompts";
import { Board } from "./board";

type ChatSubjectAreaProps = {
  subject: String;
}

export function ChatSubjectArea({ subject }: ChatSubjectAreaProps) {
  return (
    <div className="w-full p-6">
    <h2 className="text-2xl mb-6">{subject}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 h-auto">
      {contents.filter((content) => content.subject === subject).map((content) => {
        return (
          <Board id={content.id} title={content.topic} description={content.description} imagePath={`/biologia/${content.id}.png`} />
        )
      })}
    </div>
  </div>
  )
}