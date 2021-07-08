import React from "react";

import styles from "./../styles/searchBox.module.css";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    // const capitalisedInput = capitaliseInput(e);

    // 2. Lift the state up
    this.props.onInputChange(e.target.value);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={this.props.value}
            onChange={this.handleInput}
            placeholder="Search..."
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
