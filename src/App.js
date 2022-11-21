import { useState } from "react";
import "./App.css";
import Classe from "./Classe";
import useListUsers from "./ComponentHook";
import UserForm from "./UserForm";

function App() {
  const { users, setUsers } = useListUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);

  function addUser(name) {
    setUsers((prevState) => [{ name, id: Math.random() }, ...prevState]);
  }

  function removeUser(id) {
    setUsers((prev) => prev.filter((s) => s.id !== id));

    /*const personIndex = users.findIndex((user) => user.id === id);

    removeItem(personIndex);
    const removeItem = (index) => {
      setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
    };*/
  }

  const selectedUser =
    selectedUserId && users.find(({ id }) => id === selectedUserId);
  return (
    <>
      {selectedUser && <p>{selectedUser.name}</p>}
      <UserForm addUser={addUser}></UserForm>
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
