import React, { useState, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes, { object } from "prop-types";

export const UserContext = React.createContext();

function AppContext({ children }) {
  const [user, setUser] = useState();
  const contextValue = useMemo(
    () => ({
      personSelected: user,
      addPersonSelected: addUser,
      removePersonSelected: removeUser,
    }),
    [user]
  );

  function addUser(person) {
    setUser(person);
  }

  function removeUser() {
    setUser(undefined);
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default AppContext;
