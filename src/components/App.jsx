import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState("");
  function inputEvent(event) {
    setName(event.target.value);
  }
  function buttonEvent(event) {
    setSubmit(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submit} </h1>
      <form onSubmit={buttonEvent}>
        <input
          onChange={inputEvent}
          value={name}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit" onClick={buttonEvent}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
