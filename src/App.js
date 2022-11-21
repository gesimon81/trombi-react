import { useState } from "react";
import "./App.css";
import Classe from "./Classe";
import useListUsers from "./ComponentHook";
import UserForm from "./UserForm";

function App() {
  const { students, setStudents } = useListUsers();
  const [selectedUserId, setSelectedUserId] = useState(null);

  function addStudent(name) {
    setStudents((prevState) => [{ name, id: Math.random() }, ...prevState]);
  }

  function removeStudent(id) {
    setStudents((prev) => prev.filter((s) => s.id !== id));

    /*const personIndex = students.findIndex((student) => student.id === id);

    removeItem(personIndex);
    const removeItem = (index) => {
      setStudents([...students.slice(0, index), ...students.slice(index + 1)]);
    };*/
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
        removeStudent={removeStudent}
      />
    </>
  );
}

export default App;
