import { useEffect, useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PasswordField from "./components/PasswordField";
import { useOnlineStatus2 } from "./components/useOnlineStatus";
import { FilterList } from "./components/trans/FilterList";
import { fakeNames } from "./components/trans/fakeNames";
import "./css/test.css";
import DeferredTest from "./components/deferred/DeferredTest";
import MyInputIndex from "./components/ref/MyInputIndex";
import TooltipIndex from "./components/layoutEffect/TooltipIndex";
import CallbackTest from "./components/callback/CallbackTest";
import ChatEffect from "./components/effect/ChatEffect";
import DargEffect from "./components/effect/DargEffect";
import Modal from "./components/effect/Modal";
import { flushSync } from "react-dom";
import StateObject from "./components/state/StateObject";
import StateDeepObject from "./components/state/StateDeepObject";
import TodoIndex from "./components/state/todo/TodoIndex";
import StateImmer from "./components/state/StateImmer";
import StateFunction from "./components/state/StateFunction";
import StateReset from "./components/state/StateReset";
import StateSend from "./components/state/StateSend";
import HeadIndex from "./components/context/head/HeadIndex";
import ContextImageIndex from "./components/context/image/ContextImageIndex";

function StatusBar() {
  const isOnline = useOnlineStatus2();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    // 下面合起来只能+5
    // setCount(count + 5);
    // setCount(count + 5);

    // 下 面合起来可以+10
    // setCount((count) => count + 5); // 将作为挂起状态接收并作为下一个状态返回
    // setCount((count) => count + 5);

    // 如果需要使用 next 状态，可以在将其传递给函数之前将其保存在变量中
    const nextCount = count + 5;
    setCount(nextCount);
    console.log(count, "still old"); // Still "Taylor"!
    console.log(nextCount, "new"); // "Thomas"
  }
  setTimeout(() => {
    flushSync(() => {
      console.info(333);
    });
  }, 1000);
  return (
    <>
      <div>
        <ContextImageIndex></ContextImageIndex>
        <HeadIndex></HeadIndex>
        <StateSend></StateSend>
        <StateReset></StateReset>
        <StateFunction></StateFunction>
        <StateImmer></StateImmer>
        <TodoIndex></TodoIndex>
        <StateDeepObject></StateDeepObject>
        <StateObject></StateObject>
        <Modal></Modal>
        {/* <DargEffect></DargEffect> */}
        <ChatEffect></ChatEffect>
        <CallbackTest></CallbackTest>
        <TooltipIndex></TooltipIndex>
        <MyInputIndex />
        {/* <DeferredTest></DeferredTest> */}
        {/* <FilterList names={fakeNames} /> */}
        <StatusBar />
        <h2>输入密码</h2>
        <PasswordField />
        <h2>验证密码</h2>
        <PasswordField />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 onClick={handleClick}>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
