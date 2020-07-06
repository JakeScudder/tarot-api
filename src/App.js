import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
    if (this.state.deck === null) {
      this.fetchCards();
    } else {
      return console.log("deck loaded");
    }
  }

  fetchCards = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://tarot.howlcode.com/api/v1/cards"
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
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
