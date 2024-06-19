import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import Swal from "sweetalert2";
import avater from "../../../../assets/img/avater.png";

const AllPatient = () => {
  const [allpatient, setAllpatient] = useState([]);

  const [singlepatient, setSingleptient] = useState();

  //single Model
  const [singleModal, setSingleModal] = useState(false);

  //update Model
  const [updateModal, setUpdateModal] = useState(false);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5050/patient/${id}`);
        location.reload(true);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //get single data
  const handleSinglePatient = async (id) => {
    const singlePatient = await axios.get(
      `http://localhost:5050/patient/${id}`
    );
    setSingleptient(singlePatient.data.patient);
    setSingleModal(true);
  };

  //get all data
  const getAllPatient = async () => {
    const patient = await axios.get("http://localhost:5050/patient");
    setAllpatient(patient.data.patient);
  };

  const [updata, setUpdata] = useState();

  //update data
  const handleUpdate = async (id) => {
    const finddata = allpatient.find((item) => item.id === id);
    setUpdata(finddata);

    //const updata = await axios.patch(`http://localhost:5050/patient/${id}`);
    setUpdateModal(true);
  };
  const handleInputChange = () => {};
  useEffect(() => {
    getAllPatient();
  }, []);

  return (
    <>
      {/* single data modal */}
      <Modal show={singleModal}>
        <ModalHeader>
          Signle Patient
          <CloseButton onClick={() => setSingleModal(false)} />
        </ModalHeader>
        <ModalBody>
          <div className="continer">
            <table className="w-100">
              <tr>
                <td rowSpan={5}>
                  {" "}
                  <img
                    src={singlepatient?.photo ?? avater}
                    width="120px"
                    alt=""
                  />
                </td>
                <td> Name: {singlepatient?.name} </td>
              </tr>
              <tr>
                <td>Email: {singlepatient?.email} </td>
              </tr>
              <tr>
                <td>Phone: {singlepatient?.phone}</td>
              </tr>
              <tr>
                <td>Age: {singlepatient?.age}</td>
              </tr>
              <tr>
                <td>Gender: {singlepatient?.gender}</td>
              </tr>
              <tr>
                <td>Appoinment</td>
                <td>{singlepatient?.appionment}</td>
              </tr>
              <tr>
                <td>Appoinment History</td>
                <td>.{singlepatient?.history}.</td>
              </tr>
            </table>
          </div>
        </ModalBody>
      </Modal>

      {/* Update Modal */}
      <Modal show={updateModal}>
        <ModalHeader>
          Update Patient
          <CloseButton onClick={() => setUpdateModal(false)} />
        </ModalHeader>
        <ModalBody>
          <form action="">
            <div className="item mb-2">
              <label> Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={updata?.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="item mb-2">
              <label> Email</label>
              <input type="text" className="form-control" />
            </div>

            <div className="item mb-2">
              <label> Phone</label>
              <input type="text" className="form-control" />
            </div>

            <div className="item mb-2">
              <label> Age</label>
              <input type="text" className="form-control" />
            </div>

            <div className="item mb-2">
              <label> Gender</label>
              <input type="text" className="form-control" />
            </div>

            <div className="item mb-2 w-50">
              <button type="submit" className="btn btn-success w-50">
                Create
              </button>
            </div>
          </form>
        </ModalBody>
      </Modal>

      <div className="crud my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="card" style={{ overflow: "hidden" }}>
                <div className="card-header">
                  <Link to="/admin/createpatient">
                    <button className="btn btn-warning">Add Patient</button>
                  </Link>
                  <h2 className="text-center">All Patient</h2>
                </div>
                <div className="card-body">
                  <table className="table table-striped border">
                    <thead className="text-center">
                      <th>#</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Ap-History</th>
                      <th>age</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      {allpatient?.map((item, index) => {
                        return (
                          <tr className="align-middle text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>
                              {item?.photo ? (
                                <img
                                  src={item?.photo}
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                    border: "2px solid #31D2F2",
                                  }}
                                />
                              ) : (
                                <img
                                  src={avater}
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                    border: "2px solid #31D2F2",
                                  }}
                                />
                              )}
                            </td>
                            <td>{item?.name}</td>
                            <td>{item?.email}</td>
                            <td>{item?.phone}</td>
                            <td> {item?.histroy} </td>
                            <td> {item?.age} </td>
                            <td>
                              <button
                                className="btn btn-sm btn btn-info m-1"
                                onClick={() => handleUpdate(item.id)}
                              >
                                <CiEdit />
                              </button>
                              <button
                                className="btn btn-sm btn btn-danger m-1"
                                onClick={() => handleDelete(item.id)}
                              >
                                <MdDeleteSweep />
                              </button>
                              <button
                                className="btn btn-sm btn btn-primary m-1"
                                onClick={() => handleSinglePatient(item.id)}
                              >
                                <AiOutlineEyeInvisible />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPatient;
