import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Affiliation from '@/components/sections/affiliation'
import Fees from '@/components/sections/fees'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'


const affiliation = () => {

  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Affiliation Details"} breadcrumbCurrent={"Affiliation Details"} />
        {/* <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} /> */}
        {/* <Fees /> */}
        <Affiliation />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default affiliation