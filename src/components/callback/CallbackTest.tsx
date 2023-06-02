import { memo, useCallback, useState } from "react";

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
