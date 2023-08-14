import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import ballon from "../assets/images/png/BALLON_VEC.png";
const Howitworks = () => {
  return (
    <>
      <section className="position-relative py-5 mt-lg-5 position-relative" id="howitwork">
        <div className="ballon_vec">
          <img className="d-lg-block d-none" src={ballon} alt="ballon" />
        </div>
        <h2 className="ff_lato color_white fs_xl fw-bold text-center">
          How it <span className="color_skin">works</span>
        </h2>
        <Container>
          <Row className="pt-5">
            <Col lg={3} md={4} sm={6} className="p-2" data-aos="fade-up">
              <div className="hiw_card d-flex flex-column align-items-center  bg-black p-2 p-xl-4 transition_300ms h-100">
                <h3 className="ff_lato color_white fw-bold fs_md d-inline-block p-4 radius_50 text-center  bg_skin mt-3 ">
                  01
                </h3>
                <p className="text-center color_white fs_2xmd fw-bold pt-4">
                  Mint NFT
                </p>
                <p className="text-center color_white ff_lato fs_xsm pt-2">
                  You must own our NFT to connect to direct management or
                  participate in governance
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="p-2" data-aos="fade-up">
              <div className="hiw_card d-flex flex-column align-items-center justify-content-between p-2 p-xl-4 transition_300ms h-100">
                <h3 className="ff_lato color_white fw-bold fs_md d-inline-block p-4 radius_50 text-center  bg_skin mt-3 ">
                  02
                </h3>
                <p className="text-center color_white fs_2xmd fw-bold pt-4">
                  Verify NFT Ownership
                </p>
                <p className="text-center color_white ff_lato fs_xsm pt-2">
                  Only Cyber Drops that are have verified are eligible to be
                  connected under direct management
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="p-2" data-aos="fade-up">
              <div className="hiw_card d-flex flex-column align-items-center justify-content-between p-2 p-xl-4 transition_300ms h-100">
                <h3 className="ff_lato color_white fw-bold fs_md d-inline-block p-4 radius_50 text-center  bg_skin mt-3 ">
                  03
                </h3>
                <p className="text-center color_white fs_2xmd fw-bold pt-4">
                  Link API to your account
                </p>
                <p className="text-center color_white ff_lato fs_xsm pt-2">
                  Only HODLers that submit their API key and secret will be
                  under direct management
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className="p-2" data-aos="fade-up">
              <div className="hiw_card d-flex flex-column align-items-center justify-content-between p-2 p-xl-4 transition_300ms h-100">
                <h3 className="ff_lato color_white fw-bold fs_md d-inline-block p-4 radius_50 text-center  bg_skin mt-3 ">
                  04
                </h3>
                <p className="text-center color_white fs_2xmd fw-bold pt-4 ">
                  Passive Income for life
                </p>
                <p className="text-center fs_xsm color_white ff_lato pt-2 ">
                  As long as your HODL your Cyber Drop, you will be connected
                  under direct management
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Howitworks;
