import React from "react";
import roadline from "../assets/images/png/roadmapline.png";
import r1 from "../assets/images/png/r_1.png";
import r2 from "../assets/images/png/r_2.png";
import r3 from "../assets/images/png/r_3.png";
import r4 from "../assets/images/png/r_4.png";
import r5 from "../assets/images/png/r_5.png";
import r6 from "../assets/images/png/r_6.png";
import r7 from "../assets/images/png/r_7.png";
import r8 from "../assets/images/png/r_8.png";
import rightline from "../assets/images/png/roadline_short.png";
import leftline from "../assets/images/png/shortline2.png";
import roadvec_1 from "../assets/images/png/roadmap_vec1.png";
import roadvec_2 from "../assets/images/png/roadmap_vec2.png";
const Roadmap = () => {
  return (
    <>
      <h2 className="text-center ff_lato fw-bold fs_xl color_white mt-5 position-relative z-2  pt-5">
        Road<span className="color_skin">Map</span>
      </h2>
      <section
        className="roadmap_bg py-5 position-relative my-5"id="roadmap"
        data-aos="fade-up"
      >
        <img className="roadvec_1" src={roadvec_1} alt="" />
        <img className="roadvec_2" src={roadvec_2} alt="" />
        <div className="layer"></div>
        <div className="layer2"></div>
        <div className="layer3"></div>
        <div className="layer4"></div>
        <div className="d-flex align-items-center justify-content-lg-center justify-content-start ps-lg-0 ps-5 z-0 position-relative py-5">
          <img src={roadline} alt="roadline" />

          <div className="d-flex flex-column align-items-center justify-content-center z-1 py-3">
            <div className="roadballon-1 z-1">
              <img src={r1} alt="" />
            </div>
            <div className="right_line d-xl-block d-none">
              <img src={rightline} alt="rightline" />
            </div>
            <div className="content-1 d-flex justify-content-start flex-column">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                March 2022
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                1000 Drops Launch on Ethereum
              </p>
            </div>
            <div className="roadballon-2 z-1">
              <img src={r2} alt="" />
            </div>
            <div className="left_line  d-none d-xl-block">
              <img src={leftline} alt="rightline" />
            </div>
            <div className="content-2 d-flex flex-column justify-content-end align-items-lg-end align-items-start">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                March 2022
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                1000 Drops Launch on Ethereum
              </p>
            </div>
            <div className="roadballon-3 z-1">
              <img src={r3} alt="" />
            </div>
            <div className="right_line_2 d-xl-block d-none">
              <img src={rightline} alt="" />
            </div>
            <div className="content-3 d-flex justify-content-start  flex-column">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                March 2022
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                Creation of Treasury
              </p>
            </div>
            <div className="roadballon-4 z-1">
              <img src={r4} alt="" />
            </div>
            <div className="left_line_2 d-none d-xl-block">
              <img src={leftline} alt="rightline" />
            </div>
            <div className="content-4 d-flex flex-column justify-content-end align-items-lg-end align-items-start">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                April 2022
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                Our First Airdrop
              </p>
            </div>
            <div className="roadballon-5 z-1">
              <img src={r5} alt="" />
            </div>
            <div className="right_line_3 d-xl-block d-none">
              <img src={rightline} alt="" />
            </div>
            <div className="content-5 d-flex justify-content-start  flex-column">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                June 2022
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                Major Collabs
              </p>
            </div>
            <div className="roadballon-6 z-1">
              <img src={r6} alt="" />
            </div>
            <div className="left_line_3 d-none d-xl-block">
              <img src={leftline} alt="rightline" />
            </div>
            <div className="content-6 d-flex flex-column justify-content-end align-items-lg-end align-items-start">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                Sometime in Q3
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                Cyber Celebs come on Ethereum
              </p>
            </div>
            <div className="roadballon-7 z-1">
              <img src={r7} alt="" />
            </div>
            <div className="content-7 d-flex justify-content-start  flex-column">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                Sometime in Q3
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                Streetwear + Merch
              </p>
            </div>
            <div className="right_line_4 d-xl-block d-none">
              <img src={rightline} alt="" />
            </div>
            <div className="roadballon-8 z-1">
              <img src={r8} alt="" />
            </div>
            <div className="content-8 d-flex flex-column justify-content-end align-items-lg-end align-items-start">
              <h2 className="color_white ff_lato fw-semibold fs_xmd">
                Sometime in Q4
              </h2>
              <p className="color_white ff_lato fw-normal fs_xsm pt-2">
                Enhanced Partnerships
              </p>
            </div>
            <div className="left_line_4 d-none d-xl-block">
              <img src={leftline} alt="rightline" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
