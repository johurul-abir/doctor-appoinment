import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import { FaAngleDown } from "react-icons/fa6";
import avater from "../../assets/img/avater.png";
import Swal from "sweetalert2";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loginPatient = JSON.parse(localStorage.getItem("loginPatient"));

  const handleLogOut = () => {
    localStorage.removeItem("loginPatient");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logout Successfull",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <>
      <>
        {/* Navbar Start */}
        <nav
          className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <h1 className="m-0 text-primary">DocZone</h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link
                to="/"
                className="nav-item nav-link"
                id={location.pathname == "/" ? "active" : undefined}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-item nav-link"
                id={location.pathname == "/about" ? "active" : undefined}
              >
                About
              </Link>
              <Link
                to="/service"
                className="nav-item nav-link"
                id={location.pathname == "/service" ? "active" : undefined}
              >
                Service
              </Link>

              <Link
                to="/contact"
                className="nav-item nav-link"
                id={location.pathname == "/contact" ? "active" : undefined}
              >
                Contact
              </Link>
            </div>
            <div className="authentic">
              <ul>
                {loginPatient ? (
                  <>
                    <div className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <li className="profileBox">
                          <img
                            src={loginPatient?.data?.photo ?? avater}
                            alt=""
                            className="profileImage"
                          />
                          <FaAngleDown />
                        </li>
                      </a>
                      <div className="dropdown-menu rounded-0 rounded-bottom mr-5">
                        <h5
                          href="feature.html"
                          className="dropdown-item bg-primary text-light"
                        >
                          {loginPatient?.data?.name}
                        </h5>
                        <Link className="dropdown-item">My profile</Link>
                        <Link
                          to="patient-appointments"
                          className="dropdown-item"
                        >
                          My appointments
                        </Link>
                        <p className="dropdown-item" onClick={handleLogOut}>
                          Logout
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <li style={{ fontWeight: "600" }}>
                      <Link to="/register">Register now</Link>
                    </li>
                    <li>
                      <Link className="login" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
      </>
    </>
  );
};

export default Header;
