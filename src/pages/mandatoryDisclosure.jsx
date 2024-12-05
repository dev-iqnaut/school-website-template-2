import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
// import MandatoryDisclosure from '@/components/sections/mandatoryDisclosure'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'
import { PDFViewer }  from '@/components/sections/PDFViewer.jsx';
// import { SideText } from '@/components/sections/SideText';

const mandatoryDisclosure = () => {


  const annotations = [
    {
      id: "29R",
      left: "41.5154%",
      top: "49.045%",
      width: "43.0281%",
      height: "2.4943%",
      title: "https://drive.google.com/file/d/1S1o-rBhqfU5B-kv529ckdIBCFy0FupTn/view?usp=drive_link",
    },
    {
      id: "20R",
      left: "41.6835%",
      top: "49.045%",
      width: "48.4066%",
      height: "2.73185%",
      title: "",
    },
    {
      id: "28R",
      left: "42.0196%",
      top: "48.8075%",
      width: "50.0874%",
      height: "3.20696%",
      title: "https://drive.google.com/file/d/1S1o-rBhqfU5B-kv529ckdIBCFy0FupTn/view?usp=drive_link",
    },
    {
      id: "27R",
      left: "42.0196%",
      top: "49.045%",
      width: "51.7682%",
      height: "3.20696%",
      title: "https://drive.google.com/file/d/1S1o-rBhqfU5B-kv529ckdIBCFy0FupTn/view?usp=drive_link",
    },
    {
      id: "30R",
      left: "41.5154%",
      top: "55.2214%",
      width: "44.2047%",
      height: "2.4943%",
      title: "https://drive.google.com/file/d/1AVHS3vO_6kpF1oG62rOuUT-izfCO1fUE/view?usp=drive_link",
    },
    {
      id: "21R",
      left: "41.6835%",
      top: "55.3402%",
      width: "44.3727%",
      height: "2.37552%",
      title: "https://drive.google.com/file/d/1AVHS3vO_6kpF1oG62rOuUT-izfCO1fUE/view?usp=drive_link",
    },
    {
      id: "22R",
      left: "41.6835%",
      top: "63.2982%",
      width: "49.5832%",
      height: "2.61307%",
      title: "https://drive.google.com/file/d/1xBOBmlxWYrGQd0s0tdVDniGrNeral0PX/view?usp=drive_link",
    },
    {
      id: "23R",
      left: "41.6835%",
      top: "69.9496%",
      width: "48.9109%",
      height: "2.61307%",
      title: "https://drive.google.com/file/d/1VxdToQ8KsJ0loijKZfcdXnHUXF_maJwx/view?usp=drive_link",
    },
    {
      id: "24R",
      left: "41.6835%",
      top: "76.4823%",
      width: "51.9363%",
      height: "2.73185%",
      title: "https://drive.google.com/file/d/1-9BV4H7rj49y2-MfuNS8Z8fsqdR5uhJe/view?usp=drive_link",
    },
    {
      id: "25R",
      left: "41.5154%",
      top: "82.7775%",
      width: "50.7597%",
      height: "2.61307%",
      title: "https://drive.google.com/file/d/1EWQPdfUiFqr7qG68bo--RCPsETDgAYmu/view?usp=drive_link",
    },
    {
      id: "26R",
      left: "41.6835%",
      top: "89.3101%",
      width: "48.7428%",
      height: "2.61307%",
      title: "https://drive.google.com/file/d/12TCSifV2AxZyfQFI7WMhxII_UkEfFFVA/view?usp=drive_link",
    },
  ];


  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Mandatory Disclosure"} breadcrumbCurrent={"Mandatory Disclosure"} />
        <div className="flex">
      {/* <div className="w-1/2 border-r border-gray-200">
        <SideText />
      </div> */}
      <div
      className="annotationLayer relative"
      data-main-rotation="0"
      style={{
        width: `round(var(--scale-factor) * 594.95996px, 1px)`,
        height: `round(var(--scale-factor) * 841.91998px, 1px)`,
      }}
    >
      {annotations.map((annotation, index) => (
        <section
          key={annotation.id}
          data-annotation-id={annotation.id}
          tabIndex="1000"
          className="linkAnnotation absolute"
          style={{
            zIndex: index + 1,
            left: annotation.left,
            top: annotation.top,
            width: annotation.width,
            height: annotation.height,
          }}
        >
          {annotation.title && (
            <a
              data-element-id={annotation.id}
              title={annotation.title}
              href={annotation.title}
              target="_top"
              rel="noopener noreferrer nofollow"
              id={`pdfjs_internal_id_${annotation.id}`}
            />
          )}
        </section>
      ))}
    </div>

    </div>
        
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default mandatoryDisclosure