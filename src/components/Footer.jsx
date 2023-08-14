import React from "react";
import { Container } from "react-bootstrap";
import footerlogo from "../assets/images/svg/footer_img.svg";
const Footer = () => {
  return (
    <>
      <section className="pt-5 pb-4 position-relative">
        <div className="last_ellipse scale_animation"></div>
        <Container className="pt-5 mt-5">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src={footerlogo} alt="footerlogo" />
            <h2 className="text-center color_skin fs_lg ff_lato fw-semibold">
              Cyber Drops
            </h2>
            <p className="color_white text-center ff_lato fs_xsm fw-normal mw_444">
              Viverra metus viverra rhoncus eget quam suspendisse diam amet,
              nisl. Mattis maecenas libero lacinia accumsan amet.
            </p>
            <div className="d-flex align-items-center">
              <div className="px-2">
                <a href="#">
                  <svg
                    className="icon_footer transition_300ms"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_354)">
                      <path
                        d="M16.375 7C11.1984 7 7 11.1984 7 16.375C7 21.5516 11.1984 25.75 16.375 25.75C21.5516 25.75 25.75 21.5516 25.75 16.375C25.75 11.1984 21.5539 7 16.375 7ZM11.625 16.6898L11.6648 16.6266L14.1047 12.8109C14.1129 12.7984 14.1242 12.7883 14.1377 12.7816C14.1511 12.775 14.166 12.7721 14.181 12.7732C14.1959 12.7743 14.2103 12.7794 14.2225 12.788C14.2348 12.7966 14.2446 12.8083 14.2508 12.8219C14.657 13.7352 15.0102 14.8711 14.8445 15.5781C14.7758 15.8687 14.5828 16.2625 14.3648 16.6266C14.3369 16.6798 14.3064 16.7317 14.2734 16.782C14.2655 16.7933 14.255 16.8023 14.2427 16.8085C14.2304 16.8146 14.2168 16.8176 14.2031 16.8172H11.6977C11.6827 16.8174 11.668 16.8136 11.655 16.8061C11.6421 16.7987 11.6314 16.7878 11.6241 16.7748C11.6168 16.7617 11.6132 16.7469 11.6136 16.732C11.614 16.717 11.6185 16.7025 11.6266 16.6898H11.625ZM22.4953 18.0023C22.4955 18.019 22.4908 18.0354 22.4818 18.0494C22.4727 18.0635 22.4598 18.0745 22.4445 18.0813C22.2547 18.1617 21.6086 18.4602 21.3398 18.8328C20.6539 19.7875 20.1305 21.1531 18.9586 21.1531H14.0727C13.6601 21.1525 13.2518 21.0706 12.8709 20.9121C12.49 20.7536 12.1442 20.5216 11.853 20.2293C11.5618 19.9371 11.3311 19.5903 11.174 19.2089C11.017 18.8274 10.9366 18.4188 10.9375 18.0063V17.95C10.9375 17.9047 10.975 17.8672 11.0219 17.8672H13.7445C13.7992 17.8672 13.8383 17.9164 13.8344 17.9703C13.8141 18.1469 13.8477 18.3289 13.932 18.4937C14.093 18.8219 14.4289 19.0266 14.7906 19.0266H16.1391V17.9742H14.8047C14.7891 17.9741 14.7738 17.9696 14.7605 17.9614C14.7471 17.9532 14.7363 17.9415 14.7292 17.9276C14.722 17.9137 14.7188 17.8981 14.7199 17.8825C14.7209 17.8669 14.7262 17.8519 14.7352 17.8391L14.7844 17.7688C14.9094 17.5883 15.0898 17.3109 15.2695 16.9937C15.3914 16.7797 15.5102 16.5516 15.6055 16.3219C15.6242 16.2812 15.6391 16.2383 15.6562 16.1969C15.682 16.1234 15.7086 16.0547 15.7273 15.9867C15.7457 15.9291 15.7627 15.871 15.7781 15.8125C15.8227 15.6172 15.8414 15.4109 15.8414 15.1977C15.8414 15.1133 15.8383 15.025 15.8305 14.9422C15.8266 14.8508 15.8148 14.7586 15.8039 14.6672C15.7952 14.5854 15.7827 14.5041 15.7664 14.4234C15.7454 14.3007 15.7198 14.1787 15.6898 14.0578L15.6789 14.0109C15.6555 13.9266 15.6352 13.8469 15.6086 13.7633C15.5342 13.5066 15.4487 13.2532 15.3523 13.0039C15.3188 12.9101 15.2818 12.8176 15.2414 12.7266C15.1852 12.5875 15.1273 12.4617 15.075 12.3438C15.049 12.2932 15.0245 12.2419 15.0016 12.1898C14.9762 12.1337 14.9493 12.0782 14.9211 12.0234C14.9023 11.982 14.8797 11.9422 14.8648 11.9047L14.7 11.6016C14.6773 11.5602 14.7148 11.5094 14.7602 11.5227L15.7914 11.8016H15.7992L15.9344 11.8406L16.0844 11.8828L16.1391 11.8977V11.2859C16.1391 10.9898 16.375 10.75 16.6695 10.75C16.7391 10.7498 16.8079 10.7637 16.872 10.7908C16.936 10.8179 16.9939 10.8577 17.0422 10.9078C17.1419 11.0084 17.1981 11.1443 17.1984 11.2859V12.1953L17.3086 12.2258C17.3164 12.2297 17.3258 12.2336 17.3328 12.2391C17.3594 12.2578 17.3984 12.2875 17.4477 12.325C17.4867 12.3547 17.5281 12.3922 17.5766 12.432C17.7308 12.5577 17.8804 12.6891 18.025 12.8258C18.1922 12.9812 18.3797 13.1633 18.5594 13.3656C18.6102 13.4234 18.6586 13.4797 18.7094 13.5422C18.7578 13.6039 18.8125 13.6641 18.8578 13.7234C18.9195 13.8047 18.9828 13.8891 19.0414 13.9766C19.0672 14.018 19.0992 14.0609 19.1234 14.1023C19.1984 14.2133 19.2625 14.3273 19.3242 14.4422C19.3508 14.4945 19.3766 14.5523 19.3992 14.6086C19.4688 14.7625 19.5234 14.918 19.557 15.0758C19.5681 15.1093 19.5757 15.1438 19.5797 15.1789V15.1867C19.5906 15.2312 19.5945 15.2805 19.5984 15.3305C19.6204 15.5614 19.5922 15.7943 19.5156 16.0133C19.4914 16.0789 19.4688 16.1461 19.4391 16.2117C19.3805 16.3445 19.3133 16.4797 19.2328 16.6039C19.2063 16.6508 19.1742 16.6992 19.1445 16.7461C19.1109 16.7953 19.075 16.8422 19.0453 16.8867C19.0024 16.9459 18.9573 17.0035 18.9102 17.0594C18.8687 17.1156 18.8273 17.1719 18.7805 17.2227C18.7172 17.2992 18.6555 17.3711 18.5891 17.4398C18.5516 17.4852 18.5109 17.532 18.4672 17.5727C18.4266 17.6195 18.3828 17.6609 18.3453 17.6984C18.2797 17.7641 18.2281 17.8133 18.1828 17.8562L18.0758 17.9516C18.0609 17.9665 18.0406 17.9749 18.0195 17.975H17.1984V19.0266H18.2313C18.4617 19.0266 18.6813 18.9453 18.8594 18.7937C18.9195 18.7414 19.1836 18.5125 19.4969 18.1672C19.5071 18.1554 19.5208 18.1472 19.5359 18.1438L22.3875 17.318C22.4 17.3143 22.4132 17.3137 22.426 17.316C22.4389 17.3183 22.451 17.3236 22.4614 17.3314C22.4719 17.3392 22.4803 17.3493 22.4862 17.3609C22.4921 17.3726 22.4952 17.3854 22.4953 17.3984V18.0023Z"
                        fill="white"
                      />
                    </g>
                    <circle cx="16" cy="16" r="15.5" stroke="white" />
                    <defs>
                      <clipPath id="clip0_1_354">
                        <rect
                          width="18.75"
                          height="18.75"
                          fill="white"
                          transform="translate(7 7)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="px-2">
                <svg
                  className="icon_footer transition_300ms"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_358)">
                    <path
                      d="M23.1227 10.5094C21.9274 9.97032 20.6461 9.57188 19.3063 9.34532C19.2943 9.34303 19.282 9.34451 19.2709 9.34955C19.2599 9.35459 19.2506 9.36294 19.2445 9.37345C19.0805 9.66173 18.8977 10.0375 18.7695 10.3344C17.3485 10.1221 15.9038 10.1221 14.4828 10.3344C14.3401 10.0054 14.1792 9.68456 14.0008 9.37345C13.9947 9.36281 13.9856 9.35427 13.9746 9.34896C13.9635 9.34366 13.9512 9.34184 13.9391 9.34376C12.6 9.57032 11.3188 9.96876 10.1227 10.5086C10.1124 10.5129 10.1037 10.5203 10.0977 10.5297C7.66642 14.1039 7.00001 17.5899 7.32735 21.032C7.32826 21.0405 7.33088 21.0486 7.33504 21.056C7.33921 21.0634 7.34483 21.0699 7.35157 21.075C8.77063 22.1082 10.3534 22.8952 12.0336 23.4031C12.0453 23.4067 12.0578 23.4067 12.0696 23.4031C12.0813 23.3995 12.0916 23.3924 12.0992 23.3828C12.4608 22.8993 12.7812 22.3863 13.057 21.8492C13.0609 21.8419 13.0631 21.8338 13.0635 21.8255C13.0639 21.8173 13.0626 21.809 13.0596 21.8013C13.0565 21.7936 13.0519 21.7866 13.0459 21.7809C13.0399 21.7751 13.0328 21.7707 13.025 21.768C12.5203 21.5779 12.0313 21.3486 11.5625 21.082C11.5541 21.0772 11.547 21.0704 11.5419 21.0622C11.5367 21.054 11.5337 21.0446 11.5331 21.0349C11.5325 21.0252 11.5343 21.0155 11.5383 21.0067C11.5423 20.9979 11.5485 20.9902 11.5563 20.9844C11.6547 20.9117 11.7531 20.8359 11.8469 20.7602C11.8553 20.7534 11.8655 20.749 11.8762 20.7476C11.887 20.7463 11.8979 20.7479 11.9078 20.7524C14.9758 22.1305 18.2984 22.1305 21.3305 20.7524C21.3404 20.7476 21.3514 20.7458 21.3623 20.747C21.3733 20.7483 21.3836 20.7525 21.3922 20.7594C21.4859 20.8359 21.5836 20.9117 21.6828 20.9844C21.6906 20.9901 21.6969 20.9977 21.7011 21.0064C21.7053 21.0152 21.7072 21.0248 21.7067 21.0345C21.7063 21.0441 21.7034 21.0536 21.6984 21.0619C21.6934 21.0702 21.6865 21.0771 21.6781 21.082C21.2109 21.3508 20.725 21.5781 20.2149 21.7672C20.207 21.77 20.1999 21.7745 20.1939 21.7803C20.188 21.7862 20.1833 21.7932 20.1803 21.801C20.1772 21.8087 20.1759 21.817 20.1763 21.8254C20.1768 21.8337 20.179 21.8418 20.1828 21.8492C20.4641 22.3859 20.7859 22.8969 21.1399 23.382C21.1472 23.392 21.1575 23.3994 21.1692 23.4034C21.181 23.4073 21.1936 23.4075 21.2055 23.4039C22.8886 22.8974 24.4739 22.11 25.8945 21.075C25.9015 21.0702 25.9073 21.0639 25.9116 21.0566C25.9159 21.0493 25.9186 21.0412 25.9195 21.0328C26.3102 17.0531 25.2649 13.5953 23.1469 10.5313C23.1417 10.5213 23.1331 10.5135 23.1227 10.5094ZM13.5156 18.9359C12.5922 18.9359 11.8305 18.1008 11.8305 17.0766C11.8305 16.0516 12.5774 15.2172 13.5156 15.2172C14.4609 15.2172 15.2156 16.0586 15.2008 17.0766C15.2008 18.1016 14.4539 18.9359 13.5156 18.9359ZM19.7461 18.9359C18.8219 18.9359 18.0609 18.1008 18.0609 17.0766C18.0609 16.0516 18.807 15.2172 19.7461 15.2172C20.6914 15.2172 21.4461 16.0586 21.4313 17.0766C21.4313 18.1016 20.6922 18.9359 19.7461 18.9359Z"
                      fill="white"
                    />
                  </g>
                  <circle cx="16.25" cy="16" r="15.5" stroke="white" />
                  <defs>
                    <clipPath id="clip0_1_358">
                      <rect
                        width="18.75"
                        height="18.75"
                        fill="white"
                        transform="translate(7.25 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="px-2">
                <svg
                  className="icon_footer transition_300ms"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_348)">
                    <path
                      d="M26.1586 11.0114C25.482 11.312 24.7551 11.5152 23.991 11.607C24.7794 11.1339 25.3693 10.3894 25.6505 9.51234C24.9098 9.95352 24.099 10.2641 23.2536 10.4305C22.685 9.8218 21.932 9.41836 21.1113 9.28279C20.2907 9.14722 19.4483 9.28711 18.7151 9.68074C17.9819 10.0744 17.3988 10.6997 17.0563 11.4597C16.7138 12.2196 16.6312 13.0717 16.8212 13.8836C15.3202 13.808 13.8518 13.4169 12.5114 12.7355C11.1709 12.0541 9.98836 11.0977 9.04041 9.92834C8.71628 10.489 8.5299 11.139 8.5299 11.8312C8.52954 12.4544 8.68259 13.068 8.97548 13.6177C9.26837 14.1673 9.69204 14.636 10.2089 14.9821C9.60948 14.963 9.02329 14.8006 8.49911 14.5084V14.5572C8.49905 15.4312 8.80058 16.2783 9.35253 16.9548C9.90449 17.6313 10.6729 18.0955 11.5273 18.2687C10.9712 18.4195 10.3883 18.4418 9.82237 18.3337C10.0634 19.0857 10.533 19.7434 11.1654 20.2145C11.7977 20.6857 12.5612 20.9468 13.3489 20.9613C12.0117 22.0138 10.3603 22.5847 8.66036 22.5822C8.35923 22.5823 8.05835 22.5647 7.75928 22.5294C9.48485 23.6419 11.4935 24.2323 13.545 24.23C20.4895 24.23 24.2859 18.4628 24.2859 13.4611C24.2859 13.2986 24.2819 13.1345 24.2746 12.972C25.013 12.4365 25.6504 11.7734 26.157 11.0138L26.1586 11.0114Z"
                      fill="white"
                    />
                  </g>
                  <circle cx="16.5" cy="16" r="15.5" stroke="white" />
                  <defs>
                    <clipPath id="clip0_1_348">
                      <rect
                        width="19.4479"
                        height="19.5"
                        fill="white"
                        transform="translate(7 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="px-2">
                <svg
                  className="icon_footer transition_300ms"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16.75" cy="16" r="15.5" stroke="white" />
                  <path
                    d="M16.375 4.89062C10.033 4.89062 4.89062 10.033 4.89062 16.375C4.89062 22.717 10.033 27.8594 16.375 27.8594C22.717 27.8594 27.8594 22.717 27.8594 16.375C27.8594 10.033 22.717 4.89062 16.375 4.89062ZM22.9375 11.3942L21.8916 12.3965C21.7993 12.4657 21.7557 12.5785 21.7737 12.6887V20.0638C21.7557 20.1766 21.7993 20.2894 21.8916 20.3561L22.917 21.3584V21.5814H17.7695V21.3687L18.8282 20.3407C18.9333 20.2356 18.9333 20.2048 18.9333 20.0485V14.0807L15.9854 21.5558H15.588L12.1581 14.0807V19.0923C12.1273 19.3025 12.2017 19.5153 12.3503 19.6665L13.7295 21.3353V21.5583H9.8125V21.3353L11.1916 19.6665C11.2643 19.5914 11.3184 19.5004 11.3496 19.4007C11.3807 19.301 11.3881 19.1954 11.3711 19.0923V13.2988C11.389 13.1373 11.3275 12.981 11.2045 12.8707L9.97913 11.3942V11.1711H13.7859L16.7236 17.6183L19.3102 11.1763H22.9375V11.3942Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Container>
        <div className="footer_line mt-3"></div>
        <p className="ff_lato text-center color_white opacity-75 mb-0 pt-3">
          Copyright By 2022
        </p>
      </section>
    </>
  );
};

export default Footer;
