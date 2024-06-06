import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Signin.module.css";

const Signin = ({ className = "" }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <button className={[styles.signin, className].join(" ")}>
      <img
        className={styles.siginButtonIcon}
        alt=""
        src="/rectangle-41@2x.png"
        data-animate-on-scroll
      />
      <b className={styles.signIn}>Sign In</b>
    </button>
  );
};

Signin.propTypes = {
  className: PropTypes.string,
};

export default Signin;
