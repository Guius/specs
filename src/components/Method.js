import cocktailStyle from "./../styles/cocktail.module.css";
import detailGrid from "./../styles/detailGrid.module.css";

function Method(props) {
  const steps = props.method;
  const listItems = steps.map((step) => (
    <li key={step} className={cocktailStyle.textDetails}>
      {step}
    </li>
  ));
  return (
    <div className={detailGrid.method + " " + detailGrid.background}>
      <ul className={cocktailStyle.text}>{listItems}</ul>
    </div>
  );
}

export default Method;
