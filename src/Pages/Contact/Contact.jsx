import React from 'react'
import { PageHeader } from '../../Components/PageHeader/PageHeader'
import { ContactBox } from '../../Components/ContactBox/ContactBox'
import { GoogleMaps } from '../../Components/GoogleMaps/GoogleMaps'

export const Contact = () => {
  return (
    <div>
        <PageHeader />
        <ContactBox />
        <GoogleMaps />
    </div>
  )
}
