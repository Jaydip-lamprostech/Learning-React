import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function UseLayoutEffect() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const popup = useRef();
  const popup2 = useRef();

  const button = useRef();

  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 80}px`;
  }, [show]);

  useLayoutEffect(() => {
    if (popup2.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup2.current.style.top = `${bottom + 100}px`;
  }, [show2]);

  return (
    <>
      <div>UseLayoutEffect</div>
      <h2>Using useEffect</h2>
      <button onClick={() => setShow((prev) => !prev)}>Open popup</button>

      <br />
      <h2>Using useLayoutEffect</h2>
      <button onClick={() => setShow2((prev) => !prev)} ref={button}>
        Open popup
      </button>
      {show ? (
        <>
          <div style={{ position: "absolute" }} ref={popup}>
            This is a popup
          </div>
        </>
      ) : null}
      {show2 ? (
        <>
          <div style={{ position: "absolute" }} ref={popup2}>
            This is a popup
          </div>
        </>
      ) : null}
    </>
  );
}

export default UseLayoutEffect;
