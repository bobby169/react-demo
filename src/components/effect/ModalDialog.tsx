import { useEffect, useRef } from "react";

export default function ModalDialog({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      // 如果isOpen为false，会清理旧的 props 和 state 运行，这里就会执行
      dialog.close();
    };
  }, [isOpen]);

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
  return <dialog ref={ref}>{children}</dialog>;
}
