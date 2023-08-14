import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import algo1 from "../assets/images/png/algo_1.png";
import algo2 from "../assets/images/png/unsplash_IC8zpKz6qF0@2x.png";
import algo3 from "../assets/images/png/algo_3.png";
const OurAlgo = () => {
  return (
    <>
      <section className="position-relative py-5 mt-lg-5">
        <div className="ellipse right_ellipse scale_animation"></div>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col lg={6} data-aos="zoom-in-right">
              <h2 className="ff_lato fs_xl color_white mb-0 fw-bold">
                Our <span className="color_skin">Algo</span>
              </h2>
              <p className="color_white ff_lato fs_sm pt-3">
                We have perfected our algorithm, which prioritizes a low risk
                and consistent profit stream without the need for daily
                micromanagement. While most trading algorithms can’t stand up
                against a volatile or risky market, our algorithm thrives in
                those conditions. Early-stage testers have seen a consistent
                flow of income with minimal ups and downs. Our algorithm has
                been in the works for YEARS. This has given us the time to
                rigorously backtest and release any needed hotfixes. As of early
                March 2022, we have close to a quarter of a million under direct
                management!
              </p>
            </Col>
            <Col lg={5}>
              <div
                className="d-sm-flex align-items-center"
                data-aos="zoom-in-left"
              >
                <div className="d-flex flex-column">
                  <div className="algo_card m-2 transition_300ms">
                    <img className="w-100" src={algo1} alt="algo" />
                  </div>
                  <div className="algo_card m-2 transition_300ms">
                    <img className="w-100" src={algo2} alt="algo" />
                  </div>
                </div>
                <div className="algo_card m-2 transition_300ms">
                  <img className="hw w-100" src={algo3} alt="algo" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurAlgo;
