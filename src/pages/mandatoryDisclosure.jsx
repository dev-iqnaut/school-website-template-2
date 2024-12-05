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
import mammoth from "mammoth";
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
        <div className="flex justify-center items-center h-[800px] min-w-[400px]">
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vTTu1TRSXGsp_NhXclYBHV45B_bxrwRB7-H_eAj7p5t9BDmndRuHvBILxmCk4_O4iv1gPzuEkupN23E/pub?embedded=true"
            className="w-[1000px] h-[700px]"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </main>
      <ScrollRestoration />
    </>
  );
};

export default mandatoryDisclosure;
