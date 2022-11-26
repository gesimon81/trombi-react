import { useState } from "react";
import "./App.css";
import Classe from "./Classe";
import useListUsers from "./ComponentHook";
import ModalComponent from "./Modal";
import UserForm from "./UserForm";
import React from "react";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const { users, setUsers } = useListUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function addUser(name) {
    
    let imageId = getRandomInt(1, 100)
    if (name === "mael lhoutelier") imageId = 45 ;
    if (name === "geraud d'arabie") imageId = 10 ;
    if (name === "adre les deux poings") imageId = 20 ;

    setUsers((prevState) => [
      {
        name,
        id: Math.random(),
        img: `https://randomuser.me/api/portraits/${
          getRandomInt(1, 2) % 2 === 0 ? "men" : "women"
        }/${imageId}.jpg`,
      },
      ...prevState,
    ]);
    setIsOpen(false);
  }

  function removeUser(id) {
    setUsers((prev) => prev.filter((s) => s.id !== id));
  }

  const selectedUser =
    selectedUserId && users.find(({ id }) => id === selectedUserId);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={openModal}>Add user</button>
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
