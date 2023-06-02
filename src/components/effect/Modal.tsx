import { useState } from "react";
import ModalDialog from "./ModalDialog";

export default function Modal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>Open dialog</button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
    </>
  );
}
