import React, { useRef, useEffect} from "react";
import ChatMessageItem from "./ChatMessageItem";
import { Message } from "../types";
import '../styles/ChatContent.less'

interface ChatContentProps {
  messages: Message[];
}

const ChatContent: React.FC<ChatContentProps> = ({ messages }) => {
  const chatContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div ref={chatContentRef} className="chat-content">
      {messages.map((msg, index) => (
        <ChatMessageItem key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatContent;
