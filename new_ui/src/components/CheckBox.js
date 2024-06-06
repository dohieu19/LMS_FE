import PropTypes from "prop-types";
import styles from "./CheckBox.module.css";

const CheckBox = ({ className = "" }) => {
  return (
    <div className={[styles.checkBox, className].join(" ")}>
      <input
        className={styles.checkboxRemember}
        checked={true}
        id="checkbox_remember"
        type="checkbox"
      />
      <div className={styles.rememberMyPreferenceWrapper}>
        <div className={styles.rememberMyPreference}>
          Remember my preference
        </div>
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
};

export default CheckBox;
