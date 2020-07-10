import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div id="homepage-div">
        <h1>What Awaits?</h1>
        <p>
          If you are unfamiliar with Tarot Cards, here is a quick introduction:
        </p>
        <p>
          Decide if you want to draw 1, 3, or 4 cards. Some people use two card
          readings, but the books I have read did not include it.
        </p>
        <p>
          Try to frame a question or situation in your head. When you draw the
          cards, see how they relate to what you had in mind.
        </p>
        <p>
          Don't take the cards too literally, try to delve into their imagery
          and how they relate to your feelings or insecurities.
        </p>
        <p>
          If you receive a 'bad' card, review your attachments to the issue. If
          they are 'good' cards, you know what you are hoping for and perhaps
          what you should focus on in the future.
        </p>
      </div>
    );
  }
}

export default HomePage;
