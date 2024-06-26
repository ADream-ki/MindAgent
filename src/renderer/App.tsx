import React from "react";

import "@renderer/styles/app.less";
import Sidebar from "./components/SiderBar";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <>
      <Sidebar filepath="sadfasd.json"></Sidebar>
      <ChatWindow />
    </>
  );
}
export default App;
