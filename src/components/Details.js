// React libraries imports
import { useParams } from "react-router-dom";

// Stylesheet imports
import "./../styles/appStyles.module.css";
import "./../styles/cocktail.module.css";
import detailGrid from "./../styles/detailGrid.module.css";

// Data imports
import Cocktail from "./../data/cocktails";

// Module imports
import Ingredients from "./Ingredients";
import Glassware from "./Glassware";
import Garnish from "./Garnish";
import Method from "./Method";
import Image from "./Image";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Navbar from "./Navbar";

function Details() {
  let { id } = useParams();

  return (
    <div className={detailGrid.pageContainer}>
      <Navbar />
      {/* Contents of the page */}

      <div className={detailGrid.contentsContainer}>
        {/* Image */}

        <Image image={Cocktail[id].image} />
        {/* Specs */}

        {/* Title */}
        <Title title={Cocktail[id].name} />

        {/* Subtitles */}
        <Subtitle text="Ingredients" style={detailGrid.ingredientsTitle} />
        <Subtitle text="Glassware" style={detailGrid.glasswareTitle} />
        <Subtitle text="Garnish" style={detailGrid.garnishTitle} />
        <Subtitle text="Method" style={detailGrid.methodTitle} />

        {/* Specs content */}
        <Ingredients ingredients={Cocktail[id].ingredients} />
        <Glassware glassware={Cocktail[id].glassware} />
        <Garnish garnish={Cocktail[id].garnish} />
        <Method method={Cocktail[id].method} />
      </div>
    </div>
  );
}

export default Details;
