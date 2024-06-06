import Email from "./Email";
import PropTypes from "prop-types";
import styles from "./SignInForm.module.css";

const SignInForm = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className={styles.signInWrapper}>
        <div className={styles.signIn}>Sign in</div>
      </div>
      <div className={styles.email}>
        <div className={styles.email1}>Email</div>
        <Email />
      </div>
    </div>
  );
};

SignInForm.propTypes = {
  className: PropTypes.string,
};

export default SignInForm;
