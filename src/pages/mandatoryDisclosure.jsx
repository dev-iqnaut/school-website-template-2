import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { ScrollRestoration } from "react-router-dom";
import AboutOne from "@/components/sections/abouts/aboutOne";
import NewsletterTwo from "@/components/sections/newsletters/newsletterTwo";
import PageTitle from "@/components/sections/pageTitle";
// import MandatoryDisclosure from '@/components/sections/mandatoryDisclosure'
import Pricing from "@/components/sections/pricing";
import Testimonial from "@/components/sections/testimonial";
import { PDFViewer } from "@/components/sections/PDFViewer.jsx";
// import { SideText } from '@/components/sections/SideText';
import mammoth from 'mammoth';
import docdemo from "@/assets/AmericanSlang.pdf";

const mandatoryDisclosure = () => {
  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta
          name="description"
          content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template"
        />
      </Helmet>
      <main>
        <PageTitle
          pageName={"Mandatory Disclosure"}
          breadcrumbCurrent={"Mandatory Disclosure"}
        />
        <div>
        <div className="flex justify-center min-h-[800px]">
          <iframe
            src={docdemo}
            style={{ width: "40%", height: "700px" }}
            className="rounded-lg border-b outline outline-offset-1 border-black"
            frameBorder="0"
            title="PDF Viewer"
          ></iframe>{" "}
        </div>
        </div>
      </main>
      <ScrollRestoration />
    </>
  );
};

export default mandatoryDisclosure;
