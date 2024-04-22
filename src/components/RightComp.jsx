import styles from "./RightComp.module.css";

const RightComp = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.appointmentFeeParent}>
          <div className={styles.appointmentFee}>Appointment Fee</div>
          <div className={styles.wrapper}>
            <div className={styles.div}>₹699.00</div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.selectYourModeOfSessionParent}>
          <b className={styles.selectYourMode}>Select your mode of session</b>
          <div className={styles.vectorWrapper}>
            <img className={styles.frameChild} alt="" src="/vector-41.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.inClinicParent}>
          <div className={styles.inClinic}>In-Clinic</div>
          <div className={styles.minsWrapper}>
            <div className={styles.mins}>45 Mins</div>
          </div>
        </div>
        <div className={styles.inputFilter}>
          <div className={styles.videoParent}>
            <div className={styles.video}>Video</div>
            <div className={styles.connectionHandler}>
              <div className={styles.connectionHandlerChild} />
              <img className={styles.frameIcon} alt="" src="/frame-11.svg" />
            </div>
          </div>
          <div className={styles.minsContainer}>
            <div className={styles.mins1}>45 Mins</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.chatWrapper}>
            <div className={styles.chat}>Chat</div>
          </div>
          <div className={styles.mins2}>10 Mins</div>
        </div>
      </div>
      <div className={styles.errorHandler}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent2}>
              <div className={styles.pickATimeSlotWrapper}>
                <b className={styles.pickATimeContainer}>
                  {`Pick a `}
                  <span className={styles.timeSlot}>Time slot</span>
                </b>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/vector-43.svg"
                  />
                </div>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameInner} />
                  <img
                    className={styles.calendarIcon}
                    loading="lazy"
                    alt=""
                    src="/calendar.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.daWrapper}>
              <img
                className={styles.daIcon}
                loading="lazy"
                alt=""
                src="/da@2x.png"
              />
            </div>
            <div className={styles.div1}>
              <div className={styles.date}>
                <div className={styles.mon10Oct}>Mon, 10 Oct</div>
                <div className={styles.slotsWrapper}>
                  <b className={styles.slots}>10 slots</b>
                </div>
              </div>
              <div className={styles.date1}>
                <div className={styles.tue11Oct}>Tue, 11 Oct</div>
                <div className={styles.slotsContainer}>
                  <b className={styles.slots1}>{`02 slots `}</b>
                </div>
              </div>
              <div className={styles.date2}>
                <div className={styles.wed12Oct}>Wed, 12 Oct</div>
                <div className={styles.slotsFrame}>
                  <b className={styles.slots2}>{`05 slots `}</b>
                </div>
              </div>
            </div>
            <div className={styles.daContainer}>
              <img
                className={styles.daIcon1}
                loading="lazy"
                alt=""
                src="/da-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.morningParent}>
          <b className={styles.morning}>Morning</b>
          <div className={styles.timeParent}>
            <button className={styles.time}>
              <div className={styles.am}>09:00 AM</div>
            </button>
            <button className={styles.time1}>
              <div className={styles.am1}>09:30 AM</div>
            </button>
            <button className={styles.time2}>
              <div className={styles.am2}>10:00 AM</div>
            </button>
            <button className={styles.time3}>
              <div className={styles.am3}>10:15 AM</div>
            </button>
            <button className={styles.time4}>
              <div className={styles.am4}>10:45 AM</div>
            </button>
            <button className={styles.time5}>
              <div className={styles.am5}>11:00 AM</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.eveningParent}>
          <b className={styles.evening}>Evening</b>
          <div className={styles.timeGroup}>
            <button className={styles.time6}>
              <div className={styles.pm}>04:00 PM</div>
            </button>
            <button className={styles.time7}>
              <div className={styles.pm1}>04:15 PM</div>
            </button>
            <button className={styles.time8}>
              <div className={styles.pm2}>04:30 PM</div>
            </button>
            <button className={styles.time9}>
              <div className={styles.pm3}>04:45 PM</div>
            </button>
            <button className={styles.time10}>
              <div className={styles.pm4}>05:15 PM</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper4}>
        <button className={styles.makeAnAppointmentWrapper}>
          <div className={styles.makeAnAppointment}>Make an appointment</div>
        </button>
      </div>
    </div>
  );
};

export default RightComp;
