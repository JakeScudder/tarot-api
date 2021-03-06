import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import TarotBack from "../rider-tarot-back.jpg";

class OneCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showing: false,
      num1: null,
    };
  }

  componentDidMount() {
    setTimeout(this.hideGalaxy, 500);
    this.randomNumGeneration();
    this.setState({
      loading: false,
    });
  }

  hideGalaxy = () => {
    document.getElementById("App-logo").style.display = "none";
  };

  formatName = (name) => {
    return name
      .split("-")
      .map((word) => {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(" ");
  };

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      showing: !this.state.showing,
    });
  };

  randomNumGeneration = () => {
    let randomNum = Math.floor(Math.random() * 78);
    this.setState({
      num1: randomNum,
    });
  };

  refresh = () => {
    window.location.reload();
  };

  render() {
    const { showing } = this.state;
    let deck = this.props.data;
    let randomNum = this.state.num1;
    let card;
    let cardName;
    let cardSummary;
    let image;
    if (deck && deck[0] && randomNum !== null) {
      card = deck[randomNum];
      cardName = this.formatName(card.name);
      cardSummary = card.summary;
      image = card.image;
    }

    if (card !== null) {
      return (
        <div id="one-card-container">
          <div id="title-help-container">
            <button className="refresh" onClick={this.refresh}>
              <h3 className="refresh-title first">Draw</h3>
              <h3 className="refresh-title">Again</h3>
            </button>
            <h3>You Drew</h3>
            <button id="help-button" onClick={this.toggle}>
              ?
            </button>
          </div>
          <div className="one-card-container-div">
            {showing ? (
              <div className="one-card-help-info">
                <h3 className="daily-help-title">Daily Reading</h3>
                <p>
                  A simple reading, take a moment to think about what might be
                  the focus for your day.
                </p>
                <p>
                  To emphasize, try not to be to literal. Look at the imagery
                  and search for the metaphors.
                </p>
                <p>
                  For example, the Death card could be a reminder that there is
                  a situation or relationship you should put behind you.
                </p>
              </div>
            ) : null}
            <div class="one-card-flip">
              <div class="flip-card-inner one">
                <div class="flip-card-front one">
                  <img
                    className="tarot-back one"
                    src={TarotBack}
                    alt="Avatar"
                  />
                </div>
                <div class="flip-card-back one">
                  <img id="card-image" src={image} alt="tarot-card" />
                </div>
              </div>
            </div>
            <div id="one-card-result">
              <h2 className="name-title-one">{cardName}</h2>
              <h4 className="summary">{cardSummary}</h4>
            </div>
            <div className="go-home-div">
              <button className="go-home">
                <NavLink to="/">
                  <h3 className="home-h3">Go Home</h3>
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <h2>Card Data missing :(</h2>;
    }
  }
}

export default OneCard;
