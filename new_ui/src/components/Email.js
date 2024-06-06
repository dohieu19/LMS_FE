import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./Email.module.css";

const Email = memo(({ className = "" }) => {
  return (
    <input
      className={[styles.email, className].join(" ")}
      name="email"
      id="email"
      type="email"
    />
  );
});

Email.propTypes = {
  className: PropTypes.string,
};

export default Email;
