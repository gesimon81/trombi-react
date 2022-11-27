import React from "react";
import "./App.css";

//Composant pour afficher un utilisateur
function ComponentCard({ onClick, user, setUserPresence, removeUser }) {
  return (
    //style pour avoir les éléments alignés
    <div
      style={{
        display: "flex",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid",
        width: 400,
        height: 200,
        overflow: "auto",
      }}
    >
      <div>
        <p>
          {user.name} {user.present ? "est present" : "est non present"}
        </p>
        <button onClick={() => setUserPresence(user.id)}>
          Change presence
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => removeUser(user.id)}>Delete user</button>
        <button onClick={() => onClick()}>select</button>
        <img alt="user" src={user.img}></img>
      </div>
    </div>
  );
}

export default ComponentCard;
