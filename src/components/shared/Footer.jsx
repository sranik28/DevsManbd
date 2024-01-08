"use client"
import { BsFillTelephoneFill, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter, } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import ScrollToTop from "react-scroll-to-top";
import MyIcon from "../MyIcon";

const Footer = () => {
  return (

    <footer className="relative z-10 bg-[#f9f4f4] mt-[140px] pt-20 pb-10 lg:pt-[120px]  lg:pb-20 px-3">
      <ScrollToTop smooth top={1000} component={<MyIcon />} />
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="w-full mb-10">
              <Link href="/" className="mb-6 inline-block max-w-[160px] text-3xl text-secondary font-bold">
                Devsmanbd
              </Link>
              <p className="text-base text-body-color mb-7">
                We create memorably <br />
                digital experiences.
              </p>
              <p className="flex items-center text-sm font-medium text-dark">
                <span className="mr-3 text-primary">
                  <BsFillTelephoneFill />
                </span>
                <span>+880 17038 25046</span>
              </p>
              <p className="flex items-center mt-4 text-sm font-medium text-dark">
                <span className="mr-3 text-primary">
                  <MdEmail className="text-lg" />
                </span>
                <span>dev@devsmanbd.com</span>
              </p>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-dark mb-9">Pages</h4>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >

                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-projects"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Our Project
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Service
                  </Link>
                </li>
                {/* <li>
                    <Link
                      href="/contact"
                      className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li> */}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-dark mb-9">Company</h4>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Outlet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Contact & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Success History
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Setting & Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-dark mb-9">Quick Links</h4>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Premium Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Know Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="inline-block mb-2 text-base leading-loose text-body-color hover:text-primary"
                  >
                    Download App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="w-full mb-10">
              <h4 className="text-lg font-semibold text-dark mb-9">Follow Us On</h4>
              <div className="flex items-center mb-6">
                <Link
                  href="  "
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <BsFacebook />
                </Link>
                <Link
                  href="#"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <AiOutlineTwitter />  

                </Link>
                <Link
                  href="#"
                  className="text-dark hover:bg-red-600  mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <BsYoutube />
                </Link>
                <Link
                  href="#"
                  className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] hover:text-white sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  <BsLinkedin />
                </Link>
              </div>
              <p className="text-base text-body-color">&copy; Devsmanbd </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.08" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute top-10 right-10 z-[-1]">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#13C296" stopOpacity="0.31" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div className="w-full mx-auto text-lg font-bold text-center">
        <hr className='my-5' />

        © 2023 - {new Date().getFullYear()}
        <span className="ml-2 mr-2">
          devsmanbd
        </span>
        All right reserved. developed by devsmanbd
      </div>
    </footer>
  );
};

export default Footer;