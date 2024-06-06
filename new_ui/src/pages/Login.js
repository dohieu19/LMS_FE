import SignInForm from "../components/SignInForm";
import Password from "../components/Password";
import CheckBox from "../components/CheckBox";
import Signin from "../components/Signin";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <section className={styles.loginFormParent}>
        <div className={styles.loginForm} />
        <SignInForm />
        <Password />
        <div className={styles.checkBoxWrapper}>
          <CheckBox />
        </div>
        <Signin />
      </section>
    </div>
  );
};

export default Login;
