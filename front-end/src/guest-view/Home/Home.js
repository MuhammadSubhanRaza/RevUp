import React, { useEffect } from 'react'
import About from './About'
import Clients from './Clients'
import Counter from './Counter'
import Footer from './../Common/Footer'
import Head from './Head'
import Services from './Services'
import Subscribe from './../Common/Subscribe'
import Companies from './Companies'
import Ribbon from './Ribbon'
import HeadUpdateIndex from './HeadUpdateIndex'

const Home = () => {



  return (
      <>
        {/* <Head/> */}
        <HeadUpdateIndex/>
        <Services/>
        <About/>
        <Counter/>
        {/* <Companies/> */}
        <Clients/>
        <Ribbon/>
        <Subscribe/>
        <Footer/>
      </>
  )
}

export default Home