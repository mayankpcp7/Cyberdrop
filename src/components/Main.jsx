import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import header from "../assets/images/png/header_pic.png";
import Aos from "aos";
const Main = () => {
  Aos.init();
  return (
    <>
      <section className="position-relative mt-5">
        <div className="ellipse right_ellipse scale_animation"></div>
        <Container>
          <Row className="justify-content-between">
            <Col lg={6}>
              <h1 className="ff_lato color_white fs_xxl fw-bolder mw_411px">
                Welcome to <span className="color_skin">Cyber Drops </span>
              </h1>
              <p className="ff_lato fs_sm color_white mw_547px pt-3">
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                nec curabitur purus. Ullamcorper mattis risus suspendisse
                pretium tristique.
              </p>
              <button className="button ff_lato mt-5 button_padding">
                Explore Now
              </button>
            </Col>
            <Col lg={5} className="pt-5 pt-lg-0">
              <div>
                <img
                  className=" w_sm_100 updown"
                  src={header}
                  alt="header_pic"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
