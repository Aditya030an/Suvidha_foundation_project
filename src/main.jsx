import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Components/utils/Store/store.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Router,
} from "react-router-dom";
import Gallary from "./Components/main/Gallary.jsx";
import OurDoner from "./Components/main/OurDoner.jsx";
import Testimonials from "./Components/main/Testimonials.jsx";
import HelpNow from "./Components/main/HelpNow.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/gallary"} element={<Gallary />} />
          <Route path={"/ourDoner"} element={<OurDoner />} />
          <Route path={"/testimonials"} element={<Testimonials />} />
          <Route path={"/helpNow"} element={<HelpNow/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </StrictMode>
    ,
  </Provider>
);
