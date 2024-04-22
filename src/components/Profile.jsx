import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.heading4DrBruceWillisWrapper}>
                <div className={styles.heading4}>Dr. Bruce Willis</div>
              </div>
              <div className={styles.polygonParent}>
                <img className={styles.frameItem} alt="" src="/polygon-1.svg" />
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.heading5SeniorDoctorWrapper}>
              <div className={styles.heading5}>Gynecologist</div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.wrapper}>
                <div className={styles.div}>4.2</div>
              </div>
              <div className={styles.starsParent}>
                <img className={styles.starsIcon} alt="" src="/stars.svg" />
                <img
                  className={styles.starsIcon1}
                  loading="lazy"
                  alt=""
                  src="/stars-1.svg"
                />
              </div>
              <img
                className={styles.starsIcon2}
                loading="lazy"
                alt=""
                src="/stars-1.svg"
              />
              <img
                className={styles.starsIcon3}
                loading="lazy"
                alt=""
                src="/stars-3.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent2}>
            <div className={styles.heading5FollowersParent}>
              <div className={styles.heading51}>Followers</div>
              <div className={styles.heading4850Wrapper}>
                <div className={styles.heading41}>850</div>
              </div>
            </div>
            <div className={styles.heading5FollowingParent}>
              <div className={styles.heading52}>Following</div>
              <div className={styles.heading418kWrapper}>
                <div className={styles.heading42}>18K</div>
              </div>
            </div>
            <div className={styles.heading5PostsParent}>
              <div className={styles.heading53}>Posts</div>
              <div className={styles.heading43}>250</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <button className={styles.bookAnAppointmentWrapper}>
          <div className={styles.bookAnAppointment}>Book an Appointment</div>
        </button>
      </div>
    </div>
  );
};

export default Profile;
