import { useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PasswordField from "./components/PasswordField";
import { useOnlineStatus2 } from "./components/useOnlineStatus";
import { FilterList } from "./components/trans/FilterList";
import { fakeNames } from "./components/trans/fakeNames";
import "./css/test.css";

function StatusBar() {
  const isOnline = useOnlineStatus2();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <FilterList names={fakeNames} />
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
      <h1>Vite + React</h1>
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
