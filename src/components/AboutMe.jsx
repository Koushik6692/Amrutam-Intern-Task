import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.aLittleAboutMeWrapper}>
          <h3 className={styles.aLittleAbout}>A Little About me</h3>
        </div>
        <button className={styles.button}>
          <div className={styles.follow}>Follow</div>
          <div className={styles.buttonInner}>
            <img className={styles.frameItem} alt="" src="/group-39517.svg" />
          </div>
        </button>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.helloIAmDrBruceWillisAParent}>
            <div
              className={styles.helloIAm}
            >{`Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the `}</div>
            <div className={styles.frameContainer}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/vector-38.svg"
                />
              </div>
              <div className={styles.readMore}>Read More</div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent1}>
                <div className={styles.languageSpokenWrapper}>
                  <div
                    className={styles.languageSpoken}
                  >{`Language Spoken `}</div>
                </div>
                <button className={styles.englishWrapper}>
                  <div className={styles.english}>{`English `}</div>
                </button>
                <button className={styles.hindiWrapper}>
                  <div className={styles.hindi}>Hindi</div>
                </button>
                <button className={styles.teluguWrapper}>
                  <div className={styles.telugu}>Telugu</div>
                </button>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.ellipseParent}>
                <div className={styles.ellipseDiv} />
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              </div>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameChild1} />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-39479.svg"
                />
              </div>
              <div className={styles.ellipseContainer}>
                <div className={styles.frameChild2} />
                <img
                  className={styles.frameChild3}
                  loading="lazy"
                  alt=""
                  src="/group-39481.svg"
                />
              </div>
              <div className={styles.ellipseParent1}>
                <div className={styles.frameChild4} />
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
