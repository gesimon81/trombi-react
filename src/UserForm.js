import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function UserForm() {
  //takes the change event as argument
  //target is the field that fired the event
  function handleInput(source) {
    console.log("clicked", document.getElementById("firstNameInput").value);
  }

  /* return (
    <div>
      <h4>Create an Event:</h4>
      <form>
        <input
          type="text"
          name="name"
          id="nameInput"
          placeholder="name"
          onChange={handleInput}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );*/

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input
        {...register("firstName")}
        id="firstNameInput"
        placeholder="First name"
      />

      <input type="submit" onClick={handleInput(this)} />
    </form>
  );
}

export default UserForm;
