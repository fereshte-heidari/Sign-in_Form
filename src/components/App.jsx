import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState("");
  function inputEvent(event) {
    setName(event.target.value);
  }
  function buttonEvent() {
    setSubmit(name);
  }

  return (
    <div className="container">
      <h1>Hello {submit} </h1>
      <input
        onChange={inputEvent}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={buttonEvent}>Submit</button>
    </div>
  );
}

export default App;
