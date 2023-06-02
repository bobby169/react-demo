import { memo, useCallback, useState } from "react";

// useCallback useMemo memo 的区别(简洁)

// 1. useCallback优化函数内部的函数,固定函数地址,下次引用的时候不重新创建函数

// 2. useMemo 优化计算复杂函数,useMemo 固定函数返回值

// 3. memo优化组件,防止跟着父组件重新渲染

const CallbackTest = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  // const clickBtn = () => {
  //   setNum(num + 1);
  // };
  // const clickBtn1 = () => {
  //   setNum1(num1 + 1);
  // };

  const clickBtn1 = useCallback(() => {
    setNum1(num1 + 1);
  }, [num1]);
  const clickBtn = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  return (
    <div>
      <div>{num}</div>
      <button onClick={clickBtn}>+1</button>
      <Child call={clickBtn1} />
    </div>
  );
};

// const Child = () => {
//   // 会重新渲染
//   console.log("child load");
//   return <button>child text</button>;
// };

// const Child = memo(() => {
//   // 不会重新渲染
//   console.log("child load");
//   return <button>child text</button>;
// });

const Child = memo((props: any) => {
  // memo失效 点击Button Child又重复渲染
  // 父组件用useCallback包裹了函数不会重新渲染
  console.log("child load");
  return <button onClick={props.call}>child text</button>;
});

export default CallbackTest;
