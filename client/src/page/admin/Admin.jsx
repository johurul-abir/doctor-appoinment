import { Link, Outlet } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Admin.scss";

const Admin = () => {
  return (
    <>
      <div className="admin">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4">
            <div className="left-admin-menu">
              <h5 className="admin-title">
                <Link to="/admin">Admin menu</Link>
              </h5>
              <div className="admin-menus">
                <ul>
                  <Link
                    style={{ padding: "0", color: "#fff", margin: "0" }}
                    to="/admin"
                  >
                    <li style={{ padding: "5px 5px 5px 25px" }}>Dashboard</li>
                  </Link>

                  <li>
                    <Dropdown className="dropdwonbtn w-100">
                      <Dropdown.Toggle id="dropdown-basic" className="w-100">
                        Patient
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="createpatient">
                          Create Patient
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="allpatient">
                          All Patient
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li>
                    <Dropdown className="dropdwonbtn w-100">
                      <Dropdown.Toggle id="dropdown-basic" className="w-100">
                        Doctor
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="createdoctor">
                          Create Doctor
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="alldoctors">
                          All Doctor
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li>
                    <Dropdown className="dropdwonbtn w-100">
                      <Dropdown.Toggle id="dropdown-basic" className="w-100">
                        Appoinment
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="createappoinment">
                          Create Appoinment
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="allappoinment">
                          All Appoinment
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-8 my-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
