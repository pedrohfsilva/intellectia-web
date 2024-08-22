import { Message } from "ai"
import { ChatItem } from "./chat-item";
import { useEffect, useRef } from "react";

type ChatAreaProps = {
  disabled: boolean;
  messages: Message[];
}

export function ChatArea({ disabled, messages }: ChatAreaProps) {

  const scrollArea = useRef<HTMLDivElement>(null);
  useEffect(() => {
    scrollArea.current?.scrollTo(0, scrollArea.current?.scrollHeight);
  }, [messages.length]);

  return (
    <section ref={scrollArea} className="flex flex-col flex-1 items-center overflow-auto px-6">
      <ul className="h-fit w-full md:max-w-3xl pt-6">
        {messages.filter((m) => m.role != 'system').map((m, index) => (
          <ChatItem key={index} message={m} />
        ))}
      </ul>
    </section>
  )
}