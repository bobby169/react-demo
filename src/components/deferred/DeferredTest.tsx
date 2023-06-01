import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList.js";

// useDeferredValue 可以应用于以下场景：
// 1. 用户输入：在处理实时搜索、自动完成等与用户输入相关的功能时，我们可以使用 useDeferredValue 来确保输入框在用户输入过程中保持流畅，同时在合适的时机更新相关组件。
// 2. 列表和大型数据集：当需要处理大量数据时，useDeferredValue 可以帮助我们控制渲染的优先级，从而避免阻塞用户界面。
//    例如，在分页加载数据的情况下，我们可以使用 useDeferredValue 在高优先级任务完成后再更新数据列表。

export default function DeferredTest() {
  const [text, setText] = useState("");
  const defrredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={defrredText} />
    </>
  );
}
