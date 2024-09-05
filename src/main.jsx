import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.css";
import { BrowserRouter } from "react-router-dom";
import "./assets/font/poppins/Poppins-Regular.ttf";
import "./assets/font/cinzel-decorative/CinzelDecorative-Regular.ttf";
import "./assets/icons/style.css";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
