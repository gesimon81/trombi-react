import React, { useState, useMemo, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes, { object } from "prop-types";
import { UserContext } from "./AppContext";

function Modal() {
  //if  de contexte null = return null
  //else return modal

  const userContext = useContext(UserContext);
  console.log(userContext);

  if (!userContext.personSelected) return null;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={userContext.removePersonSelected}>
          &times;
        </span>
        <p>{userContext.personSelected.name}</p>
      </div>
    </div>
  );
}

export default Modal;
