import styles from "./WorkExp.module.css";

const WorkExp = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.myWorkExperienceWrapper}>
        <div className={styles.myWorkExperience}>My Work Experience</div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.iHaveBeenInPracticeForWrapper}>
            <div className={styles.iHaveBeen}>
              I have been in practice for : 7+ Years
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/vector-46.svg"
              />
            </div>
            <div className={styles.frameContainer}>
              <button className={styles.materialSymbolshomeWorkOutWrapper}>
                <img
                  className={styles.materialSymbolshomeWorkOutIcon}
                  alt=""
                  src="/materialsymbolshomeworkoutlinerounded.svg"
                />
              </button>
              <div className={styles.frameDiv}>
                <div className={styles.midtownMedicalClinicParent}>
                  <div className={styles.midtownMedicalClinic}>
                    Midtown Medical Clinic
                  </div>
                  <div className={styles.seniorDoctor}>Senior doctor</div>
                </div>
                <div className={styles.present}>
                  <span className={styles.presentTxt}>
                    2016-
                    <span className={styles.present1}>present</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <button className={styles.materialSymbolshomeWorkOutContainer}>
                <img
                  className={styles.materialSymbolshomeWorkOutIcon1}
                  alt=""
                  src="/materialsymbolshomeworkoutlinerounded.svg"
                />
              </button>
              <div className={styles.frameParent2}>
                <div className={styles.midtownMedicalClinicGroup}>
                  <div className={styles.midtownMedicalClinic1}>
                    Midtown Medical Clinic
                  </div>
                  <div className={styles.seniorDoctor1}>Senior doctor</div>
                </div>
                <div className={styles.div}>2010-2015</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
