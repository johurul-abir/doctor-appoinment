import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";

const Appoinment = () => {
  const navigate = useNavigate();

  const [allDoctors, setAllDoctors] = useState([]);
  const [allPatient, setAllPatient] = useState([]);

  //get all doctor
  const getAllDoctors = async () => {
    const doctor = await axios.get("http://localhost:5050/doctor");

    setAllDoctors(doctor.data.doctor);
  };

  //get all patient
  const getAllPatient = async () => {
    const patient = await axios.get("http://localhost:5050/patient");

    setAllPatient(patient.data.patient);
  };

  const { input, handleInputChange } = useForm({
    date: "",
    doctorId: "",
    patientId: "",
    reason: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5050/appoinment", input);
    navigate("/admin/allappoinment");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Create Appoinment successfull",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    getAllDoctors();
    getAllPatient();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4 className="text-center">Create new appoinment</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="item mb-2">
                    <label> Date </label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      onChange={handleInputChange}
                      value={input.date}
                    />
                  </div>
                  <div className="item mb-2">
                    <label> Find Doctor </label>
                    <select
                      className="form-control"
                      name="doctorId"
                      onChange={handleInputChange}
                      value={input.doctorId}
                    >
                      <option>--Doctor--</option>

                      {allDoctors?.map((item) => {
                        return (
                          <>
                            <option value={item.id}> {item.name} </option>
                          </>
                        );
                      })}
                    </select>
                  </div>

                  <div className="item mb-2">
                    <label> Patient </label>
                    <select
                      className="form-control"
                      name="patientId"
                      onChange={handleInputChange}
                      value={input.patientId}
                    >
                      <option value="">--Patient--</option>

                      {allPatient?.map((item) => {
                        return (
                          <>
                            <option value={item.id}> {item.name} </option>
                          </>
                        );
                      })}
                    </select>
                  </div>

                  <div className="item mb-2">
                    <label> Reason </label>
                    <textarea
                      type="text"
                      className="form-control"
                      rows="4"
                      name="reason"
                      onChange={handleInputChange}
                      value={input.reason}
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

export default Appoinment;
