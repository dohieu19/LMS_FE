import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.forgotPassword}>
      <main className={styles.forgotPassword1}>
        <div className={styles.formForgotPasswordParent}>
          <div className={styles.formForgotPassword} />
          <div className={styles.logoWrapper}>
            <img
              className={styles.logoIcon}
              loading="lazy"
              alt=""
              src="/logo1@2x.png"
            />
          </div>
          <div className={styles.forgotPasswordWrapper}>
            <div className={styles.forgotPassword2}>
              <p className={styles.forgotPassword3}>Forgot Password</p>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>Email</div>
              </div>
              <input
                className={styles.inputEmail}
                name="email"
                id="email"
                type="email"
              />
            </div>
          </div>
          <button className={styles.vectorParent} id="submit">
            <img className={styles.frameChild} alt="" src="/rectangle-4.svg" />
            <b className={styles.submit}>Submit</b>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
