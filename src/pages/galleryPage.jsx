import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import AboutOne from '@/components/sections/abouts/aboutOne'
import NewsletterTwo from '@/components/sections/newsletters/newsletterTwo'
import PageTitle from '@/components/sections/pageTitle'
import GalleryPage from '@/components/sections/galleryPage'

const galleryPage = () => {

  return (
    <>
      <Helmet>
        <title>Ascent - Chindcare & Kids School React.js Template || About-Us</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"Gallery"} breadcrumbCurrent={"Gallery"} />
        
        <GalleryPage />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default galleryPage