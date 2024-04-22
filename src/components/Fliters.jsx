import styles from "./Fliters.module.css";

const Fliters = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.expertiseParent}>
        <div className={styles.expertise}>Expertise</div>
        <div className={styles.vectorWrapper}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.genderParent}>
          <div className={styles.gender}>Gender</div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.feesParent}>
          <div className={styles.fees}>Fees</div>
          <div className={styles.vectorFrame}>
            <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.languagesParent}>
          <div className={styles.languages}>Languages</div>
          <div className={styles.vectorWrapper1}>
            <img className={styles.vectorIcon3} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
      <div className={styles.allFiltersParent}>
        <div className={styles.allFilters}>All filters</div>
        <div className={styles.vectorWrapper2}>
          <img className={styles.vectorIcon4} alt="" src="/vector.svg" />
        </div>
      </div>
    </div>
  );
};

export default Fliters;
