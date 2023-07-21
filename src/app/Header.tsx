import { Link } from "react-router-dom";

import Modal from "../components/Modal";
import DarkMode from "../components/DarkMode";

import styles from "./Header.module.scss";
import SearchInput from "../components/SearchInput";
import ShoppingCart from "../components/ShoppingCart";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left_side}>
          <div className={styles.hamburger}>{/* <Modal /> */}</div>
          <div className={styles.home_button}>
            <Link to="/">My Shop</Link>
          </div>
          <div className={styles.link}>
            <Link to="/fashion">패션</Link>
            <Link to="/accessory">액세서리</Link>
            <Link to="/digital">디지털</Link>
          </div>
        </div>
        <div className={styles.right_side}>
          <DarkMode />
          <SearchInput />
          <ShoppingCart />
        </div>
      </nav>
    </header>
  );
};

export default Header;