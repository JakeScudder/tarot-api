import React, { Component } from "react";

class ThreeCard extends Component {
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
    let card1;
    let cardName1;
    let cardSummary1;
    let image1;
    //Card 2
    let card2;
    let cardName2;
    let cardSummary2;
    let image2;
    //Card 3
    let card3;
    let cardName3;
    let cardSummary3;
    let image3;

    // Random Num Generation
    let randomNum1 = Math.floor(Math.random() * 78);
    let randomNum2 = Math.floor(Math.random() * 78);
    if (randomNum2 === randomNum1) {
      randomNum2 = Math.floor(Math.random() * 78);
    }
    let randomNum3 = Math.floor(Math.random() * 78);
    if (randomNum3 === randomNum1 || randomNum3 === randomNum2) {
      randomNum3 = Math.floor(Math.random() * 78);
    }

    if (deck && deck[0]) {
      //Card 1
      card1 = deck[randomNum1];
      cardName1 = this.formatName(card1.name);
      cardSummary1 = card1.summary;
      console.log("card1:", card1.name);
      image1 = card1.image;
      //Card 2
      card2 = deck[randomNum2];
      cardName2 = this.formatName(card2.name);
      cardSummary2 = card2.summary;
      console.log("card2:", card2.name);
      image2 = card2.image;
      //Card 3
      card3 = deck[randomNum3];
      cardName3 = this.formatName(card3.name);
      cardSummary3 = card3.summary;
      console.log("card3:", card3.name);
      image3 = card3.image;
    }

    if (card1 !== null) {
      return (
        <div>
          <h1>You Drew</h1>
          <div className="cards-displayed">
            <img id="card-image-first" alt="Card" src={image1} />
            <img id="card-image-second" alt="Card" src={image2} />
            <img id="card-image-third" alt="Card" src={image3} />
            <h4>
              {cardName1}, {cardName2}, {cardName3}
            </h4>
          </div>
          <div className="threecard-summary">
            {/* Card 1 */}
            <h2 className="name-title">{cardName1}</h2>
            <img className="threecard-image" alt="Card" src={image1} />
            <h4 className="summary">{cardSummary1}</h4>

            <br></br>
            {/* Card 2 */}
            <h2 className="name-title">{cardName2}</h2>
            <img className="threecard-image" alt="Card" src={image2} />
            <h4 className="summary">{cardSummary2}</h4>

            {/* Card 3 */}
            <h2 className="name-title">{cardName3}</h2>
            <img className="threecard-image" alt="Card" src={image3} />
            <h4 className="summary">{cardSummary3}</h4>
          </div>
        </div>
      );
    } else {
      return <h1>Card Data Missing :(</h1>;
    }
  }
}

export default ThreeCard;
