import RectangleComponent from "./RectangleComponent";
import PropTypes from "prop-types";
import styles from "./Password.module.css";

const Password = ({ className = "" }) => {
  return (
    <div className={[styles.password, className].join(" ")}>
      <div className={styles.password1}>Password</div>
      <RectangleComponent />
    </div>
  );
};

Password.propTypes = {
  className: PropTypes.string,
};

export default Password;
