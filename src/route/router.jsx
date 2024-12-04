import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Portfolio from "../pages/portfolio";
// import Blog from "../pages/blog";
import BlogDetails from "../pages/blog-details";
import ContactUs from "@/pages/contact-us";
import AboutUs from "@/pages/about-us";
import Services from "@/pages/services";
import ServiceDetails from "@/pages/service-details";
import TcSample from "@/pages/tcSample";
import FeesScholorship from "@/pages/feesScholorship";
import MandatoryDisclosure from "@/pages/mandatoryDisclosure";
import ListOfBooks from "@/pages/listOfBooks";
import Faq from "@/pages/faq";
import LayoutTwo from "@/layout/layoutTwo";
import HomeTwo from "@/pages/home-2";
import HomeOne from "@/pages/home-1";
import LayoutThree from "@/layout/layoutThree";
import Affiliation from "@/pages/affiliation";
import Admission from "@/pages/admission";
import Infrastructure from "@/pages/infrastructure";
import StaffDetails from "@/pages/staffDetails";
import SchoolCommitee from "@/pages/schoolCommitee";
import TeachersTraining from "@/pages/teachersTraining";
import SchoolCurriculum from "@/pages/schoolCurriculum";
import SchoolAtGlance from "@/pages/schoolAtGlance";
import CbseResults from "@/components/sections/cbseResults";
import { School } from "lucide-react";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomeOne />
            },
        ]
    },
    {
        path: "/",
        element: <LayoutTwo />,
        children: [
            {
                path: "/home-2",
                element: <HomeTwo />
            }
        ]
    },
    {
        path: "/",
        element: <LayoutThree />,
        children: [
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/listOfBooks",
                element: <ListOfBooks />
            },
            {
                path: "/tcSample",
                element: <TcSample />
            },
            {
                path: "/feesScholorship",
                element: <FeesScholorship />
            },
            {
                path: "/teachersTraining",
                element: <TeachersTraining />
            },
            {
                path: "/schoolCommitee",
                element: <SchoolCommitee />
            },
            {
                path: "/schoolCurriculum",
                element: <SchoolCurriculum />
            },
            {
                path: "/mandatoryDisclosure",
                element: <MandatoryDisclosure />
            },
            {
                path: "/affiliation",
                element: <Affiliation />
            },
            {
                path: "/admission",
                element: <Admission />
            },
            {
                path: "/infrastructure",
                element: <Infrastructure />
            },
            {
                path: "/blog-details",
                element: <BlogDetails />
            },
            {
                path: "/staffDetails",
                element: <StaffDetails />
            },
            {
                path: "/cbseResults",
                element: <CbseResults />
            },
            {
                path: "/schoolAtGlance",
                element: <SchoolAtGlance />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/service-details",
                element: <ServiceDetails />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },

            {
                path: "/faq",
                element: <Faq />
            },
        ]
    },
])