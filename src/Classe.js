import React from "react";
import ComponentCard from "./ComponentCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";

//utilisation de hook pour gérer les états

//Regroupe les utilisateurs
function Classe({ users, setUsers, setSelectedUserId, removeUser }) {
  const [animationParent] = useAutoAnimate();

  //Définit l'état d'un utilisateur sur présent
  const setUserPresence = (idParam) => {
    const newUsers = users.map((user) => {
      if (user.id === idParam) {
        return { ...user, present: !user.present };
      }

      return user;
    });

    setUsers(newUsers);
  };

  return (
    //Affichage avec animation
    <div
      ref={animationParent}
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 5,
        height: "100%",
        padding: 5,
      }}
    >
      {users.map((user) => {
        return (
          <ComponentCard
            key={user.id}
            user={user}
            setUserPresence={(id) => setUserPresence(id)}
            onClick={() => {
              setSelectedUserId(user.id);
            }}
            removeUser={() => removeUser(user.id)}
          />
        );
      })}
    </div>
  );
}

export default Classe;
