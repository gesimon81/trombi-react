//composant fonction
//1 déclenche un appel réseau et récupère une liste d'utilisateurs
//affiche cette liste
//2 un hook custom et y mettre la logique de Fetch
//3 (tests sur le composant)

//Ressource https://jsonplaceholder.typicode.com

import { useState } from "react";
import "./App.css";
import listeUsers from "./listeUsers.json";

const useListUsers = () => {
  const [students, setStudents] = useState(listeUsers.users);
  return { students, setStudents };

  //return { listeUsers };
};

export default useListUsers;
