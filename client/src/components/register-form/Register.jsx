import axios from "axios";

import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();

  const { input, handleInputChange, resetForm } = useForm({
    name: "",
    auth: "",
    password: "",
  });

  const handleSubmit = async () => {
    await axios.post("http://localhost:5050/auth/register", input);
    resetForm();
    navigate("/login");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Register patient successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-10 col-xl-8">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              value={input.name}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              name="auth"
                              value={input.auth}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email/Phone
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              value={input.password}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
