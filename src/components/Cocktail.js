// React libraries imports
import React from "react";
import { Link } from "react-router-dom";

// Component imports
import CocktailName from "./CocktailName";
import BaseSpirit from "./BaseSpirit";
import Image from "./Image";

// Stylesheets imports
import cocktail from "./../styles/cocktail.module.css";

class Cocktail extends React.Component {
  createURL() {
    return `/details/${this.props.cocktail.id}`;
  }

  render() {
    return (
      <div className={cocktail.roundedCorners}>
        <Link to={this.createURL()} className={cocktail.centered}>
          <CocktailName name={this.props.cocktail.name} />
          <Image image={this.props.cocktail.image} />
          <BaseSpirit baseSpirit={this.props.cocktail.baseSpirit} />
        </Link>
      </div>
    );
  }
}

export default Cocktail;
