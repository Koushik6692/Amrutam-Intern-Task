import styles from "./Specialize.module.css";

const Specialize = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.iSpecializeInWrapper}>
        <div className={styles.iSpecializeIn}>I Specialize In</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.women1Wrapper}>
              <img
                className={styles.women1Icon}
                loading="lazy"
                alt=""
                src="/women-1@2x.png"
              />
            </div>
            <div className={styles.womensHealth}>women’s health</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.skincare1Wrapper}>
              <img
                className={styles.skincare1Icon}
                loading="lazy"
                alt=""
                src="/skincare-1.svg"
              />
            </div>
            <div className={styles.skinCare}>Skin Care</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.immunity1Wrapper}>
              <img
                className={styles.immunity1Icon}
                loading="lazy"
                alt=""
                src="/immunity-1.svg"
              />
            </div>
            <div className={styles.immunity}>Immunity</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.hair1Wrapper}>
              <img
                className={styles.hair1Icon}
                loading="lazy"
                alt=""
                src="/hair-1@2x.png"
              />
            </div>
            <div className={styles.hairCare}>Hair care</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
