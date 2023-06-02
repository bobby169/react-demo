import { useState, useEffect } from "react";
import { createConnection } from "./Chat";
import { useChatRoom } from "./UseChatRoom";
import Counter from "./Counter";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");
  const [message, setMessage] = useState("");
  // useChatRoom({ serverUrl, roomId });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
    // 如果您根本不传递任何依赖项数组(不传第二个参数)，您的 Effect 将在您的组件的每次渲染（和重新渲染）之后运行。
  }, [roomId, serverUrl]); // 1. 如果这里没有依赖项，输入message渲染都会创建一个新的连接 2. 如果是空数组，只会创建一个连接，但是serverUrl和roomId不会更新

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
      <label>
        Your message:{" "}
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
    </>
  );
}

export default function ChatEffect() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  return (
    <>
      <Counter />
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? "Close chat" : "Open chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}
