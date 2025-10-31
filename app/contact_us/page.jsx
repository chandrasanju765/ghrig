import React from 'react'
import Section_form from "../contact_us/section_form"
import Head from 'next/head'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function page() {
  return (
    <div>
      <Header/>
        <Section_form/>
      <Footer />
    </div>
  )
}
