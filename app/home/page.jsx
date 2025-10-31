import React from 'react'
import CarouselSection from './Carousel'
import JobCategories from './jobCategory'
import Accelerate_job from './accelarateJob'
import {Engage} from './engage'
import Banner_section from './banner_section_new'
import { HiringCompaniesWrapperSection } from './topHiringCompanies'
import {DiscoverJobCategories} from './discoverJobCategories'
import {FaqSection} from './faq'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function page() {
  return (
    <div >
      <Header/>
      <div className='p-2'>
        <Banner_section />
      </div>
      <CarouselSection />
      <Engage />
      <HiringCompaniesWrapperSection />
      <DiscoverJobCategories />
      <JobCategories />
      <Accelerate_job />
      <FaqSection />
      <Footer />
    </div>
  )
}