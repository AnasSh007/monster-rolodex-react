import "./Card.css";
import React from "react";
import { Tilt } from "react-tilt";
class Card2 extends React.Component {
  constructor(props) {
    super(props);
  }

  // this.state.monsters = []
  render() {
    const defaultOptions = {
      reverse: false,
      max: 35,
      perspective: 1000,
      scale: 1,
      speed: 1000,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    };
    return (
      <Tilt options={defaultOptions}>
        <div className="styles_card_box__2rsuO">
          <img
            src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
          />
          <h2>{this.props.monster.name}</h2>
          <p>{this.props.monster.email}</p>
          <br />
        </div>
      </Tilt>
    );
  }
}

export default Card2;
