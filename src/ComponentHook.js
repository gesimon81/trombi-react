//composant fonction
//1 déclenche un appel réseau et récupère une liste d'utilisateurs
//affiche cette liste
//2 un hook custom et y mettre la logique de Fetch
//3 (tests sur le composant)

//Ressource https://jsonplaceholder.typicode.com

import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
import listeUsers from "./listeUsers.json";

const useListUsers = () => {
  const [users, setUsers] = useLocalStorage(
    "trombi_users_geraudapp",
    listeUsers.users
  );
  return { users, setUsers };

  //return { listeUsers };
};

export default useListUsers;
