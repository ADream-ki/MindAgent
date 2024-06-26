import React, { useState, useEffect } from "react";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";
import { Message } from "../types";
import "../styles/ChatWindow.less";

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (message: Message) => {
    setMessages([...messages, message]);
  };
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].type === "user") {
      // 模拟自动回复
      setTimeout(() => {
        handleSendMessage({ text: "自动回复", type: "bot" });
      }, 1000);
    }
  }, [messages]);

  return (
    <div className="chat-window">
      <ChatContent messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
