import { useCallback } from "react";
import Content from "../components/Content";
import styles from "./UserManagement.module.css";

const UserManagement = () => {
  const onAddLeacherClick = useCallback(() => {
    // Please sync "Add Leacher" to the project
  }, []);

  const onAddStudentClick = useCallback(() => {
    // Please sync "Add Student" to the project
  }, []);

  return (
    <div className={styles.userManagement}>
      <main className={styles.main}>
        <div className={styles.background} />
        <div className={styles.sidebar}>
          <div className={styles.navHeader}>
            <div className={styles.navUserProfile}>
              <div className={styles.navUser}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group1@2x.png"
                />
              </div>
              <div className={styles.navUserName}>
                <button className={styles.nguyenThaiSon} id="button_user">
                  Nguyen Thai Son
                </button>
                <div className={styles.navUserRole}>
                  <div className={styles.admin}>Admin</div>
                </div>
              </div>
            </div>
          </div>
          <Content />
        </div>
        <div className={styles.addButtonsWrapper}>
          <div className={styles.addButtons}>
            <button className={styles.addLeacher} onClick={onAddLeacherClick}>
              <div className={styles.addLeacherChild} />
              <div className={styles.addLabels}>
                <div className={styles.addPeople}>
                  <img
                    className={styles.peopleIcon}
                    alt=""
                    src="/people-1.svg"
                  />
                  <div className={styles.addLeacherLabel}>
                    <div className={styles.addLeacher1}>Add Leacher</div>
                  </div>
                </div>
              </div>
              <img
                className={styles.backwardIcon}
                alt=""
                src="/backward@2x.png"
              />
            </button>
            <button className={styles.addStudent} onClick={onAddStudentClick}>
              <div className={styles.addStudentChild} />
              <div className={styles.peopleParent}>
                <img
                  className={styles.peopleIcon1}
                  alt=""
                  src="/people-1.svg"
                />
                <input
                  className={styles.addStudent1}
                  placeholder="Add Student"
                  type="text"
                />
              </div>
              <img
                className={styles.backwardIcon1}
                alt=""
                src="/backward-11@2x.png"
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
