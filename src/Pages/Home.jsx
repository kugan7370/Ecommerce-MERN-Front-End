import React from 'react'
import Categories from '../Components/Categories'
import Header from '../Components/Header'
import Mobiles from '../Components/Group_Product'
import Sliders from '../Components/Sliders'
import { Additional_Categories, CategoriesData } from '../data/Categories'
import { banners } from '../data/banner'
function Home() {
  return (
    <>
      <Sliders datas={banners} />
      <Categories datas={CategoriesData} />
      <Categories datas={Additional_Categories} />
    </>
  )
}

export default Home
