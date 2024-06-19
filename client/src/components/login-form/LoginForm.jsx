import { useNavigate } from "react-router-dom";
import "./Login.scss";
import useForm from "../../hooks/useForm";
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = () => {
  const navigate = useNavigate();
  const { input, handleInputChange, resetForm } = useForm({
    auth: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const loginPatient = await axios.post(
      "http://localhost:5050/auth/login",
      input
    );

    localStorage.setItem("loginPatient", JSON.stringify(loginPatient.data));
    resetForm();
    navigate("/");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login patient successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="form-bg vh-100">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8">
              <div className="card">
                <div className="card-header">
                  <h2>Login Patient</h2>
                </div>
                <div className="card-body">
                  <form action="">
                    <div className="item my-3">
                      <label> Auth</label>
                      <input
                        type="text"
                        className="form-control"
                        name="auth"
                        value={input.auth}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="item my-3">
                      <label> Password </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={input.password}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="item my-3">
                      <button
                        type="submit"
                        className="btn btn-success"
                        onClick={handleLoginSubmit}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
