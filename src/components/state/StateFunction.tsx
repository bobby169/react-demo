import { useState } from "react";

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}

export default function StateFunction() {
  // 此示例传递初始值设定项函数，因此该函数仅在初始化期间运行。当组件重新呈现时（例如，当您键入输入时），它不会运行createInitialTodos
  const [todos, setTodos] = useState(createInitialTodos);

  // 此示例不传递初始值设定项函数，因此该函数在每次呈现时运行，例如在输入中键入时。这意味着每次呈现时都会重新生成初始值
  // const [todos, setTodos] = useState(createInitialTodos()); // 不要这样写，会导致每次初始化都会重新生成
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}
