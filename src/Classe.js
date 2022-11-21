import React, { useContext } from "react";
import ComponentCard from "./ComponentCard";
import useListUsers from "./ComponentHook";
import { UserContext } from "./AppContext";

//utilisation de hook pour gérer les états

function Classe() {
  const { students, setStudents } = useListUsers(); //ne pas utiliser l'état mis à jour students sinon boucle infinie
  const userContext = useContext(UserContext);
  const setPersonPresence = (nameParam) => {
    const newStudents = students.map((student) => {
      if (student.name === nameParam) {
        return { ...student, present: !student.present };
      }

      return student;
    });

    setStudents(newStudents);
  };

  //Affichage
  return students.map((person) => {
    return (
      <ComponentCard
        key={person.id}
        name={person.name}
        present={person.present}
        setPersonPresence={(name) => setPersonPresence(name)}
        onClick={(p) => userContext.addPersonSelected(p)}
      />
    );
  });
}

export default Classe;
