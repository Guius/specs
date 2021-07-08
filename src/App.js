import React from "react";

import { Switch, Route } from "react-router-dom";

import CocktailList from "./components/CocktailList";
import SearchBox from "./components/SearchBox";
import Details from "./components/Details";

import styles from "./styles/cocktailList.module.css";
import searchBox from "./styles/searchBox.module.css";
import "./styles/appStyles.module.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { userInput: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(userInput) {
    this.setState({ userInput: userInput });
  }

  render() {
    return (
      <div>
        <SearchBox
          value={this.state.userInput}
          onInputChange={this.handleInputChange}
          onScreenChange={this.handleScreenChange}
          className={searchBox.container}
        />
        <div className={styles.container}>
          <CocktailList filter={this.state.userInput} />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
