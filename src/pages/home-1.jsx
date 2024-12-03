import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'

import HeroOne from '@/components/sections/heros/heroOne'
import AboutOne from '@/components/sections/abouts/aboutOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import Gallery from '@/components/sections/gallery/gallery'
import Programs from '@/components/sections/programs'
import FaqComp from '@/components/sections/faqComp'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'
import BlogsOne from '@/components/sections/blogs/blogsOne'
import NewsletterOne from '@/components/sections/newsletters/newsletterOne'
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne'
import AgeOne from '@/components/sections/studentsAge/ageOne'
import ExtraCurricular from '@/components/sections/extraCurricular'


const HomeOne = () => {
  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="IQnaut - Nurturing futures for a brighter tomorrow" />
      </Helmet>
      <main>
        <HeroOne />
        <SuccessProjectOne />
        {/* <ServicesOne /> */}
        {/* <AboutOne isAboutpage={false} /> */}
        <FaqComp />
        <ExtraCurricular />
        <AgeOne />
        <Programs />
        {/* <Gallery /> */}
        {/* <Teams /> */}
        {/* <Testimonial /> */}
        {/* <BlogsOne /> */}
        <NewsletterOne />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default HomeOne