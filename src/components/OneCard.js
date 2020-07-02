import React, { Component } from "react";

class OneCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //   };
  // }

  formatName = (name) => {
    return name
      .split("-")
      .map((word) => {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ");
  };

  render() {
    let deck = this.props.data;
    let randomNum = Math.floor(Math.random() * 78);
    let card;
    let cardName;
    let cardSummary;
    let image;
    if (deck && deck[0]) {
      card = deck[randomNum];
      cardName = this.formatName(card.name);
      cardSummary = card.summary;
      console.log("card:", card.name);
      image = card.image;
    }

    if (card !== null) {
      return (
        <div>
          <h3>You Drew</h3>
          <h2 className="name-title-one">{cardName}</h2>
          <img className="card-image" alt="Card" src={image} />
          <h4 className="summary">{cardSummary}</h4>
        </div>
      );
    } else {
      return <h1>Card Data Missing :(</h1>;
    }
  }
}

export default OneCard;
