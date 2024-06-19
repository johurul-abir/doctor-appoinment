import { useEffect, useState } from "react";
import bannarphoto from "./../../assets/img/carousel-1.jpg";
import "./Bannar.scss";
import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";

const Bannar = () => {
  const navigate = useNavigate();

  const [allDoctors, setAllDoctors] = useState([]);

  const [appModal, setAppModal] = useState(false);
  const loginPatient = JSON.parse(localStorage.getItem("loginPatient"));

  //get all doctor
  const getAllDoctors = async () => {
    const doctor = await axios.get("http://localhost:5050/doctor");

    setAllDoctors(doctor.data.doctor);
  };

  const { input, handleInputChange } = useForm({
    date: "",
    doctorId: "",
    patientId: loginPatient?.data?.id,
    reason: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5050/appoinment", input);
    navigate("/patient-appointments");
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
  }, []);

  return (
    <>
      {/* Appoinment Modal */}
      <Modal show={appModal}>
        <ModalHeader>
          Appoinment now
          <CloseButton onClick={() => setAppModal(false)} />
        </ModalHeader>

        <ModalBody>
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
        </ModalBody>
      </Modal>

      {/* Header Start */}
      <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white mb-5">
              Good Health Is The Root Of All Heppiness
            </h1>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    123
                  </h2>
                  <p className="text-light mb-0">Expert Doctors</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    1234
                  </h2>
                  <p className="text-light mb-0">Medical Stuff</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-light ps-4">
                  <h2 className="text-white mb-1" data-toggle="counter-up">
                    12345
                  </h2>
                  <p className="text-light mb-0">Total Patients</p>
                </div>
              </div>
            </div>

            <div className="appoinment_btn">
              <button
                className="btn btn-warning p-3"
                onClick={() => setAppModal(true)}
              >
                {" "}
                Appoinment now{" "}
              </button>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <img className="img-fluid" src={bannarphoto} alt="" />
          </div>
        </div>
      </div>

      {/* Header End */}
    </>
  );
};

export default Bannar;
