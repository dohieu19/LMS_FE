import PropTypes from "prop-types";
import styles from "./MenuInfor1.module.css";

const MenuInfor = ({ className = "" }) => {
  return (
    <button
      className={[styles.menuInfor, className].join(" ")}
      id="button_information"
    >
      <div className={styles.informationFrame} />
      <div className={styles.groupParent}>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group.svg"
        />
        <div className={styles.informationWrapper}>
          <div className={styles.information}>Information</div>
        </div>
      </div>
      <div className={styles.backwardWrapper}>
        <img className={styles.backwardIcon} alt="" src="/backward-1@2x.png" />
      </div>
    </button>
  );
};

MenuInfor.propTypes = {
  className: PropTypes.string,
};

export default MenuInfor;
