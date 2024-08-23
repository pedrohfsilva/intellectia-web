import Image from "next/image";
import Link from "next/link";

type BoardProps = {
  id: string;
  title: string;
  description: string;
  imagePath: string;
}

export function Board({ id, title, description, imagePath }: BoardProps) {
  return (
    <div className="rounded-xl h-72 overflow-hidden bg-intellectia-darkgray p-0 text-left hover:shadow-lg">
      <Link href={`/new/chat?content=${id}`} className="w-full h-full">
        <div className="h-1/2 w-full relative">
          <Image
            src={imagePath}
            fill
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />
          <div className=" absolute w-full h-full z-10 left-0 top-0 bg-green-600/50"></div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1 className="text-lg text-primary truncate overflow-hidden">{title}</h1>
          <p className="text-sm text-primary/80 truncate overflow-hidden whitespace-pre-wrap line-clamp-3">{description}</p>
        </div>
      </Link>
    </div>
  )
}