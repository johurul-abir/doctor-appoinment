import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Allappoientment = () => {
  const [allappoinment, setAllappoinment] = useState([]);

  console.log(allappoinment);

  //get all data
  const getAllAppoienments = async () => {
    const appointments = await axios.get("http://localhost:5050/appoinment");

    setAllappoinment(appointments.data.appoinment);
  };

  const handleUpdate = () => {};

  //delete appoinment
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
        axios.delete(`http://localhost:5050/appoinment/${id}`);
        location.reload(true);
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
    getAllAppoienments();
  }, []);

  return (
    <div className="crud my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="card" style={{ overflow: "hidden" }}>
              <div className="card-header">
                <Link to="/admin/createappoinment">
                  <button className="btn btn-warning">Add appoinment</button>
                </Link>
                <h2 className="text-center">All appoinment</h2>
              </div>
              <div className="card-body">
                <table className="table table-striped border">
                  <thead className="text-center">
                    <th>#</th>
                    <th>Date</th>
                    <th>Patient</th>
                    <th>Doctor</th>
                    <th>Reason</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {allappoinment?.map((item, index) => {
                      return (
                        <tr className="align-middle text-center" key={index}>
                          <td>{index + 1}</td>
                          <td>{item?.date}</td>
                          <td>{item?.patient.name}</td>
                          <td>{item?.doctor.name}</td>
                          <td> {item?.reason} </td>
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
  );
};

export default Allappoientment;
