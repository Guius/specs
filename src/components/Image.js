// React libraries imports
import React from "react";

// Stylesheet import
import styles from "./../styles/imageMain.module.css";
import detailGrid from "./../styles/detailGrid.module.css";

class Image extends React.Component {
  render() {
    return (
      <div className={detailGrid.imageContainer + " " + detailGrid.centered}>
        <img
          src={process.env.PUBLIC_URL + `/images/${this.props.image}.jpg`}
          className={styles.roundedCorners}
          alt={this.props.name}
        />
      </div>
    );
  }
}

export default Image;
