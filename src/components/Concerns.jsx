import styles from "./Concerns.module.css";

const Concerns = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.theConcernsITreatWrapper}>
        <div className={styles.theConcernsI}>The Concerns I Treat</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <button className={styles.heading5OperationsWrapper}>
                <div className={styles.heading5}>Skin Treatment</div>
              </button>
              <button className={styles.heading5OperationsContainer}>
                <div className={styles.heading51}>Pregnancy</div>
              </button>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <button className={styles.heading5OperationsFrame}>
                  <div className={styles.heading52}>Pelvic Pain</div>
                </button>
                <button className={styles.frameButton}>
                  <div className={styles.heading53}>Ovarian Cysts</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <button className={styles.heading5OperationsWrapper1}>
                <div className={styles.heading54}>Period Doubts</div>
              </button>
              <div className={styles.frameWrapper2}>
                <button className={styles.heading5OperationsWrapper2}>
                  <div className={styles.heading55}>+ 5 More</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <button className={styles.heading5OperationsWrapper3}>
              <div className={styles.heading56}>Endometriosis</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concerns;
