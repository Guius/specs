import cocktailStyle from "./../styles/cocktail.module.css";
import detailGrid from "./../styles/detailGrid.module.css";

function Garnish(props) {
  const garnish = props.garnish;
  const listItems = garnish.map((garnish) => (
    <li key={garnish} className={cocktailStyle.textDetails}>
      {garnish}
    </li>
  ));

  return (
    <div className={detailGrid.garnish + " " + detailGrid.background}>
      <ul className={cocktailStyle.text}>{listItems}</ul>
    </div>
  );
}

export default Garnish;
