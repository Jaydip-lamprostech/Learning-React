import React, { useDebugValue, useState } from "react";

function UseDebugValue() {
  const [firstName, setFirstName] = useState("Jaydip");
  const [lastName, setLastName] = useState("Patel");

  useDebugValue(firstName);

  return (
    <>
      <div>useDebugValue</div>
      <label>FirstName :- </label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label>LastName :- </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
}

export default UseDebugValue;
