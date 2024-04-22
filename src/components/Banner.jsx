import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.findExpertDoctorsForAnInWrapper}>
          <h1
            className={styles.findExpertDoctors}
          >{`Find expert Doctors for an In-clinic session here `}</h1>
        </div>
        <div className={styles.frameItem} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameInner} />
              <div className={styles.locationDropdown}>
                <img
                  className={styles.locationIcon}
                  alt=""
                  src="/location.svg"
                />
                <div className={styles.selectLocation}>Select Location</div>
                <div className={styles.akarIconschevronDownWrapper}>
                  <img
                    className={styles.akarIconschevronDown}
                    alt=""
                    src="/akariconschevrondown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
              <input
                className={styles.searchBarChild}
                placeholder="eg. Doctor, specialisation, clinic name"
                type="text"
              />
              <img
                className={styles.iconsarrowForward24px}
                alt=""
                src="/iconsarrow-forward-24px.svg"
              />
            </div>
          </div>
          <div className={styles.ellipseDiv} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
