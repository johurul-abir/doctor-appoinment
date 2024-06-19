import { Link } from "react-router-dom";
import Appoinment from "../../../../components/appoinment/Appoinment";

const CreateAppoinment = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-6">
            <Link
              to="/admin/allappoinment"
              type="button"
              className="btn btn-sm btn-info mb-1"
            >
              all appoinment
            </Link>
            <Appoinment />;
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAppoinment;
