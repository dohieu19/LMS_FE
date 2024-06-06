import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.pageTitle}>
        <div className={styles.title}>
          <img
            className={styles.gridIcon}
            loading="lazy"
            alt=""
            src="/grid.svg"
          />
          <div className={styles.dashboard}>Dashboard</div>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.linkPairsWrapper}>
          <div className={styles.linkPairs}>
            <div className={styles.linkIcons}>
              <img
                className={styles.archiveIcon}
                loading="lazy"
                alt=""
                src="/archive.svg"
              />
            </div>
            <div className={styles.classes}>Classes</div>
          </div>
        </div>
        <button className={styles.userManagement} id="button_user_management">
          <div className={styles.userManagementChild} />
          <img className={styles.peopleIcon} alt="" src="/people1.svg" />
          <div className={styles.userManagement1}>User Management</div>
        </button>
        <div className={styles.linksInner}>
          <div className={styles.frameParent}>
            <div className={styles.calendar2weekWrapper}>
              <img
                className={styles.calendar2weekIcon}
                loading="lazy"
                alt=""
                src="/calendar2week.svg"
              />
            </div>
            <div className={styles.schedule}>Schedule</div>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.actionIcons}>
          <div className={styles.actionIconsPrimary}>
            <img
              className={styles.actionIcons1}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
          <div className={styles.grades}>Grades</div>
        </div>
      </div>
      <div className={styles.downloadsIconWrapper}>
        <div className={styles.downloadsIcon}>
          <div className={styles.downloadsIconContainerWrapper}>
            <div className={styles.downloadsIconContainer}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
            </div>
          </div>
          <div className={styles.downloads}>Downloads</div>
        </div>
      </div>
      <div className={styles.actions1}>
        <div className={styles.frameGroup}>
          <div className={styles.gearWrapper}>
            <img
              className={styles.gearIcon}
              loading="lazy"
              alt=""
              src="/gear1.svg"
            />
          </div>
          <div className={styles.settings}>Settings</div>
        </div>
      </div>
      <div className={styles.actions2}>
        <div className={styles.frameContainer}>
          <div className={styles.trashWrapper}>
            <img
              className={styles.trashIcon}
              loading="lazy"
              alt=""
              src="/trash.svg"
            />
          </div>
          <div className={styles.trash}>Trash</div>
        </div>
      </div>
      <div className={styles.actions3}>
        <button className={styles.frameButton} id="button_logout">
          <div className={styles.boxarrowrightWrapper}>
            <img
              className={styles.boxarrowrightIcon}
              loading="lazy"
              alt=""
              src="/boxarrowright.svg"
            />
          </div>
          <div className={styles.logOut}>Log Out</div>
        </button>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;