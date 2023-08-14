import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import wwd_1 from "../assets/images/png/wwd_1.png";
import wwd_2 from "../assets/images/png/wwd_2.png";
import wwd_3 from "../assets/images/png/wwd_3.png";
import wwd_4 from "../assets/images/png/wwd_3.png";
const WhatWeDo = () => {
  return (
    <>
      <section className="py-5 mt-lg-5 position-relative">
        <div className="ellipse left_ellipse scale_animation"></div>
        <Container>
          <Row className="align-items-center justify-content-between flex_column_reverse">
            <Col lg={6} data-aos="zoom-out">
              <div className="d-flex flex-column ">
                <div className="d-flex align-items-center">
                  <div className="wwd_card transition_300ms ">
                    <img className="w-100" src={wwd_1} alt="wwd" />
                  </div>
                  <div className="wwd_card transition_300ms ">
                    <img className="w-100" src={wwd_2} alt="wwd" />
                  </div>
                </div>
                <div className="d-flex align-items-center translate-x-25 margin_top_20 ">
                  <div className="wwd_card transition_300ms ">
                    <img className="w-100" src={wwd_3} alt="wwd" />
                  </div>
                  <div className="wwd_card transition_300ms ">
                    <img className="w-100" src={wwd_4} alt="wwd" />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} data-aos="zoom-out-down">
              <h2 className="ff_lato color_white fs_xl fw-bold">
                What <span className="color_skin">we do </span>
              </h2>
              <p className="ff_lato color_white fs_sm pt-3">
                1000 Cyber Drops will be dropping on Ethereum in March 2022.
                Each and every Cyber Drop is uniquely hand crafted. This is just
                the beginning of our journey. Owning a Cyber Drop will unlock
                monthly airdrops and future governance rights in addition to our
                revolutionary algorithm. We strive to always bring innovation
                and keep BUILDing. Cyber Drops is a community driven project and
                always will be that way. That’s our promise.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhatWeDo;
