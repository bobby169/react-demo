import { useEffect, useLayoutEffect, useState } from "react";

// useEffect 的回调函数是【异步宏任务】，在下一轮事件循环才会执行。根据 JS 线程与 GUI 渲染线程互斥原则，
// 在 JS 中页面的渲染线程需要当前事件循环的宏任务与微任务都执行完，才会执行渲染线程，渲染页面后，退出渲染线程，控制权交给 JS 线程，再执行下一轮事件循环。
// 1. 好处：这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因为绝大多数操作不应阻塞浏览器对屏幕的渲染更新。
// 2. 坏处：产生二次渲染问题，第一次渲染的是旧的状态，接着下一个事件循环中，执行改变状态的函数，组件又携带新的状态渲染，在视觉上，就是二次渲染。
// 这个示例中，会显看到0，再显示2，这就是二次渲染问题。（chrome开发者工具，-->性能-->CPU 6倍降速 能看到非常明显的效果）
export function EffectTest() {
  const [a, setA] = useState(0);
  useEffect(() => {
    setA(2);
    console.log("useEffect 内部", a);
  });

  return <div>{(console.log("渲染 JSX", a), a)} 哈哈</div>;
}

// 而 useLayoutEffect 与 componentDidMount、componentDidUpdate 生命周期钩子是【异步微任务】，在渲染线程被调用之前就执行。
// 这意味着回调内部执行完才会更新渲染页面，没有二次渲染问题。
// 1. 好处：没有二次渲染问题，页面视觉行为一致
// 2. 坏处：在回调内部有一些运行耗时很长的代码或者循环时，页面因为需要等 JS 执行完之后才会交给渲染线程绘制页面，等待时期就是白屏效果，即阻塞了渲染。
// 这个示例，浏览器直接显示2，不会再显示0
export function EffectLayoutTest() {
  const [a, setA] = useState(0);
  useLayoutEffect(() => {
    setA(2);
    console.log("useEffect 内部", a);
  });

  return <div>{(console.log("渲染 JSX", a), a)} 哈哈</div>;
}
