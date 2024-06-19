import { Link, useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const CreatePatient = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const { input, handleInputChange } = useForm({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    photo: "",
    password: "",
  });

  const handlefileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("email", input.email);
    form_data.append("phone", input.phone);
    form_data.append("age", input.age);
    form_data.append("gender", input.gender);
    form_data.append("password", input.password);
    form_data.append("patientphoto", file);

    await axios.post("http://localhost:5050/patient/", form_data);
    navigate("/admin/allpatient");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Create patient successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <Link
              to="/admin/allpatient"
              type="button"
              className="btn btn-sm btn-info mb-1"
            >
              all patient
            </Link>
            <div className="card">
              <div className="card-header">
                <h4 className="text-center">Create patient</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmitForm}>
                  <div className="item mb-2">
                    <label> Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={handleInputChange}
                      value={input.name}
                    />
                  </div>

                  <div className="item mb-2">
                    <label> Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={handleInputChange}
                      value={input.email}
                    />
                  </div>

                  <div className="item mb-2">
                    <label> Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={handleInputChange}
                      value={input.password}
                    />
                  </div>

                  <div className="item mb-2">
                    <label> Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      onChange={handleInputChange}
                      value={input.phone}
                    />
                  </div>

                  <div className="item mb-2">
                    <label> Age</label>
                    <input
                      type="text"
                      className="form-control"
                      name="age"
                      onChange={handleInputChange}
                      value={input.age}
                    />
                  </div>

                  <div className="item mb-2">
                    <label> Gender</label>
                    <select
                      className="form-control"
                      name="gender"
                      onChange={handleInputChange}
                      value={input.gender}
                    >
                      <option value="">--select--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </div>

                  <div className="item mb-2">
                    <label> Select Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      name="patientphoto"
                      onChange={handlefileUpload}
                    />
                  </div>

                  <div className="item mb-2 w-50">
                    <button type="submit" className="btn btn-success w-50">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePatient;
