import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import Contact from '@/components/sections/contact'

const contact = () => {

  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Contact"} breadcrumbCurrent={"Contact"} />
        
        <Contact />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default contact