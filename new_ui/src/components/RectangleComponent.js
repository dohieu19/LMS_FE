import PropTypes from "prop-types";
import styles from "./RectangleComponent.module.css";

const RectangleComponent = ({ className = "" }) => {
  return (
    <input
      className={[styles.password, className].join(" ")}
      name="password"
      id="password"
      type="password"
    />
  );
};

RectangleComponent.propTypes = {
  className: PropTypes.string,
};

export default RectangleComponent;
