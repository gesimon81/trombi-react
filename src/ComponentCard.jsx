import React from "react";
import "./App.css";
import PropTypes from "prop-types";

class ComponentCard extends React.Component {
  render() {
    return (
      <div>
        <p onClick={() => this.props.onClick({ name: this.props.name })}>
          {this.props.name}
        </p>
        <p>{this.props.present ? "Il est present" : "est non present"}</p>
        <button onClick={() => this.props.setPersonPresence(this.props.name)}>
          Change presence
        </button>
      </div>
    );
  }
}

ComponentCard.propTypes = {
  name: PropTypes.string,
  present: PropTypes.bool,
  setPersonPresence: PropTypes.func,
  onClick: PropTypes.func,
};

export default ComponentCard;
