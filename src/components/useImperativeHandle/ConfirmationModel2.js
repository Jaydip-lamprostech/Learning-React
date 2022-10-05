import React, { useImperativeHandle, useRef } from "react";
import "./confirmationmodel2.css";

function ConfirmationModel2({ isOpen, onClose }, ref) {
  const closeRef = useRef();
  const noRef = useRef();
  const yesRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        focusCloseRef: () => closeRef.current.focus(),
        focusYesRef: () => yesRef.current.focus(),
        focusNoRef: () => noRef.current.focus(),
      };
    },
    []
  );
  if (!isOpen) return null;
  return (
    <>
      <h1>Title</h1>
      <button className="close-btn" onClick={onClose} ref={closeRef}>
        X
      </button>
      <br />
      <div>Do you confirm ?</div>
      <button className="yes-btn" ref={yesRef}>
        Yes
      </button>
      <button className="no-btn" ref={noRef}>
        No
      </button>
    </>
  );
}

export default React.forwardRef(ConfirmationModel2);
