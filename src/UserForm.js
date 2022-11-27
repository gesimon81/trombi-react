import React from "react";

//Composant pour saisir les informations d'un nouvel utilisateur
function UserForm({ addUser }) {
  //takes the change event as argument
  //target is the field that fired the event
  function handleSubmit(event) {
    event.preventDefault(); //évite le Post et rechargement de la page
    const userName = event.target.first_name.value;
    addUser(userName);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="First name" name="first_name" required />
      <button type="submit">add user</button>
    </form>
  );
}

export default UserForm;
