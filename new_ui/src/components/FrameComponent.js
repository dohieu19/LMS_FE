import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <button className={styles.gridParent} id="button_class">
          <img
            className={styles.gridIcon}
            loading="lazy"
            alt=""
            src="/grid.svg"
          />
          <a className={styles.dashboard}>Dashboard</a>
        </button>
      </div>
      <div className={styles.frameContainer}>
        <button className={styles.frameGroup} id="button_user">
          <div className={styles.archiveWrapper}>
            <img
              className={styles.archiveIcon}
              loading="lazy"
              alt=""
              src="/archive.svg"
            />
          </div>
          <a className={styles.classes}>Classes</a>
        </button>
      </div>
      <button className={styles.peopleParent} id="button_schedule">
        <img
          className={styles.peopleIcon}
          loading="lazy"
          alt=""
          src="/people.svg"
        />
        <div className={styles.userManagement}>User Management</div>
      </button>
      <div className={styles.frameDiv}>
        <button className={styles.frameButton} id="button_grades">
          <div className={styles.calendar2weekWrapper}>
            <img
              className={styles.calendar2weekIcon}
              loading="lazy"
              alt=""
              src="/calendar2week.svg"
            />
          </div>
          <a className={styles.schedule}>Schedule</a>
        </button>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
