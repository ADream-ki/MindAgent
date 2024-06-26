from fastapi import FastAPI
from fastapi.responses import JSONResponse
from model import *
import os

HOST = "127.0.0.1"
PORT = 82543

app = FastAPI()

@app.get("/hello/{name}")
def read_root(name: str):
    return f"hello {name}"

@app.post("/api/process")
async def process_data(data: dict):
    # 处理 Electron 发送的数据
    text_content = data.get('textContent', '')
    file_path = data.get('filePath', '')

    # 这里执行你的逻辑，比如读取文件内容、处理文本等
    # ...

    #generate_response()
    # 返回结果
    return JSONResponse({ "message": "Data processed successfully" })

if __name__ == "__main__":
    import asyncio
    import uvicorn

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(uvicorn.run(app, host=HOST, port=PORT))