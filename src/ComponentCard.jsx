import React from "react";
import "./App.css";
import {Button} from '@chakra-ui/react'

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
        height: 250,
        overflow: "auto",
        padding: 10,
      }}
    >
      <div>
        <p>
          {user.name} {user.present ? "est present" : "est non present"}
        </p>
        <Button colorScheme='teal' onClick={() => setUserPresence(user.id)}>
          Change presence
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button colorScheme='red' onClick={() => removeUser(user.id)}>Delete user</Button>
        <Button colorScheme='gray' onClick={() => onClick()}>select</Button>
        <img alt="user" src={user.img}></img>
      </div>
    </div>
  );
}

export default ComponentCard;
