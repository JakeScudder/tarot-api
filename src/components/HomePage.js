import React, { Component } from "react";
import logo from "../galaxy-fill.svg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showing: false,
      hideShow: "Show",
    };
  }

  componentDidMount() {
    this.showGalaxy();
  }

  showGalaxy = () => {
    document.getElementById("App-logo").style.display = "block";
  };

  //Toggle handles showing and hiding help. Also changes the variable text.
  toggle = (e) => {
    e.preventDefault();
    this.setState({
      showing: !this.state.showing,
    });
    if (this.state.hideShow === "Hide") {
      this.setState({
        hideShow: "Show",
      });
    } else {
      this.setState({
        hideShow: "Hide",
      });
    }
  };

  render() {
    //Variable destructuring
    const { showing, hideShow } = this.state;

    return (
      <div id="homepage-div">
        <div id="title-help-container"></div>
        {showing ? (
          <div>
            <p>
              If you are unfamiliar with Tarot Cards, here is a quick
              introduction:
            </p>
            <p>
              To start off, don't take the cards too literally. Try to delve
              into their imagery and how they relate to your feelings or
              insecurities.
            </p>
            <p>
              The guidebooks I read did not include 2 cards so that was not
              included.
            </p>
            <p>
              Try to frame a question or situation in your head. When you draw
              the cards, see how they relate to what you had in mind.
            </p>
            <p>
              If you receive a 'bad' card, review your attachments to the issue.
              If they are 'good' cards, you know what you are hoping for and
              perhaps what you should focus on in the future.
            </p>
          </div>
        ) : (
          <img src={logo} className="App-logo-filler" alt="logo" />
        )}
        <div id="footer-homepage">
          <button id="hide-description" onClick={this.toggle}>
            {hideShow} Help
          </button>
        </div>
      </div>
    );
  }
}

export default HomePage;
