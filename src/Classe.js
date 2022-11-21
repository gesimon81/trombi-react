import React from "react";
import ComponentCard from "./ComponentCard";

//utilisation de hook pour gérer les états

function Classe({ users, setUsers, setSelectedUserId, removeUser }) {
  const setUserPresence = (nameParam) => {
    const newUsers = users.map((user) => {
      if (user.name === nameParam) {
        return { ...user, present: !user.present };
      }

      return user;
    });

    setUsers(newUsers);
  };

  //Affichage
  return users.map((user) => {
    return (
      <ComponentCard
        key={user.id}
        user={user}
        setUserPresence={(name) => setUserPresence(name)}
        onClick={() => {
          setSelectedUserId(user.id);
        }}
        removeUser={() => removeUser(user.id)}
      />
    );
  });
}

export default Classe;
