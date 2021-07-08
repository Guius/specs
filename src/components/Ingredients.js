import "./../styles/appStyles.module.css";
import cocktailStyle from "./../styles/cocktail.module.css";
import detailGrid from "./../styles/detailGrid.module.css";

function Ingredients(props) {
  const ingredients = props.ingredients;
  const listItems = ingredients.map((ingredient) => (
    <li key={ingredient.ingredientName} className={cocktailStyle.textDetails}>
      {ingredient.amount + " " + ingredient.amountUnit} of{" "}
      {ingredient.ingredientName}
    </li>
  ));
  return (
    <div className={detailGrid.ingredients + " " + detailGrid.background}>
      <ul className={cocktailStyle.text}>{listItems}</ul>
    </div>
  );
}

export default Ingredients;
