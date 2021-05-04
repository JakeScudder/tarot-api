import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import TarotBack from "../rider-tarot-back.jpg";

class FourCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showing: false,
      num1: null,
      num2: null,
      num3: null,
      num4: null,
    };
  }

  componentDidMount() {
    setTimeout(this.hideGalaxy, 500);
    this.randomNumGeneration();
  }

  hideGalaxy = () => {
    document.getElementById("App-logo").style.display = "none";
  };

  toggle = () => {
    this.setState({
      showing: !this.state.showing,
    });
  };

  formatName = (name) => {
    return name
      .split("-")
      .map((word) => {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ");
  };

  randomNumGeneration = () => {
    let randomNum1 = Math.floor(Math.random() * 78);
    let randomNum2 = Math.floor(Math.random() * 78);
    if (randomNum2 === randomNum1) {
      randomNum2 = Math.floor(Math.random() * 78);
    }
    let randomNum3 = Math.floor(Math.random() * 78);
    if (randomNum3 === randomNum1 || randomNum3 === randomNum2) {
      randomNum3 = Math.floor(Math.random() * 78);
    }
    let randomNum4 = Math.floor(Math.random() * 78);
    if (
      randomNum4 === randomNum1 ||
      randomNum4 === randomNum2 ||
      randomNum4 === randomNum3
    ) {
      randomNum4 = Math.floor(Math.random() * 78);
    }

    this.setState({
      num1: randomNum1,
      num2: randomNum2,
      num3: randomNum3,
      num4: randomNum4,
    });
  };

  refresh = () => {
    window.location.reload();
  };

  render() {
    const { showing } = this.state;

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
    //Card 4
    let card4;
    let cardName4;
    let cardSummary4;
    let image4;

    let randomNum1 = this.state.num1;
    let randomNum2 = this.state.num2;
    let randomNum3 = this.state.num3;
    let randomNum4 = this.state.num4;

    if (deck && deck[0] && randomNum1 !== null) {
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
      //Card 4
      card4 = deck[randomNum4];
      cardName4 = this.formatName(card4.name);
      cardSummary4 = card4.summary;
      console.log("card4:", card4.name);
      image4 = card4.image;
    }

    if (card1 !== null) {
      return (
        <div id="four-card-container">
          <button className="refresh" onClick={this.refresh}>
            <h3 className="refresh-title first">Draw</h3>
            <h3 className="refresh-title">Again</h3>
          </button>
          <h1 className="you-drew">You Drew</h1>
          <button id="help-button" onClick={this.toggle}>
            ?
          </button>
          {showing ? (
            <div className="four-card-help-info">
              <h2>Over and Under</h2>
              <p>
                This four card spread contains one card that represents the
                overarching theme regarding the question or issue, followed by
                three underlying factors.
              </p>
              <p>
                Think about what is the main theme of your drawing and what are
                the smaller things that play into that.
              </p>
            </div>
          ) : null}
          <div id="overarching-card">
            <div class="four-flip-card">
              <div class="flip-card-inner four first">
                <div class="flip-card-front four">
                  <img
                    className="tarot-back four"
                    src={TarotBack}
                    alt="Avatar"
                  />
                </div>
                <div class="flip-card-back four">
                  <img className="four-card-image" alt="Card" src={image4} />
                </div>
              </div>
            </div>
            <div>
              <h2 id="overarching-title">{cardName4}</h2>
            </div>
          </div>
          <div className="cards-displayed">
            <div class="four-flip-card">
              <div class="flip-card-inner four second">
                <div class="flip-card-front four">
                  <img
                    className="tarot-back four"
                    src={TarotBack}
                    alt="Avatar"
                  />
                </div>
                <div class="flip-card-back four">
                  <img className="four-card-image" alt="Card" src={image1} />
                </div>
              </div>
            </div>
            <div class="four-flip-card">
              <div class="flip-card-inner four third">
                <div class="flip-card-front four">
                  <img
                    className="tarot-back four"
                    src={TarotBack}
                    alt="Avatar"
                  />
                </div>
                <div class="flip-card-back four">
                  <img className="four-card-image" alt="Card" src={image2} />
                </div>
              </div>
            </div>
            <div class="four-flip-card">
              <div class="flip-card-inner four fourth">
                <div class="flip-card-front four">
                  <img
                    className="tarot-back four"
                    src={TarotBack}
                    alt="Avatar"
                  />
                </div>
                <div class="flip-card-back four">
                  <img className="four-card-image" alt="Card" src={image3} />
                </div>
              </div>
            </div>
          </div>
          <div id="underarching-titles">
            <h4>
              {cardName1}, {cardName2}, {cardName3}
            </h4>
          </div>

          <div className="threecard-summary">
            {/* Card 4 */}
            <h2 className="name-title">OverArching Card:</h2>
            <h2 className="overarching-title">{cardName4}</h2>
            <img className="threecard-image" alt="Card" src={image4} />
            <h4 className="summary">{cardSummary4}</h4>
            {/* Card 1 */}
            <h2 className="name-title">Underlying Factors:</h2>
            <h2 className="underlying-title">{cardName1}</h2>
            <img className="threecard-image" alt="Card" src={image1} />
            <h4 className="summary">{cardSummary1}</h4>

            {/* Card 2 */}
            <h2 className="name-title">{cardName2}</h2>
            <img className="threecard-image" alt="Card" src={image2} />
            <h4 className="summary">{cardSummary2}</h4>

            {/* Card 3 */}
            <h2 className="name-title">{cardName3}</h2>
            <img className="threecard-image" alt="Card" src={image3} />
            <h4 className="summary">{cardSummary3}</h4>
          </div>
          <div className="go-home-div">
            <button className="go-home">
              <NavLink to="/">
                <h3 className="home-h3">Go Home</h3>
              </NavLink>
            </button>
          </div>
        </div>
      );
    } else {
      return <h1>Card Data Missing :(</h1>;
    }
  }
}

export default FourCard;
