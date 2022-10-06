import React, { useState } from "react";
import List from "./List";

function UseDeferredValue() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <div>useDeferredValue</div>
      <input type="text" value={input} onChange={(e) => handleChange(e)} />
      <List input={input} />
    </>
  );
}

export default UseDeferredValue;
