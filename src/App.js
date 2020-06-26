import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import OneCard from "./components/OneCard";
import Nav from "./components/Nav";

import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
    };
  }

  componentDidMount() {
    this.fetchCards();
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
            <h1>Draw Your Hand</h1>
            <Nav />
          </header>
          <Switch>
            <Route
              path="/one"
              render={(props) => (
                <OneCard {...props} data={this.state.deck} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
