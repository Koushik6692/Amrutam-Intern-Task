import { useMemo } from "react";
import styles from "./DocDetails.module.css";

const DocDetails = ({ propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/ellipse-725@2x.png"
            />
            <button className={styles.dataAggregatorParent}>
              <div className={styles.dataAggregator}>
                <div className={styles.decisionMaker}>4.5</div>
              </div>
              <img
                className={styles.materialSymbolsstarIcon}
                alt=""
                src="/materialsymbolsstar.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.shapeManager}>
          <h1 className={styles.drPrernaNarang}>Dr. Prerna Narang</h1>
          <div className={styles.outputCombiner}>
            <div className={styles.conditionChecker}>
              <div className={styles.dataTransformer}>
                <img
                  className={styles.imageAnalyzerIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <div className={styles.generalMedicalCheckup}>
                  Male-Female Infertility
                </div>
              </div>
              <div className={styles.layoutOrganizerParent}>
                <img
                  className={styles.layoutOrganizerIcon}
                  alt=""
                  src="/frame-1.svg"
                />
                <div className={styles.generalMedicalCheckup1}>
                  7 years of Experience
                </div>
              </div>
              <div className={styles.dataTransformer1}>
                <img
                  className={styles.comment1Icon}
                  loading="lazy"
                  alt=""
                  src="/comment-1@2x.png"
                />
                <div className={styles.speaksEnglishHindi}>
                  Speaks: English, Hindi, Marathi
                </div>
              </div>
            </div>
            <div className={styles.alignmentHelper}>
              <div className={styles.colorSelector}>
                <div className={styles.videoConsultation}>
                  Video Consultation
                </div>
                <b className={styles.b}>₹800</b>
              </div>
              <div className={styles.colorSelector1}>
                <div className={styles.chatConsultation}>Chat Consultation</div>
                <b className={styles.free}>Free</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.labelMaker}>
        <div className={styles.frameContainer}>
          <div className={styles.imageInputWrapper}>
            <button className={styles.imageInput}>
              <div className={styles.viewProfile}>View Profile</div>
            </button>
          </div>
          <button className={styles.bookAConsultationWrapper}>
            <div className={styles.bookAConsultation}>Book a consultation</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocDetails;
