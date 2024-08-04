import React, { useContext } from 'react'
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel'
import Products from './Component/Products'
import MainCategory from './Component/MainCategory'
import { inputContext } from './Component/context/InputContextProvider'
import Footer from './Component/Footer'
function App() {
 const { inputValue} = useContext(inputContext)
  return (
    <>
    <Navbar/>
    {
      inputValue.trim() == "" && <> <Carousel/> <MainCategory/></>
    } 
    <Products/>
    <Footer/>
    </>
  )
}

export default App
