import Review from "./Review";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.featuredReviews102Wrapper}>
        <div className={styles.featuredReviews102}>Featured Reviews (102)</div>
      </div>
      <Review
        consultedForSkinCare="Consulted for Skin care"
        mightBeBitEarlyToConfirmB="Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods"
      />
      <Review
        consultedForSkinCare="Consulted for Pregnancy"
        mightBeBitEarlyToConfirmB="Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods"
        propWidth="189px"
        propDisplay="inline-block"
      />
    </div>
  );
};

export default Reviews;
