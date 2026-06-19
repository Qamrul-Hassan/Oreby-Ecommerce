import React from 'react'
import Banner from "../components/Banner"
import Ad from "../components/Ad"
import NewArrival from "../components/NewArrival"
import NewProducts from "../components/NewProducts"
import BigAdd from "../components/BigAdd"
import SpecialOffer from "../components/SpecialOffer"

const Home = () => {
  return (
    <>
        <Banner/>
        <Ad/>
        <NewArrival/>
        <NewProducts/>
        <BigAdd/>
        <SpecialOffer/>
    </>
  )
}

export default Home