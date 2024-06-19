import "./App.css";
import "./../temp/template/css/bootstrap.min.css/";
import "./../temp/template/css/style.css/";
import "./../temp/template/lib/animate/animate.min.css";
import "./../temp/template/lib/owlcarousel/assets/owl.carousel.min.css";
import "./../temp/template/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "./../temp/template/css/bootstrap.min.css";
import "./../temp/template/css/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
