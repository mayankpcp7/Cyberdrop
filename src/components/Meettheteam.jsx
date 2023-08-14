import React from "react";
import { Container } from "react-bootstrap";
import vm from "../assets/images/png/varun_mehta.png";
import ss from "../assets/images/png/shubh_sharma.png";
import discord from "../assets/images/svg/discord.svg";
import twitter from "../assets/images/svg/twitter.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import prev from "../assets/images/svg/left_arrow.svg";
import next from "../assets/images/svg/right arrow.svg";
import m from "../assets/images/svg/m.svg";
const Meettheteam = () => {
  
  return (
    <>
      <section className="py-5"id="team">
        <Container className="mw_1200px">
          <h2 className="text-center ff_lato fw-bold color_white fs_xl">
            Meet the <span className="color_skin">Team</span>
          </h2>
          <Swiper className="pb-5"
          
            slidesPerView={1}
            arr
            pagination={true}
            spaceBetween={30}
            autoplay={true}
            freeMode={true}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={
              {
                576: {
              slidesPerView:2
            }
          }
        }
          >
            <div className="d-flex justify-content-evenly align-items-center my-5">
              <SwiperSlide>
                <div className="d-flex flex-lg-row flex-column align-items-center bg-white rounded-5">
                  <div>
                    <img className="w-100" src={vm} alt="vm" />
                  </div>
                  <div className="p-xl-5">
                    <h3 className="ff_lato color_black fw-bold fs_xmd text-center">
                      Varun Muthu
                    </h3>
                    <p className="text-center color_black fw-medium ff_lato text-center">
                      Marketing Director
                    </p>
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                      <a className="color_black ff_lato fs_xsm  text-center lh_100">
                        https://www.linkedin.com/ <br /> in/varunmuthu1
                      </a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-5">
                      <div className="px-2">
                        <img className="w-100" src={discord} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={twitter} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={m} alt="discord" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex flex-lg-row flex-column align-items-center bg-white rounded-5">
                  <div>
                    <img className="w-100" src={ss} alt="vm" />
                  </div>
                  <div className="p-xl-5">
                    <h3 className="ff_lato color_black fw-bold fs_xmd text-center">
                      Shubh Sharma
                    </h3>
                    <p className="text-center color_black fw-medium ff_lato text-center">
                      Operations Director
                    </p>
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                      <a className="color_black ff_lato fs_xsm  text-center lh_100">
                        https://www.linkedin.com/ <br /> in/shubhsharma01/
                      </a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-5">
                      <div className="px-2">
                        <img className="w-100" src={discord} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={twitter} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={m} alt="discord" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="d-flex flex-lg-row flex-column align-items-center bg-white rounded-5">
                  <div>
                    <img className="w-100" src={vm} alt="vm" />
                  </div>
                  <div className="p-xl-5">
                    <h3 className="ff_lato color_black fw-bold fs_xmd text-center">
                      Varun Muthu
                    </h3>
                    <p className="text-center color_black fw-medium ff_lato text-center">
                      Marketing Director
                    </p>
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                      <a className="color_black ff_lato fs_xsm  text-center lh_100">
                        https://www.linkedin.com/ <br /> in/varunmuthu1
                      </a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-5">
                      <div className="px-2">
                        <img className="w-100" src={discord} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={twitter} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={m} alt="discord" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-flex flex-lg-row flex-column align-items-center bg-white rounded-5">
                  <div>
                    <img className="w-100" src={ss} alt="vm" />
                  </div>
                  <div className="p-xl-5">
                    <h3 className="ff_lato color_black fw-bold fs_xmd text-center">
                      Shubh Sharma
                    </h3>
                    <p className="text-center color_black fw-medium ff_lato text-center">
                      Operations Director
                    </p>
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                      <a className="color_black ff_lato fs_xsm  text-center lh_100">
                        https://www.linkedin.com/ <br /> in/shubhsharma01/
                      </a>
                    </div>
                    <div className="d-flex justify-content-center align-items-center pt-5">
                      <div className="px-2">
                        <img className="w-100" src={discord} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={twitter} alt="discord" />
                      </div>
                      <div className="px-2">
                        <img className="w-100" src={m} alt="discord" />
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </SwiperSlide>
            </div>
          </Swiper>
        </Container>
       
      </section>
    </>
  );
};

export default Meettheteam;
