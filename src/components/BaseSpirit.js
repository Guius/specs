import cocktailStyle from "./../styles/cocktail.module.css";

function BaseSpirit(props) {
  return (
    <div className={cocktailStyle.centered}>
      <h2
        className={cocktailStyle.subtitle}
      >{`${props.baseSpirit} cocktail`}</h2>
    </div>
  );
}

export default BaseSpirit;
