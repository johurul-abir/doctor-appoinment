import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../page/home/Home";
import Admin from "../page/admin/Admin";
import CreatePatient from "../page/admin/page/patient/CreatePatient";
import AllPatient from "../page/admin/page/patient/AllPatient";
import AllDoctors from "../page/admin/page/doctor/AllDoctors";
import CreateDoctor from "../page/admin/page/doctor/CreateDoctor";
import CreateAppoinment from "../page/admin/page/appoienment/CreateAppoinment";
import Allappoientment from "../page/admin/page/appoienment/Allappoientment";
import LoginForm from "../components/login-form/LoginForm";
import Register from "../components/register-form/Register";
import PatientAppoinment from "../page/patientappoinment/PatientAppoinment";
import About from "../page/about/About";
import Service from "../page/service/Service";
import Contact from "../page/contactus/Contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/patient-appointments",
        element: <PatientAppoinment />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "createpatient",
            element: <CreatePatient />,
          },
          {
            path: "allpatient",
            element: <AllPatient />,
          },
          {
            path: "alldoctors",
            element: <AllDoctors />,
          },
          {
            path: "createdoctor",
            element: <CreateDoctor />,
          },
          {
            path: "createappoinment",
            element: <CreateAppoinment />,
          },
          {
            path: "allappoinment",
            element: <Allappoientment />,
          },
        ],
      },
    ],
  },
]);

//export default
export default router;
