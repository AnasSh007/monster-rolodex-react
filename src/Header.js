import React from "react";
import Input from "./Input";
import "./Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <span>Monster Rolodex</span>
        <Input searchTextChange={this.props.searchTextChange} />
      </div>
    );
  }
}

export default Header;
