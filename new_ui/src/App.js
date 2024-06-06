import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import OTP from "./pages/OTP";
import Settings from "./pages/Settings";
import Infomation from "./pages/Infomation";
import UserManagement from "./pages/UserManagement";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-password":
        title = "";
        metaDescription = "";
        break;
      case "/otp":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/infomation":
        title = "";
        metaDescription = "";
        break;
      case "/user-management":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/infomation" element={<Infomation />} />
      <Route path="/user-management" element={<UserManagement />} />
    </Routes>
  );
}
export default App;