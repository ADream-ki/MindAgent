import React, { useState } from "react";
import { Input, Button } from "antd";
import { Message } from "../types";
import "../styles/ChatInput.less";

interface ChatInputProps {
  onSendMessage: (message: Message) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      onSendMessage({ text: inputValue, type: "user" });
      setInputValue("");
    }
  };

  return (
    <div className="chat-input">
      <div>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSend}
        />
        <Button type="primary" onClick={handleSend}>
          发送
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
