import React, { useEffect } from 'react'
import Categories from '../Components/Categories'
import Header from '../Components/Header'
import Mobiles from '../Components/Group_Product'
import Sliders from '../Components/Sliders'
// import { Additional_Categories, CategoriesData } from '../data/Categories'
import { banners } from '../data/banner'
import { useDispatch, useSelector } from 'react-redux'
import {
  category_Failed,
  category_request,
  category_Success,
} from '../Redux/Admin/CategorySlicer'
import axios from 'axios'
import {
  products_Failed,
  products_request,
  products_Success,
} from '../Redux/Admin/ProductSlicer'

function Home() {
  const dispatch = useDispatch()

  const { loading, categories, error } = useSelector((state) => state.category)

  useEffect(() => {
    const getCategory = async () => {
      try {
        dispatch(category_request())
        await axios
          .get('admin/getcategory')
          .then((result) => dispatch(category_Success(result.data)))
      } catch (error) {
        dispatch(category_Failed())
      }
    }
    getCategory()
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(products_request())
        await axios
          .get('admin/getproduct')
          .then((result) => dispatch(products_Success(result.data)))
      } catch (error) {
        dispatch(products_Failed())
      }
    }
    getProducts()
  }, [])

  return (
    <>
      <Sliders datas={banners} />
      {categories && <Categories datas={categories} />}
      {/* <Categories datas={Additional_Categories} /> */}
    </>
  )
}

export default Home
