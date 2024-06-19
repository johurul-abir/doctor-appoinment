import { useEffect, useState } from "react";
import axios from "axios";
import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";

const TopDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [appmodal, setAppmodal] = useState(false);
  const [doctor, setDoctor] = useState();

  //get all data
  const getAllDoctors = async () => {
    const doctor = await axios.get("http://localhost:5050/doctor");

    setAllDoctors(doctor.data.doctor);
  };

  const handleClick = (id) => {
    setAppmodal(true);

    setDoctor(id);
  };

  const logedinPatient = JSON.parse(localStorage.getItem("loginPatient"));

  let { input, handleInputChange } = useForm({
    date: "",
    doctorId: "",
    patientId: logedinPatient?.data?.id,
    reason: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (logedinPatient) {
      await axios.post(
        "http://localhost:5050/appoinment",
        (input = {
          ...input,
          doctorId: doctor,
        })
      );
      setAppmodal(false);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Create Appoinment successfull",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);
  return (
    <>
      <Modal show={appmodal}>
        <ModalHeader>
          Appoinment Now
          <CloseButton onClick={() => setAppmodal(false)} />
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
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Top Doctors
            </p>
          </div>

          <div className="row g-4">
            {allDoctors?.map((item, index) => {
              return (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={index}
                >
                  <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                      <img className="img-fluid" src={item?.photo} alt="" />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <h5> {item?.name} </h5>
                      <p className="text-primary">{item?.specialist}</p>
                      <div className="team-social text-center">
                        <button
                          className="btn btn-info"
                          onClick={() => handleClick(item.id)}
                        >
                          Appoinent Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  );
};

export default TopDoctors;
