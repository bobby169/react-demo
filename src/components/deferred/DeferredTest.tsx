import { useDeferredValue, useState } from "react";
import SlowList from "./SlowList.js";

// useDeferredValue 可以应用于以下场景：
// 1. 用户输入：在处理实时搜索、自动完成等与用户输入相关的功能时，我们可以使用 useDeferredValue 来确保输入框在用户输入过程中保持流畅，同时在合适的时机更新相关组件。
// 2. 列表和大型数据集：当需要处理大量数据时，useDeferredValue 可以帮助我们控制渲染的优先级，从而避免阻塞用户界面。
//    例如，在分页加载数据的情况下，我们可以使用 useDeferredValue 在高优先级任务完成后再更新数据列表。

// useDeferredValue 与 debounce 区别:
// 区别就在于这一句话useDeferredValue是否延迟取决于计算机的性能，如果计算机运行不够快，导致渲染占用的时间过长，则会产生一个落后于观察值的延时值。
// 示例： https://usedeferredvalue-example.netlify.app 这个示例可以打开 chrome开发者工具“性能” -> "cpu 4倍降速"作比较

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
