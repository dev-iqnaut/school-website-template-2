import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Fees from '@/components/sections/fees'
import ListOfBooks from '@/components/sections/listOfBooks'
import Testimonial from '@/components/sections/testimonial'
import SchoolCurriculum from '@/components/sections/schoolCurriculum'

const schoolCurriculum = () => {

  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"School Curriculum"} breadcrumbCurrent={"School Curriculum"} />
        {/* <AboutOne gridClass={"lg:grid-cols-2"} isAboutpage={true} /> */}
        <SchoolCurriculum />
        <ListOfBooks />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default schoolCurriculum