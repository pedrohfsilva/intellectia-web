import { Message } from "ai";

type ChatItemProps = {
  message: Message;
}

export function ChatItem({ message }: ChatItemProps) {
  return (
    <li className={`w-full flex mb-6 ${message.role === 'user' ? 'justify-end pl-6' : 'justify-start pr-6'}`}>
      <div className={`max-w-full w-auto text-sm whitespace-pre-wrap p-3 rounded-xl text-primary ${message.role === 'user' ? 'bg-green-700' : 'bg-intellectia-darkgray'}`}>
        {message.content}
      </div>
    </li>
  )
}