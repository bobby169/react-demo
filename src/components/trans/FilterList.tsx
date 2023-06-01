import React, { useState, useTransition } from "react";

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
