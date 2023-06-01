import { useState } from "react";
import SlowList from "./SlowList.js";

export default function DeferredTest() {
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={text} />
    </>
  );
}
