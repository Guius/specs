import data from "../data/cocktails";

import Cocktail from "./Cocktail";

import cocktailStyles from "./../styles/cocktail.module.css";
import appStyles from "./../styles/appStyles.module.css";

function filterData(props) {
  let filteredData = [];
  data.forEach((cocktail) => {
    if (cocktail.name.toLowerCase().startsWith(props.filter.toLowerCase())) {
      filteredData.push(cocktail);
    }
  });

  return filteredData;
}

function CocktailList(props) {
  // filter the data according to the user input
  const filteredData = filterData(props);

  if (filteredData.length > 0) {
    const listItems = filteredData.map((cocktail) => (
      <div key={cocktail.id} className={appStyles.background}>
        <Cocktail cocktail={cocktail} />
      </div>
    ));
    return listItems;
  } else {
    return <h1 className={cocktailStyles.title}>No results found</h1>;
  }
}

export default CocktailList;
