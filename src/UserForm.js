import React from "react";

function UserForm({ addStudent }) {
  //takes the change event as argument
  //target is the field that fired the event
  function handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.first_name.value;
    addStudent(userName);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="First name" name="first_name" />
      <button type="submit">add user</button>
    </form>
  );
}

export default UserForm;
