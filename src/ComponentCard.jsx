import React from "react";
import "./App.css";

function ComponentCard({ onClick, user, setUserPresence, removeUser }) {
  return (
    <div>
      <p onClick={() => onClick({ name: this.props.name })}>{user.name}</p>
      <p>{user.present ? "Il est present" : "est non present"}</p>
      <button onClick={() => setUserPresence(user.name)}>
        Change presence
      </button>
      <button onClick={() => removeUser(user.id)}>Delete user</button>
      <button onClick={() => onClick()}>select</button>
    </div>
  );
}

export default ComponentCard;
