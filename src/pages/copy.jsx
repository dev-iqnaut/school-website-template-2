import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Fees from '@/components/sections/fees'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'

const feesScholorship = () => {

  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Fees & Scholarship"} breadcrumbCurrent={"Fees & Scholarship"} />
        {/* <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} /> */}
        <Fees />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default feesScholorship