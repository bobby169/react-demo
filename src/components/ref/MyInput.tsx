import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  // 假设你不想暴露出整个 <input> DOM 节点，但你想要它其中两个方法：focus 和 scrollIntoView。
  // 为此，用单独额外的 ref 来指向真实的浏览器 DOM。然后使用 useImperativeHandle 来暴露一个句柄，它只返回你想要父组件去调用的方法：
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});
export default MyInput;
