import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Logo from "@/components/ui/logo";
import SocalIcons from "@/components/ui/socalIcons";
import CopyRight from "./copyRight";
import apple from "@/assets/images/shapes/apple.svg";
import scissors from "@/assets/images/shapes/scissors.svg";
import ScrollUp from "./scrollUp";
import { Button } from "@/components/ui/button";

import Input from "@/components/ui/input";
import SlideUp from "@/lib/animations/slideUp";

const FooterTwo = () => {
  return (
    <footer className="pt-20 bg-[#0A6375] relative">
      <div className="container">
        <div className="grid lg:grid-cols-[300px_auto_auto_268px] sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-10 justify-between">
          <SlideUp delay={2}>
            <Logo className="text-cream-foreground" />
            <div className="mt-10">
              <p className=" text-cream-foreground opacity-80">
                We see potential where others see limitations. Every child is a
                unique universe of possibilities waiting to be explored
              </p>
              <SocalIcons
                prentClass={"gap-5 lg:pt-7.5 pt-5"}
                className={"w-9 h-9 bg-[#FFFFFF1A] border-none hover:bg-green"}
              />
            </div>
          </SlideUp>

          <SlideUp delay={3}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-cream-foreground inline-block">
                Pages
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 min-w-[203px]">
              <li>
                <Link
                  to="/about-us"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  List of Books
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-cream-foreground transition-all duration-500 hover:ml-[5px] hover:text-primary-foreground"
                >
                  Mandatory Disclosure
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={4}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-cream-foreground">
                Contact
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>

            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5">
              <li className="text-cream-foreground flex gap-4">
                <FaLocationDot className="mt-1.5" />{" "}
                <span className="max-w-[168px]">
                  IQnaut Public School , Bezonbagh, Nagpur- 440014 ,
                  Maharashtra.
                </span>
              </li>
              <li className="text-cream-foreground flex gap-4">
                <FaEnvelope className="mt-1.5" />{" "}
                <Link to="#">care@iqnaut.com</Link>
              </li>
              <li className="text-cream-foreground flex gap-4">
                <FaPhone className="mt-1.5" /> <Link to="#">1800 891 1234</Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={5}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-cream-foreground inline-block">
                Admissions
              </h3>
              <span className="block w-[120%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <div className="lg:pt-7.5 pt-5">
              <p className="text-cream-foreground">
                Admissions Open for the Academic Year - 2025-2026
              </p>
              <Button
                  variant="pill"
                  className="bg-secondary border-secondary mt-3 hover:text-white-foreground"
                  asChild
                >
                  <Link to={"/admission"} className="btn-rounded">
                    Admission
                  </Link>
                </Button>
            </div>
          </SlideUp>
          {/* <!-- Newsletter end --> */}
        </div>
        <CopyRight color={"text-cream-foreground opacity-80"} />
      </div>
      <ScrollUp />
      <div>
        <div className="absolute right-[68px] top-[40%] animate-up-down">
          <img src={apple} alt="img" />
        </div>
        <div className="absolute left-[45%] lg:top-1/2 top-[40%]">
          <img src={scissors} alt="img" />
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
