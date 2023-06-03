import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children }) {
  const level = useContext(LevelContext);

  // Context 的工作方式可能会让你想起 CSS 属性继承。在 CSS 中，你可以为一个 <div> 手动指定 color: blue，
  // 并且其中的任何 DOM 节点，无论多深，都会继承那个颜色，除非中间的其他 DOM 节点用 color: green 来覆盖它。
  // 类似地，在 React 中，覆盖来自上层的某些 context 的唯一方法是将子组件包裹到一个提供不同值的 context provider 中。

  // 如果在 <Section> 组件中的任何子组件请求 LevelContext，给他们这个 level。”组件会使用 UI 树中在它上层最近的那个 <LevelContext.Provider> 传递过来的值
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
