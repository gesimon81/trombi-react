import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    //this.handleInput = this.handleInput.bind(this); //bind to get the value defined when the handler is called
  }

  //takes the change event as argument
  //target is the field that fired the event
  handleInput = (event) => {
    const nameEvent = event.target.name;
    const newState = {};
    newState[nameEvent] = event.target.value;
    this.setState(newState);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h4>Create an Event:</h4>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <button type="submit">Create Event</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
