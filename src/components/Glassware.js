import cocktailStyle from "./../styles/cocktail.module.css";
import detailGrid from "./../styles/detailGrid.module.css";

function Glassware(props) {
  return (
    <div className={detailGrid.glassware + " " + detailGrid.background}>
      <p className={cocktailStyle.text + " " + cocktailStyle.textDetails}>
        {props.glassware}
      </p>
    </div>
  );
}

export default Glassware;
