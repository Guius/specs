// Stylesheet import
import detailGrid from "./../styles/detailGrid.module.css";
import "./../styles/appStyles.module.css";

function Title(props) {
  return (
    <div
      className={
        detailGrid.titleContainer +
        " " +
        detailGrid.centered +
        " " +
        detailGrid.background
      }
    >
      <h1 className={detailGrid.text}>{props.title}</h1>
    </div>
  );
}

export default Title;
