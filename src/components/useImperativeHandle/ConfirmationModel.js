import React, { useRef, useState } from "react";
import ConfirmationModel2 from "./ConfirmationModel2";

function ConfirmationModel() {
  const modelRef = useRef();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modelRef.current.focusCloseRef()}>
        Focus close
      </button>
      <button onClick={() => modelRef.current.focusYesRef()}>Focus Yes</button>
      <button onClick={() => modelRef.current.focusNoRef()}>Focus No</button>
      <ConfirmationModel2
        isOpen={open}
        ref={modelRef}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default React.forwardRef(ConfirmationModel);
