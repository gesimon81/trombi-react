import React from "react";
import "./App.css";

function ComponentCard({ onClick, person, setPersonPresence }) {
  return (
    <div>
      <p onClick={() => onClick({ name: this.props.name })}>{person.name}</p>
      <p>{person.present ? "Il est present" : "est non present"}</p>
      <button onClick={() => setPersonPresence(person.name)}>
        Change presence
      </button>
      <button onClick={() => onClick()}>select</button>
    </div>
  );
}

export default ComponentCard;
