import React from 'react'
import Group_Product from '../Components/Group_Product'
import Sliders from '../Components/Sliders'
import { banners } from '../data/banner'
import { mobiledata } from '../data/Categories'

function Products() {
  return (
    <>
      {/* <Sliders datas={banners} /> */}
      <Group_Product datas={mobiledata} />
    </>
  )
}

export default Products
