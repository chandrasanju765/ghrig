import React from 'react'
import ServiceBanner from "../services/banner"
import Head from 'next/head'
import Footer from '@/components/footer'
import Header from '@/components/header'
import AssociatedSectors from '../services/associate_sectors'
import BuiltForYou from '../services/builtForYou'
import Solutions from '../services/solutions'
import OurServices from '../services/ourServices'
import Testimonials from '../services/testimonial'

export default function page() {
  return (
    <div>
      <Header/>
        <ServiceBanner/>
        <AssociatedSectors/>
        <BuiltForYou/>
        <Solutions/>
        <OurServices/>
        <Testimonials/>
      <Footer />
    </div>
  )
}
