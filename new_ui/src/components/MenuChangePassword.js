import PropTypes from "prop-types";
import styles from "./MenuChangePassword.module.css";

const MenuChangePassword = ({ className = "" }) => {
  return (
    <button
      className={[styles.menuChangePassword, className].join(" ")}
      id="button_change_password"
    >
      <div className={styles.changePasswordFrame} />
      <div className={styles.footerItemPair}>
        <img
          className={styles.iconGroup}
          loading="lazy"
          alt=""
          src="/icon-group.svg"
        />
        <div className={styles.changePassword}>Change Password</div>
      </div>
      <img
        className={styles.backwardIcon}
        loading="lazy"
        alt=""
        src="/backward@2x.png"
      />
    </button>
  );
};

MenuChangePassword.propTypes = {
  className: PropTypes.string,
};

export default MenuChangePassword;
