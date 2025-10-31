import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
// import Redefining from '../about_us/redefining'
import Banner_Section from './banner_Section'
import One_platform from './one_platform'
import Our_story from './our_story'
import What_stand from './what_stand'
import { FaqSection } from '../home/faq'
export default function page() {
  return (
    <div>
       <Header/>
       {/* <Redefining/> */}
       <Banner_Section/>
       <One_platform/>
       <Our_story/>
       <What_stand/>
       <FaqSection/>
       <Footer />
    </div>
  )
}
