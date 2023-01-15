import React from "react";
import "./App.css";
import {Button, Card, CardBody} from '@chakra-ui/react'

//Composant pour afficher un utilisateur
function ComponentCard({ onClick, user, setUserPresence, removeUser }) {
  return (
    //style pour avoir les éléments alignés
    <Card>
      <CardBody>
        <div
        style={{
          display: "flex",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid",
          width: 420,
          height: "wrap-content",
          overflow: "auto",
          padding: 10,
        }}
      >
        <div>
          <p>
            {user.name} {user.present ? "est present" : "est non present"}
          </p>
          <Button colorScheme='teal' onClick={() => setUserPresence(user.id)}>
            Changer la présence
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button colorScheme='red' onClick={() => removeUser(user.id)}>Supprimer un utilisateur</Button>
          <Button colorScheme='gray' onClick={() => onClick()}>Sélectionner</Button>
          <img alt="user" src={user.img}></img>
        </div>
      </div>
      </CardBody>
    </Card>
    
  );
}

export default ComponentCard;
