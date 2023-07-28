import React from "react";
import "./InputStyles.css";
class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input
          className="inputStyles"
          type="text"
          placeholder="Search Here"
          onChange={(e) => {
            this.props.searchTextChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
