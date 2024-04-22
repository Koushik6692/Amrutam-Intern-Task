import ProfileBackground from "./ProfileBackground";
import Profile from "./Profile";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameParent}>
      <ProfileBackground />
      <Profile />
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src="/ellipse-727@2x.png"
      />
    </div>
  );
};

export default FrameComponent2;
