import { Link, useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const CreateDoctor = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState();
  console.log(file);

  const { input, handleInputChange } = useForm({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    specialist: "",
    location: "",
    doctorphoto: "",
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
    form_data.append("specialist", input.specialist);
    form_data.append("location", input.location);
    form_data.append("gender", input.gender);
    form_data.append("doctorphoto", file);

    await axios.post("http://localhost:5050/doctor/", form_data);

    navigate("/admin/alldoctors");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Create Doctor successfull",
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
              to="/admin/alldoctors"
              type="button"
              className="btn btn-sm btn-info mb-1"
            >
              All Doctors
            </Link>
            <div className="card">
              <div className="card-header">
                <h4 className="text-center">Create patient</h4>
              </div>
              <div className="card-body">
                <form>
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
                    <label> Specialist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="specialist"
                      onChange={handleInputChange}
                      value={input.specialist}
                    />
                  </div>

                  <div className="item mb-2">
                    <label> Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      onChange={handleInputChange}
                      value={input.location}
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
                    <label> Upload photo </label>
                    <input
                      type="file"
                      className="form-control"
                      name="doctorphoto"
                      onChange={handlefileUpload}
                    />
                  </div>

                  <div className="item mb-2 w-50">
                    <button
                      type="submit"
                      className="btn btn-success w-50"
                      onClick={handleSubmitForm}
                    >
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

export default CreateDoctor;
