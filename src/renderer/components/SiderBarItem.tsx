import React, { useState } from "react";

import { SideBarItemProps } from "../types";
import "@renderer/styles/SiderBarItem.less";

const SideBarItem: React.FC<SideBarItemProps> = ({
  title,
  timestamp,
  link,
  isActive,
  onItemClick,
}) => {
  return (
    <div
      className={`sidebar-item ${isActive ? "active" : ""}`}
      onClick={onItemClick}
    >
      <span>{title}</span>
      <span>{timestamp}</span>
    </div>
  );
};

export default SideBarItem;
