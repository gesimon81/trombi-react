import { useState } from "react";
import "./App.css";
import Classe from "./Classe";
import useListUsers from "./ComponentHook";
import UserForm from "./UserForm";

function App() {
  const { students, setStudents } = useListUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);

  function addStudent(name) {
    setStudents((prev) => [{ name, id: Math.random() }, ...prev]);
  }

  function removeStudent(id) {
    //todo
  }
  
  const selectedUser =
    selectedUserId && students.find(({ id }) => id === selectedUserId);
  return (
    <>
      {selectedUser && <p>{selectedUser.name}</p>}
      <UserForm addStudent={addStudent}></UserForm>
      <Classe
        students={students}
        setSelectedUserId={setSelectedUserId}
        setStudents={setStudents}
      />
    </>
  );
}

export default App;
