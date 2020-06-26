import React, { Component } from "react";

class OneCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //   };
  // }

  render() {
    let deck = this.props.data;
    let randomNum = Math.floor(Math.random() * 78);
    let card;
    let cardName;
    let cardSummary;
    let image;
    if (deck && deck[0]) {
      card = deck[randomNum];
      cardName = card.name;
      cardSummary = card.summary;
      console.log("card:", card.name);
      image = card.image;
    }

    if (card !== null) {
      return (
        <div>
          <h1>You Drew</h1>
          <h2 className="name-title">{cardName}</h2>
          <h4 className="summary">{cardSummary}</h4>
          <img className="card-image" alt="Card" src={image} />
        </div>
      );
    } else {
      return <h1>Card Data Missing :(</h1>;
    }
  }
}

export default OneCard;
