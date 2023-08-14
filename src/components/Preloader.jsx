import React from "react";
import Pl from "../assets/images/gif/preloader01.gif";
const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 4000);
  return (
    <>
      <div
        className="bg-black min_vh_100 w-100 d-flex align-items-center justify-content-center z_999"
        id="none"
      >
        <img className="preloader_style" src={Pl} alt="preloader" />
      </div>
    </>
  );
};

export default Preloader;
