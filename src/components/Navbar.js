// react libraries import
import { Link } from "react-router-dom";

// stylesheets imports
import detailGrid from "./../styles/detailGrid.module.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <p className={detailGrid.rightArrow}>&larr;</p>
      </Link>
    </nav>
  );
}

export default Navbar;
