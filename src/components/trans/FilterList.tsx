import React, { useState, useTransition } from "react";

// useTransition 非常适用于以下场景：
// 1. 数据加载：在数据加载过程中，我们可以使用 useTransition 在更新 UI 之前显示一个加载指示器，从而优化用户体验。
// 2. 动画和过渡效果：在组件状态更新时，useTransition 可以让我们更好地控制动画和过渡效果的触发时机。

export function FilterList({ names }) {
  const [query, setQuery] = useState("");

  const [highlight, setHighlight] = useState("");

  const [isPending, startTransition] = useTransition();

  // const changeHandler = ({ target: { value } }) => setQuery(value);
  const changeHandler = ({ target: { value } }) => {
    setQuery(value);
    // 大量的UI更新作为过渡(transitions)
    // v18默认不会开启并发更新，只有startTransition,才开启并发concurrent模式，时间切片
    startTransition(() => {
      // 本次更新是并发更新
      setHighlight(value);
    });
  };

  return (
    <div>
      <input onChange={changeHandler} value={query} type="text" />
      {isPending
        ? "pending"
        : names.map((name, i) => (
            <ListItem key={i} name={name} highlight={highlight} />
          ))}
    </div>
  );
}

function ListItem({ name, highlight }) {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) {
    return <div>{name}</div>;
  }
  return (
    <div>
      {name.slice(0, index)}
      <span className="highlight">
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
}
