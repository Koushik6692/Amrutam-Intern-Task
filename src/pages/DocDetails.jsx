import FrameComponent2 from "../components/FrameComponent2";
import AboutMe from "../components/AboutMe";
import Specialize from "../components/Specialize";
import Concerns from "../components/Concerns";
import WorkExp from "../components/WorkExp";
import RightComp from "../components/RightComp";
import Reviews from "../components/Reviews";
import styles from "./DocDetails.module.css";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const Desktop1 = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className={styles.desktop73}>
      <Navbar />
      <main className={styles.desktop73Inner}>
        <section className={styles.frameParent}>
          <FrameComponent2 />
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <AboutMe />
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent1}>
                    <Specialize />
                    <Concerns />
                    <WorkExp />
                  </div>
                </div>
              </div>
              <RightComp />
            </div>
            <div className={styles.frameWrapper1}>
              <Reviews />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop1;
