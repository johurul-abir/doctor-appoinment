import { IoLocation } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Topbar = () => {
  return (
    <>
      {/* Topbar Start */}
      <div
        className="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <IoLocation className="text-primary me-2" />
              <small>Mirpur Cantonment, Dhaka, Bangladesh</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <CiClock2 className="text-primary me-2" />

              <small> 7days 24 Hours</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <FaPhoneAlt className="text-primary" />
              <small>+880 1959609081</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href=""
              >
                <FaFacebookF />
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href=""
              >
                <FaXTwitter />
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href=""
              >
                <FaLinkedinIn />
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-0"
                href=""
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
};

export default Topbar;
