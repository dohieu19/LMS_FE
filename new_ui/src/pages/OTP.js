import styles from "./OTP.module.css";

const OTP = () => {
  return (
    <div className={styles.otp}>
      <main className={styles.otp1}>
        <div className={styles.otpBackgroundParent}>
          <div className={styles.otpBackground} />
          <div className={styles.logoWrapper}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.sentOtpOnYourEmailWrapper}>
                <div className={styles.sentOtpOn}>Sent OTP on Your Email</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameOtpWrapper}>
                  <div className={styles.frameOtp}>
                    <div className={styles.inputOtp}>
                      <input
                        className={styles.otp11}
                        name="OTP_1"
                        type="text"
                      />
                      <input className={styles.otp2} name="OTP_2" type="text" />
                      <input className={styles.otp3} name="OTP_3" type="text" />
                      <input className={styles.otp4} name="OTP_4" type="text" />
                      <input className={styles.otp5} name="OTP_5" type="text" />
                      <input className={styles.otp6} name="OTP_6" type="text" />
                    </div>
                    <div className={styles.resent}>
                      <button className={styles.resentOtp}>Resent OTP</button>
                    </div>
                  </div>
                </div>
                <button className={styles.buttonSubmit}>
                  <img
                    className={styles.buttonSubmitIcon}
                    alt=""
                    src="/rectangle-4.svg"
                  />
                  <b className={styles.submit}>Submit</b>
                </button>
              </div>
            </div>
            <div className={styles.backToLoginPageWrapper}>
              <button className={styles.backToLogin} id="back_to_login_page">
                Back to Login Page
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OTP;
