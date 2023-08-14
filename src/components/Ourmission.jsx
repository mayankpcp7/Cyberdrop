import React from "react";
import card1 from "../assets/images/png/card_1.png";
import light from "../assets/images/png/light_card.png";
import { Container, Col, Row } from "react-bootstrap";
import Aos from "aos";
const Ourmission = () => {
  Aos.init();
  return (
    <>
      <section className="position-relative py-5 my-lg-5">
        <div className="ellipse right_ellipse scale_animation"></div>
        <div className="ellipse left_ellipse scale_animation"></div>
        <Container>
          <Row className="justify-content-between flex_column_reverse ">
            <Col lg={6} data-aos="zoom-out-right">
              <div className="position-relative">
                <img
                  className="card_1 w_sm_100 rotate"
                  src={card1}
                  alt="card"
                />
                <img
                  className=" card_2 w_sm_100 rotate2"
                  src={light}
                  alt="card"
                />
              </div>
            </Col>
            <Col lg={5} className="pb-lg-0 pb-5" data-aos="zoom-out-left">
              <h2 className="ff_lato color_white fs_xl fw-bold">
                Our <span className="color_skin">Mission </span>{" "}
              </h2>
              <p className="color_white ff_lato fs_sm fw-normal pt-3">
                We understand that one of the biggest concerns for early-stage
                investors is that it can quickly become stressful, overwhelming,
                and especially extremely time consuming. It isn’t easy to
                balance a full time job, family, and an active investment
                portfolio, especially when just starting out.
              </p>
              <button className="button button_padding mt-4">Read More</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Ourmission;
