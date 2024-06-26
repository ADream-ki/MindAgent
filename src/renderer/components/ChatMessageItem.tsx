import React from "react";
import { MessageProps } from "../types";
import "../styles/ChatMessageItem.less"; // 确保创建了这个CSS文件来定义样式

const ChatMessageItem: React.FC<MessageProps> = ({ message }) => {
  // 根据消息类型确定样式
  const itemClass = message.type === "user" ? "user-message" : "bot-message";

  return (
    <div className={`chat-message-item ${itemClass}`}>
      {message.type === "user" && (
        // 假设你有一个头像组件或图片
        <div className="avatar">用户头像</div>
      )}
      <div className="message-text">{message.text}</div>
      {message.type === "bot" && (
        // 假设你有一个头像组件或图片
        <div className="avatar">应用头像</div>
      )}
    </div>
  );
};

export default ChatMessageItem;
