import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import DevelopmentOfCommunityServices from '@/components/sections/developmentOfCommunityServices'

const developmentOfCommunityServices = () => {

  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Development Of Community Services"} breadcrumbCurrent={"Development Of Community Services"} />
        
        <DevelopmentOfCommunityServices />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default developmentOfCommunityServices