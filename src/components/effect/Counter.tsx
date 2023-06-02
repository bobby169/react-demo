import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // 如果您的 Effect 依赖于渲染期间创建的对象或函数，则它可能会运行得太频繁。例如，此 Effect 在每次渲染后重新连接，因为每次渲染的options对象都不同
  // const options = {
  //   // 🚩 This object is created from scratch on every re-render
  //   serverUrl: serverUrl,
  //   roomId: roomId,
  // };

  // 如果您的 Effect 依赖于渲染期间创建的对象或函数，则它可能会运行得太频繁。例如，此 Effect 在每次渲染后重新连接，因为每次渲染的createOptions函数都不同
  // function createOptions() {
  //   // 🚩 This function is created from scratch on every re-render
  //   return {
  //     serverUrl: serverUrl,
  //     roomId: roomId,
  //   };
  // }

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 由于count是反应值，因此必须在依赖项列表中指定。但是，这会导致 Effect 在每次count更改时重新清理和设置
      // setCount(count + 1); // ❌ This effect depends on the `count` state

      // 现在您传递的c => c + 1不是count + 1，您的 Effect 不再需要依赖于count。由于此修复，每次更改时都不需要再次清理和设置间隔count。
      setCount((c) => c + 1); // ✅ Pass a state updater
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅ Now count is not a dependency

  return <h1>{count}</h1>;
}
