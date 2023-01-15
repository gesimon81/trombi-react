import { useState } from "react";
import "./App.css";
import Classe from "./Classe";
import useListUsers from "./ComponentHook";
import ModalComponent from "./Modal";
import UserForm from "./UserForm";
import React from "react";
import { Button } from '@chakra-ui/react'

//Crée un nombre aléatoire pour intégrer les images avec les utilisateurs
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Composant principal de l'application
function App() {
  const { users, setUsers } = useListUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  //Itérer sur la liste des utilisateurs pour enregistrer tous les users à présent
  function setAllPresent(arePresent) {
    setUsers((userPrev) =>
      userPrev.map((u) => ({ ...u, present: arePresent }))
    );
  }

  function afterOpenModal() { }

  function closeModal() {
    setIsOpen(false);
  }

  //Va générer un utilisateur et l'enregistrer dans le json
  function addUser(name) {
    let imageId = getRandomInt(1, 100);
    if (name === "mael le fou") imageId = 45;
    if (name === "geraud d'arabie") imageId = 10;
    if (name === "adre les deux poings") imageId = 20;
    if (name === "vincent l'animal") imageId = 15;

    setUsers((prevState) => [
      {
        name,
        id: Math.random(),
        img: `https://randomuser.me/api/portraits/${getRandomInt(1, 2) % 2 === 0 ? "men" : "women"
          }/${imageId}.jpg`,
      },
      ...prevState,
    ]);
    setIsOpen(false);
  }

  function removeUser(id) {
    setUsers((prev) => prev.filter((s) => s.id !== id));
  }

  //Non exploité
  const selectedUser =
    selectedUserId && users.find(({ id }) => id === selectedUserId);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
        <Button colorScheme='blue' onClick={openModal}>Ajouter un utilisateur</Button>
        <Button colorScheme='teal'
          disabled={users.every(u => u.present)}
          onClick={() => setAllPresent(true)}>
          Tous les utilisateurs présents
        </Button>
        <Button colorScheme='yellow'
          disabled={users.every(u => !u.present)}
          onClick={() => setAllPresent(false)}>
          Tous les utilisateurs absents
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        {selectedUser && <p>{selectedUser.name} est sélectionné</p>}
        {users.filter(({ present }) => present)?.length} utilisateurs présents
        sur {users.length}
      </div>
      <ModalComponent
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        afterOpenModal={afterOpenModal}
      >
        <UserForm addUser={addUser}></UserForm>
      </ModalComponent>
      <Classe
        users={users}
        setSelectedUserId={setSelectedUserId}
        setUsers={setUsers}
        removeUser={removeUser}
      />
    </>
  );
}

export default App;
