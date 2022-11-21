import React from "react";
import ComponentCard from "./ComponentCard";

//utilisation de hook pour gérer les états

function Classe({ students, setStudents, setSelectedUserId }) {
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
        person={person}
        setPersonPresence={(name) => setPersonPresence(name)}
        onClick={() => {
          setSelectedUserId(person.id);
        }}
      />
    );
  });
}

export default Classe;
