import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.image45Parent}>
          <img
            className={styles.image45Icon}
            loading="lazy"
            alt=""
            src="/image-45@2x.png"
          />
          <div className={styles.homeParent}>
            <NavLink to="/" className={styles.Item}>
              Home
            </NavLink>
            <div className={styles.findDoctors}>find doctors</div>
            <div className={styles.Item}>About us </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.loginWrapper}>
            <div className={styles.login}>Login</div>
          </button>
          <button className={styles.signUpWrapper}>
            <div className={styles.signUp}>Sign-up</div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
