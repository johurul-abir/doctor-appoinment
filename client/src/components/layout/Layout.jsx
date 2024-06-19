import { Helmet } from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctor appoinment</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Topbar />
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
