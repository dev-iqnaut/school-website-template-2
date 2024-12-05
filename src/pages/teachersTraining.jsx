import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import TeachersTraining from '@/components/sections/teachersTraining'

const teachersTraining = () => {

  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Teachers Training"} breadcrumbCurrent={"Teachers Training"} />
        {/* <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} /> */}
        <TeachersTraining />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default teachersTraining