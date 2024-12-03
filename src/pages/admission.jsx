import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Admission from '@/components/sections/admission'
import Fees from '@/components/sections/fees'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'


const admission = () => {

  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Admission "} breadcrumbCurrent={"Admission "} />
        {/* <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} /> */}
        {/* <Fees /> */}
        <Admission />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default admission