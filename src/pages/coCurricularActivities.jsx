import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import CoCurricularActivities from '@/components/sections/coCurricularActivities'

const coCurricularActivities = () => {

  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Co Curricular Activities"} breadcrumbCurrent={"Co Curricular Activities"} />
        
        <CoCurricularActivities />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default coCurricularActivities