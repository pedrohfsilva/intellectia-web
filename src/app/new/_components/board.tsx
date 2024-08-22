import Link from "next/link";

type BoardProps = {
  id: string;
  title: string;
  description: string;
}

export function Board({ id, title, description }: BoardProps) {
  return (
    <div className="rounded-xl h-72 overflow-hidden bg-intellectia-darkgray p-0 text-left hover:shadow-lg">
      <Link href={`/new/chat?content=${id}`} className="w-full h-full">
        <div className="h-1/2 w-full bg-green-300"></div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="text-lg text-primary truncate overflow-hidden">{title}</h1>
          <p className="text-sm text-primary/80 truncate overflow-hidden whitespace-pre-wrap line-clamp-3">{description}</p>
        </div>
      </Link>
    </div>
  )
}