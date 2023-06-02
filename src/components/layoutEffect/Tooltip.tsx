import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import TooltipContainer from "./TooltipContainer.js";

export default function Tooltip({ children, targetRect }) {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  // 阻止浏览器重新绘制之前，我们可以使用 useLayoutEffect 来测量元素的高度，然后再使用 createPortal 将其渲染到 body 中。
  // React 保证在浏览器重绘屏幕之前useLayoutEffect处理其中的代码和其中安排的任何状态更新。
  // 这使您可以渲染工具提示、测量它并再次重新渲染工具提示，而用户不会注意到第一次额外渲染。换句话说，阻止浏览器绘制
  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
    console.log("Measured tooltip height: " + height);
  }, []);

  // 不阻止浏览器重新绘制。如果你的组件需要在浏览器绘制之后才能测量，那么你可以使用 useEffect 来代替 useLayoutEffect。
  // 使用useEffect而不是useLayoutEffect. 如果您使用的是较慢的设备，您可能会注意到工具提示有时会“闪烁”并且您会在更正位置之前短暂地看到它的初始位置。
  // useEffect(() => {
  //   const { height } = ref.current.getBoundingClientRect();
  //   setTooltipHeight(height);
  // }, []);

  // useEffect 和 useLayoutEffectaqb的区别：
  // 1. useEffect 在浏览器绘制之后才会执行，而 useLayoutEffect 则是在浏览器绘制之前执行。
  // 2. useEffect 会在浏览器绘制之后执行，因此它不会阻止浏览器绘制，而 useLayoutEffect 则会阻止浏览器绘制。
  // 3. useEffect 异步执行（不会阻塞渲染），而 useLayoutEffect 则是同步执行（会阻塞渲染，不要大量应用）。
  // 4. 简述react渲染：同步宏任务->数据变更->useLayoutEffect->计算dom->渲染dom->useEffect
  // 5. 都是用于处理副作用，​这些副作用包括改变DOM,设置订阅，操作定时器等看起来很像，但是在执行效果上仍然有些差异React官方也给出建议： 如果不能掌握useLayoutEffect, 不妨直接用useEffect在使用useEffect时遇到问题，再尝试使用useLayoutEffect

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}
