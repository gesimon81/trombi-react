import React from "react";
import {Button, Input} from '@chakra-ui/react'

//Composant pour saisir les informations d'un nouvel utilisateur
function UserForm({ addUser }) {
  //takes the change event as argument
  //target is the field that fired the event
  function handleSubmit(event) {
    event.preventDefault(); //évite le Post et rechargement de la page
    const userName = event.target.nameInput.value;
    addUser(userName);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nom et prénom" name="nameInput" required />
      <Button colorScheme='blue' type="submit">Ajouter un utilisateur</Button>
    </form>
  );
}

export default UserForm;
