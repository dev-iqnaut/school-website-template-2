import React from 'react'
import { Helmet } from 'react-helmet'
import { ScrollRestoration } from 'react-router-dom'
import PageTitle from '@/components/sections/pageTitle'
import ListOfBooks from '@/components/sections/listOfBooks'


const listOfBooks = () => {

  return (
    <>
      <Helmet>
        <title>IQnaut - Nurturing futures for a brighter tomorrow</title>
        <meta name="description" content="Ascent - Chindcare & Kids School React.js and Tailwind CSS Template" />
      </Helmet>
      <main>
        <PageTitle pageName={"List of Books"} breadcrumbCurrent={"List of Books"} />
        <ListOfBooks />
      </main>
      <ScrollRestoration/>
    </>
  )
}

export default listOfBooks