import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

// Components
import HomePage from "./components/HomePage";
import OneCard from "./components/OneCard";
import ThreeCard from "./components/ThreeCard";
import FourCard from "./components/FourCard";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// import axios from "axios";
import logo from "./galaxy.svg";
import "./App.css";

const tarotData = require("./tarotData.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: tarotData,
    };
  }

  componentDidMount() {
    console.log(this.state.deck);
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} id="App-logo" alt="logo" />
            <h1 id="app-name-h1">
              The <span className="secondary">Tarot</span>
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
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
