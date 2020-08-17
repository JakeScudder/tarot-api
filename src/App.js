import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// Components
import HomePage from "./components/HomePage";
import OneCard from "./components/OneCard";
import ThreeCard from "./components/ThreeCard";
import FourCard from "./components/FourCard";
import Nav from "./components/Nav";

import axios from "axios";
import logo from "./galaxy.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
    };
  }

  componentDidMount() {
    //Trying to solve Cross Origin bugs ///Great way to attach a Script
    // const script = document.createElement("script");
    // script.crossOrigin = "anonymous";
    // script.async = true;
    // document.body.appendChild(script);

    if (this.state.deck === null) {
      this.fetchCards();
    } else {
      return console.log("deck loaded");
    }
  }

  fetchCards = () => {
    //Only runs in local host at the moment
    //Original functional deployment link "https://cors-anywhere.herokuapp.com/https://tarot.howlcode.com/api/v1/cards"

    //Alternative fetch attempts: Works locally, not deployed
    // "https://thingproxy.freeboard.io/fetch/https://tarot.howlcode.com/api/v1/cards"

    axios
      .get(
        "https://thingproxy.freeboard.io/fetch/https://tarot.howlcode.com/api/v1/cards",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Cross-Origin-Resource-Policy": "cross-origin",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.setState({
          deck: res.data,
        });
      })
      .catch((error) => {
        console.log("Error fetching the cards:", error);
      });
  };

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Draw Your <span className="secondary">Hand</span>
            </h1>
            <h1>How Many Cards?</h1>
            <Nav />
          </header>
          <Switch>
            <Route
              exact
              path="/four"
              render={(props) => <FourCard {...props} data={this.state.deck} />}
            />
            <Route
              exact
              path="/three"
              render={(props) => (
                <ThreeCard {...props} data={this.state.deck} />
              )}
            />
            <Route
              exact
              path="/one"
              render={(props) => <OneCard {...props} data={this.state.deck} />}
            />
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
