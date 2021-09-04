import React from "react";
import "./css/front.css";
import Topbar from "../shared/Topbar";
import Footer from "../shared/Footer";

const Front = ({ children }) => {
  return (
    <div>
      <Topbar></Topbar>
      <div className="pages">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Front;
