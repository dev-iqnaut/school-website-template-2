import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Infrastructure from '@/components/sections/infrastructure'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'

const infrastructure = () => {

  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Infrastructure"} breadcrumbCurrent={"Infrastructure"} />
        {/* <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} /> */}
        <Infrastructure />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default infrastructure