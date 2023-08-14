import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import faqvec from "../assets/images/png/faq_vec.png";
const Faqs = () => {
  return (
    <>
      <section className="position-relative">
        <div className="ellipse left_ellipse scale_animation"></div>
        <div className="faqvec">
          <img src={faqvec} alt="" />
        </div>
        <h2 className="text-center fs_xl color_skin ff_lato fw-bold">
          FAQ<span className="color_white">’s </span>
        </h2>
        <Container className="mw_967px">
          <Accordion defaultActivekey="0" className="my-5 ">
            <Accordion.Item className="pb-4 px-5" evenKey="0">
              <Accordion.Header>
                <h4 className="ff_lato fw-medium color_white fs_2xmd mb-0">
                  Egestas scelerisque duis quis aliquet. Consectetur?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_lato fw-normal op_70 text-white fs_xsm  mw_635px lh_27 mb-0">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                  egestas feugiat amet. Ut nibh vulputate.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="pb-4 px-5">
              <Accordion.Header>
                <h4 className="ff_lato fw-medium color_white fs_2xmd mb-0">
                  Ac nec enim amet, leo lorem quis neque vitae aliquet?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_lato fw-normal op_70 text-white fs_xsm  mw_635px lh_27 mb-0">
                  Pump is a deliberate and drastic increase in the value of a
                  coin with the help of a massive purchase by our entire team.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="pb-4 px-5" eventKey="2">
              <Accordion.Header>
                <h4 className="ff_lato fw-medium color_white fs_2xmd mb-0">
                  Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
                  donec?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_lato fw-normal op_70 text-white fs_xsm  mw_635px lh_27 mb-0">
                  Pump is a deliberate and drastic increase in the value of a
                  coin with the help of a massive purchase by our entire team.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="pb-4 px-5" eventKey="3">
              <Accordion.Header>
                <h4 className="ff_lato fw-medium color_white fs_2xmd mb-0">
                  Porta amet tortor nec pulvinar urna. Et blandit sit id?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_lato fw-normal op_70 text-white fs_xsm  mw_635px lh_27 mb-0">
                  Pump is a deliberate and drastic increase in the value of a
                  coin with the help of a massive purchase by our entire team.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="pb-4 px-5" eventKey="4">
              <Accordion.Header>
                <h4 className="ff_lato fw-medium color_white fs_2xmd mb-0">
                  Tellus hendrerit fermentum ut hendrerit ac vestibulum?
                </h4>
              </Accordion.Header>
              <Accordion.Body>
                <p className="ff_lato fw-normal op_70 text-white fs_xsm  mw_635px lh_27 mb-0">
                  Pump is a deliberate and drastic increase in the value of a
                  coin with the help of a massive purchase by our entire team.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </>
  );
};

export default Faqs;
