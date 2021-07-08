import styles from "./../styles/detailGrid.module.css";

function Subtitle(props) {
  return (
    <div className={props.style + " " + styles.background}>
      <p className={styles.text + " " + styles.paddingTitle}>{props.text}</p>
    </div>
  );
}

export default Subtitle;
