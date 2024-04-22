import DocDetails from "./DocDetails";
import styles from "./Doctors.module.css";

const Doctors = () => {
  return (
    <section className={styles.doctorsSection}>
      <div className={styles.frameParent}>
        <DocDetails />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <button className={styles.hairCareParent}>
              <div className={styles.hairCare}>{`Hair care `}</div>
              <div className={styles.frameWrapper}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-39486.svg"
                />
              </div>
            </button>
            <button className={styles.femaleParent}>
              <div className={styles.female}>Female</div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-39486-1.svg"
                />
              </div>
            </button>
            <button className={styles.rs0Rs500Parent}>
              <div className={styles.rs0Rs500}>Rs.0-Rs.500</div>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-39486-2.svg"
                />
              </div>
            </button>
            <button className={styles.hindiParent}>
              <div className={styles.hindi}>Hindi</div>
              <div className={styles.frameWrapper2}>
                <img
                  className={styles.groupIcon}
                  alt=""
                  src="/group-39486-1.svg"
                />
              </div>
            </button>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent1}>
              <DocDetails propMinWidth="unset" />
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper4}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.ellipseIcon}
                      alt=""
                      src="/ellipse-725@2x.png"
                    />
                    <button className={styles.sliderValue}>
                      <div className={styles.dropAreaLabel}>
                        <div className={styles.checkboxLabel}>4.5</div>
                      </div>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                    </button>
                  </div>
                </div>
                <div className={styles.frameWrapper5}>
                  <div className={styles.drPrernaNarangParent}>
                    <h1 className={styles.drPrernaNarang}>Dr. Prerna Narang</h1>
                    <div className={styles.frameParent3}>
                      <div className={styles.frameParent4}>
                        <div className={styles.frameParent5}>
                          <img
                            className={styles.frameIcon}
                            alt=""
                            src="/frame.svg"
                          />
                          <div className={styles.generalMedicalCheckup}>
                            Male-Female Infertility
                          </div>
                        </div>
                        <div className={styles.frameParent6}>
                          <img
                            className={styles.frameIcon1}
                            alt=""
                            src="/frame-1.svg"
                          />
                          <div className={styles.generalMedicalCheckup1}>
                            7 years of Experience
                          </div>
                        </div>
                        <div className={styles.comment1Parent}>
                          <img
                            className={styles.comment1Icon}
                            alt=""
                            src="/comment-1@2x.png"
                          />
                          <div className={styles.speaksEnglishHindi}>
                            Speaks: English, Hindi, Marathi
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent7}>
                        <div className={styles.videoConsultationParent}>
                          <div className={styles.videoConsultation}>
                            Video Consultation
                          </div>
                          <b className={styles.b}>₹800</b>
                        </div>
                        <div className={styles.chatConsultationParent}>
                          <div className={styles.chatConsultation}>
                            Chat Consultation
                          </div>
                          <b className={styles.free}>Free</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper6}>
                  <div className={styles.frameParent8}>
                    <div className={styles.frameWrapper7}>
                      <button className={styles.viewProfileWrapper}>
                        <div className={styles.viewProfile}>View Profile</div>
                      </button>
                    </div>
                    <button className={styles.bookAConsultationWrapper}>
                      <div className={styles.bookAConsultation}>
                        Book a consultation
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
