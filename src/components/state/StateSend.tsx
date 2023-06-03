import { useState } from "react";

export default function StateSend() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  // 当你按下 “send” 时，setIsSent(true) 会通知 React 重新渲染 UI：
  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  // ...
}
