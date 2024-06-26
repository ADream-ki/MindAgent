export interface SideBarItemProps {
  title: string;
  timestamp: string;
  link: string;
  isActive: boolean;
  onItemClick: () => void;
}

export interface SideBarProps {
  filepath: string;
}

export type MessageType = "user" | "bot";

export interface Message {
  text: string;
  type: MessageType;
  status?: 'sending' | 'sent' | 'failed';
}

export interface MessageProps {
  message: Message;
}
