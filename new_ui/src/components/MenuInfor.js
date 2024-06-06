import PropTypes from "prop-types";
import styles from "./MenuInfor.module.css";

const MenuInfor = ({ className = "" }) => {
  return (
    <form className={[styles.menuInfor, className].join(" ")}>
      <div className={styles.inforFrame} />
      <h1 className={styles.fullName}>Full name</h1>
      <input
        className={styles.inputFullName}
        name="input_fullname"
        type="text"
      />
      <div className={styles.frameParent}>
        <div className={styles.roleParent}>
          <h1 className={styles.role}>Role</h1>
          <input className={styles.inputRole} type="text" />
          <h1 className={styles.email}>Email</h1>
          <input className={styles.inputEmail} name="input_email" type="text" />
          <h1 className={styles.birthday}>Birthday</h1>
          <input
            className={styles.inputBirthday}
            name="input_birthday"
            type="text"
          />
        </div>
        <button className={styles.save} id="button_save">
          <img
            className={styles.buttonSaveIcon}
            alt=""
            src="/rectangle-4.svg"
          />
          <b className={styles.save1}>Save</b>
        </button>
      </div>
    </form>
  );
};

MenuInfor.propTypes = {
  className: PropTypes.string,
};

export default MenuInfor;
