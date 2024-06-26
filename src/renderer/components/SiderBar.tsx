import React, { useState, useEffect } from "react";

import "../styles/SiderBar.less"; // 引入侧边栏样式
import SideBarItem from "./SiderBarItem";
import { SideBarProps } from "@renderer/types";
import { Button } from "antd";

const Sidebar: React.FC<SideBarProps> = ({ filepath }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isCollapsed, setIsCollapsed] = useState(false); // 添加状态来控制侧边栏的展开和折叠
  const [items, setItems] = useState<{ title: string; timestamp: string }[]>([
    { title: "string", timestamp: "string" },
    { title: "string", timestamp: "string" },
  ]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="SiderHeader">
        <p>历史记录</p>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
      </div>
      <div className="sidebar-items">
        {items.map((item, index) => (
          <SideBarItem
            key={index}
            title={item.title}
            link="dasfasfewfaew"
            timestamp={item.timestamp}
            isActive={index === activeIndex}
            onItemClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      <div className="SiderFooter">
        <Button className="Setting">设置</Button>
      </div>
    </div>
  );
};

export default Sidebar;
