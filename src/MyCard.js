import React from "react";
import "./Card.css";
class MyCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="styles_card_box__2rsuO">
        <img src={this.props.src} />
        <p>
          {console.log(this.props)}
          <span>{this.props.monster.name}</span>
          <br />
          <span>{this.props.monster.email}</span>
        </p>
      </div>
    );
  }
}

export default MyCard;
