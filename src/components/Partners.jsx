import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import card_1 from "../assets/images/png/partner_1.png";
import card_2 from "../assets/images/png/card_2.png";
import card_3 from "../assets/images/png/card_3.png";
import card_4 from "../assets/images/png/card_4.png";
const Partners = () => {
  return (
    <>
      <h2 className="text-center ff_lato fs_xl color_white fw-bold">
        Part<span className="color_skin">ners </span>
      </h2>
      <section className="bg_partner" id="partners">
        <Container className="pt-5 mb-5">
          <Row className="py-sm-5 my-sm-4">
            <Col sm={6} md={4} lg={3} xsm={4} className="my-lg-5 mb-5 mt-3">
              <div className="my_box h-100" data-aos="flip-left">
                <div className="d-flex justify-content-center align-items-center h-100 ">
                  <img
                    className=" w-sm-100 w-75 w_sm_39 "
                    src={card_1}
                    alt=""
                  />{" "}
                </div>
              </div>
              <p className="color_black fw-bold ff_lato fs_sm text-center pt-4">
                Playbit
              </p>
            </Col>
            <Col
              sm={6}
              md={4}
              lg={3}
              xsm={4}
              className="my-lg-5 mb-5 mt-3"
              data-aos="flip-right"
            >
              <div className="my_box  py-2 h-100 " data-aos="flip-right">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <img
                    className=" w-sm-100 w-75 w_sm_39 "
                    src={card_2}
                    alt=""
                  />{" "}
                </div>
              </div>
              <p className="color_black fw-bold ff_lato fs_sm text-center pt-4">
                24 Capital
              </p>
            </Col>
            <Col
              sm={6}
              md={4}
              lg={3}
              xsm={4}
              className="my-lg-5 mb-5 mt-3"
              data-aos="flip-left"
            >
              <div className="my_box  py-2 h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <img
                    className=" w-sm-100 w-75 w_sm_39 "
                    src={card_3}
                    alt=""
                  />{" "}
                </div>
              </div>
              <p className="color_black fw-bold ff_lato fs_sm text-center pt-4">
                TradingHive
              </p>
            </Col>
            <Col
              sm={6}
              md={4}
              lg={3}
              xsm={4}
              className="my-lg-5 mb-5 mt-3"
              data-aos="flip-right"
            >
              <div className="my_box  py-2 h-100 ">
                <div className="d-flex justify-content-center align-items-center h-100">
                  {" "}
                  <img
                    className=" w-sm-100 w-75 w_sm_39 "
                    src={card_4}
                    alt=""
                  />{" "}
                </div>
              </div>
              <p className="color_black fw-bold ff_lato fs_sm text-center pt-4">
                Focus Group Equities
              </p>
            </Col>
          </Row>
        </Container>
        <p className="text-center color_skin ff_lato fw-bold mb-0 trnslate-y-70">
          For business and collaborations, contact us team@cyberdrops.finance
        </p>
      </section>
    </>
  );
};

export default Partners;
