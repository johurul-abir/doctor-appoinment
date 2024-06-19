import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import avater from "../../../../assets/img/avater.png";
import Swal from "sweetalert2";

const AllDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  //get all data
  const getAllDoctors = async () => {
    const doctor = await axios.get("http://localhost:5050/doctor");

    setAllDoctors(doctor.data.doctor);
  };

  //handle delete
  const handleUpdate = () => {};

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
        axios.delete(`http://localhost:5050/doctor/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleSinglePatient = () => {};

  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <>
      <div className="crud my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="card" style={{ overflow: "hidden" }}>
                <div className="card-header">
                  <Link to="/admin/createdoctor">
                    <button className="btn btn-warning">Add Doctor</button>
                  </Link>
                  <h2 className="text-center">All Doctors </h2>
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
                      {allDoctors?.map((item, index) => {
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

export default AllDoctors;
