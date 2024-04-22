import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Fliters from "../components/Fliters";
import Doctors from "../components/Doctors";
import styles from "./Home.module.css";

const Desktop = () => {
  return (
    <form className={styles.desktop75}>
      <Navbar />
      <Banner />
      <section className={styles.desktop75Inner}>
        <Fliters />
      </section>
      <Doctors />
    </form>
  );
};

export default Desktop;
