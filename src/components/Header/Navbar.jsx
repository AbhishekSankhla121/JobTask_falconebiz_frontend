import { useEffect } from "react";
import "./Navbar.css";
import { useLocation, Link } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  useEffect(() => { }, [location]);
  return (
    <>
      <header className="nav-header">
        <nav className="space-between">
          <div className="left">
            <ul className="flex-row">
              <Link to={"/"}>
                <img
                  src={"/utils/logo.png"}
                  alt="logo"
                  className="image-logo"
                />
              </Link>
              <Link to={"/"}>
                <li
                  className={`list-item ${location.pathname === "/" ? "underline" : ""
                    }`}
                >
                  Home
                </li>
              </Link>
              <Link to={"/data"}>
                <li
                  className={`list-item ${location.pathname === "/data" ? "underline" : ""
                    }`}
                >
                  getAllUserData
                </li>
              </Link>
            </ul>
          </div>
          <div className="right">
            <ul className="flex-row">
              <Link to={"/login"}>
                <li
                  className={`list-item ${location.pathname === "/login" ? "underline" : ""
                    }`}
                >
                  Login
                </li>
              </Link>
              <Link to={"/signup"} className={``}>
                <li
                  className={`list-item ${location.pathname === "/signup" ? "underline" : ""
                    }`}
                >
                  Signup
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
