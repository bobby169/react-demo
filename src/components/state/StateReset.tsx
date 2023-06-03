import { useState } from "react";

export default function StateReset() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  // 你可能在 渲染列表 时见到过 key。但 key 不只可以用于列表！
  // 你可以使用 key 来让 React 区分任何组件。默认情况下，React 使用父组件内部的顺序（“第一个计数器”、“第二个计数器”）来区分组件。
  // 但是 key 可以让你告诉 React 这不仅仅是 第一个 或者 第二个 计数器，而且还是一个特定的计数器——例如，Taylor 的 计数器。
  // 这样无论它出现在树的任何位置， React 都会知道它是 Taylor 的 计数器

  // 指定一个 key 能够让 React 将 key 本身而非它们在父组件中的顺序作为位置的一部分。
  // 这就是为什么尽管你用 JSX 将组件渲染在相同位置，但在 React 看来它们是两个不同的计数器。
  // 因此它们永远都不会共享 state。每当一个计数器出现在屏幕上时，它的 state 会被创建出来。
  // 每当它被移除时，它的 state 就会被销毁。在它们之间切换会一次又一次地使它们的 state 重置。

  // 您可以通过向组件传递不同的key来重置组件的状态
  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState("Taylor");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}
