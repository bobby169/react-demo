import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading({ children }) {
  // 所有 headings 的尺寸都一样，因为 即使你正在使用 context，但是你还没有提供它。 React 不知道从哪里获取这个 context！
  // 如果你不提供 context，React 会使用你在上一步指定的默认值

  // 这里level不用从props中获取，而是从上下文中获取
  // 读取context的值
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error("Heading 必须在 Section 内部！");
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error("未知的 level：" + level);
  }
}
