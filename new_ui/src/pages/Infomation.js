import MenuInfor from "../components/MenuInfor";
import styles from "./Infomation.module.css";

const Infomation = () => {
  return (
    <div className={styles.infomation}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <div className={styles.frameParent}>
            <div className={styles.maskGroupWrapper}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
            <div className={styles.nguyenThaiSonParent}>
              <button className={styles.nguyenThaiSon} id="button_user">
                Nguyen Thai Son
              </button>
              <div className={styles.adminWrapper}>
                <a className={styles.admin}>Admin</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <button
              className={styles.frameContainer}
              id="button_changepassword"
            >
              <div className={styles.changePasswordWrapper}>
                <img
                  className={styles.changePasswordIcon}
                  loading="lazy"
                  alt=""
                  src="/change-password.svg"
                />
              </div>
              <div className={styles.changePassword}>Change Password</div>
            </button>
          </div>
          <div className={styles.inforParent}>
            <button className={styles.infor} id="button_information">
              <img
                className={styles.inforIcon}
                loading="lazy"
                alt=""
                src="/infor.svg"
              />
              <div className={styles.information}>Information</div>
            </button>
            <button className={styles.frameButton} id="button_logout">
              <div className={styles.frameDiv}>
                <div className={styles.boxarrowrightWrapper}>
                  <img
                    className={styles.boxarrowrightIcon}
                    loading="lazy"
                    alt=""
                    src="/boxarrowright.svg"
                  />
                </div>
                <a className={styles.logOut}>Log Out</a>
              </div>
            </button>
          </div>
        </div>
      </div>
      <section className={styles.menuInforWrapper}>
        <MenuInfor />
      </section>
    </div>
  );
};

export default Infomation;
