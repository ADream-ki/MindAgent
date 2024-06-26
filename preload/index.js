const { ipcRenderer } = require("electron");

// 定义一个可以暴露给渲染进程的全局变量
window.electronAPI = {
  sendMessageToMain: (message) => {
    ipcRenderer.send("message-from-renderer", message);
  },
  receiveMessageFromMain: (event, message) => {
    console.log("Received message from main process:", message);
  },
};

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

// 在preload.js中定义一个函数
function getUserData() {
  // 这里可以执行一些主进程的代码
  // 例如，读取用户配置或状态
  return { username: 'John Doe', age: 30 };
}

// 导出函数，以便在renderer.js中使用
module.exports = { getUserData };