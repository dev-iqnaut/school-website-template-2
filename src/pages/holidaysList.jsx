import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import HolidaysList from '@/components/sections/holidaysList'
import Pricing from '@/components/sections/pricing'
import Testimonial from '@/components/sections/testimonial'

const holidaysList = () => {

  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Holidays List"} breadcrumbCurrent={"Holidays List"} />
        {/* <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} /> */}
        <HolidaysList />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default holidaysList