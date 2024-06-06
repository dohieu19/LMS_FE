import PropTypes from "prop-types";
import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <div className={[styles.navigation, className].join(" ")}>
      <div className={styles.maskGroupWrapper}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <div className={styles.nguyenThaiSonParent}>
        <button className={styles.nguyenThaiSon} id="user">
          Nguyen Thai Son
        </button>
        <div className={styles.userStatus}>
          <a className={styles.admin}>Admin</a>
        </div>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
