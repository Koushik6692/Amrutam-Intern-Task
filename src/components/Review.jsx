import { useMemo } from "react";
import styles from "./Review.module.css";

const Review = ({
  consultedForSkinCare,
  mightBeBitEarlyToConfirmB,
  propWidth,
  propDisplay,
}) => {
  const consultedForSkinStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-2608514@2x.png"
              />
              <div className={styles.alicentHightowerParent}>
                <div className={styles.alicentHightower}>Alicent Hightower</div>
                <div
                  className={styles.consultedForSkin}
                  style={consultedForSkinStyle}
                >
                  {consultedForSkinCare}
                </div>
              </div>
            </div>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <img
                className={styles.icon2}
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
              <img
                className={styles.icon3}
                loading="lazy"
                alt=""
                src="/icon-2.svg"
              />
              <img className={styles.icon4} alt="" src="/icon-2.svg" />
            </div>
          </div>
          <div className={styles.january2023Wrapper}>
            <div className={styles.january2023}>20 January 2023</div>
          </div>
        </div>
        <div className={styles.mightBeBit}>{mightBeBitEarlyToConfirmB}</div>
      </div>
    </div>
  );
};

export default Review;
