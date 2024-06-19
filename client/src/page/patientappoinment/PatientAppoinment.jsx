import axios from "axios";
import { useEffect, useState } from "react";

const PatientAppoinment = () => {
  const [appoinments, setAppoinments] = useState([]);

  console.log(appoinments);

  //find login user id
  const loginPatientData = JSON.parse(localStorage.getItem("loginPatient"));
  const loginUserId = loginPatientData?.data?.id;

  const getAllAppoinments = async () => {
    const data = await axios.get("http://localhost:5050/appoinment");

    const appoinmentData = data?.data?.appoinment;

    const findData = appoinmentData?.filter((item) => {
      return item.patientId == loginUserId;
    });

    setAppoinments(findData);
  };

  useEffect(() => {
    getAllAppoinments();
  }, []);
  return (
    <>
      <section className="mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h3>Appoinment History</h3>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Doctor</th>
                        <th>Specialist</th>
                        <th>Reason</th>
                        <th>Aciton</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appoinments?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td> {1 + index} </td>
                            <td>{item.date} </td>
                            <td>{item?.doctor?.name} </td>
                            <td>{item?.doctor?.specialist} </td>
                            <td> {item.reason} </td>
                            <td>
                              <button className="btn btn-sm btn btn-danger">
                                Cencel
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
      </section>
    </>
  );
};

export default PatientAppoinment;
