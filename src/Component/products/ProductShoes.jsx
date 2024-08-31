import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import shoesData from '../Data/shoes.json'
import Navbar from '../Navbar';
import shirtData from '../Data/shirt.json'
import dressesData from '../Data/dresses.json'
import electronicsData from '../Data/electronics.json'
import cameraData from '../Data/camera.json'
import mobile from '../Data/watch.json'
import { inputContext } from '../context/InputContextProvider';
import Footer from '../Footer';

function ProductShoes() {
  const { setWishlistArr, setDetailArr, inputValue, setBgColorArr, bgColorArr } = useContext(inputContext)
  const params = useParams()
  let data = []

  if (params.id == 'Shoes') {
    data = shoesData.filter(d => d.category.toLowerCase() == params.id.toLowerCase())
  } else if (params.id == 'Shirt') {
    data = shirtData.filter(s => s.category.toLowerCase() == params.id.toLowerCase())
  } else if (params.id == 'Dresses') {
    data = dressesData.filter(s => s.category.toLowerCase() == params.id.toLowerCase())
  } else if (params.id == 'Electronics') {
    data = electronicsData.filter(s => s.category.toLowerCase() == params.id.toLowerCase())
  } else if (params.id == 'Camera') {
    data = cameraData.filter(s => s.category.toLowerCase() == params.id.toLowerCase())
  } else if (params.id == 'Watch') {
    data = mobile.filter(s => s.category.toLowerCase() == params.id.toLowerCase())
  }

  function arrowRight(e) {
    if (e.target.id) {
      let parr = data.filter((p, i) => i == e.target.id)
      setDetailArr(parr)
    }
  }
  // const [bgColorArr, setBgColorArr] = useState(new Array(data.length).fill('white'))

  const favorite = (e) => {
    let id = e.target.id
    setBgColorArr((prev) => prev.map((val, i) => id == i ? val == 'red' ? 'white' : 'red' : val))
    let new_arr = []

    if (bgColorArr[id] == 'white') {
      let val = null
      let parr = data.filter((p, i) => i == id)
      val = parr[0]
      setWishlistArr(prev => {
        new_arr = [...prev, val]
        return new_arr
      })
    } else {
      setWishlistArr(prev => {
        return prev.filter((val, i) => {
          return i != id
        })
      })
    }
  }
  let searchArr = []
  if (inputValue.trim() != '') {
    searchArr = data.filter((d) => {
      if (d.brands && d.brands.toLowerCase().includes(inputValue.toLowerCase())) return true
      if (d.category && d.category.toLowerCase().includes(inputValue.toLowerCase())) return true
      return false
    })
  }
  return (
    <>
      <Navbar />
      <div className='grid'>
        {
          inputValue.trim() == '' ? <>{
            data.map((p, i) => {
              return (
                <div key={p.id} className='cards '>
                  <img src={p.img} alt="" />
                  <h2>{p.brands}</h2>
                  <h4>{p.price}</h4>
                  {p.color && <p>{p.color}</p>}
                  <div className='flex'>
                    <span className="material-symbols-outlined card-btn " name='abc' id={i} onClick={favorite} style={{ backgroundColor: bgColorArr[i] }} >favorite</span>
                    <Link to={`/Shop-Detail/${p.brands}`}><span className="material-symbols-outlined card-btn" id={i} onClick={arrowRight}>arrow_forward</span></Link>
                  </div>
                </div>
              )
            })
          }
          </> : <>
            {
              searchArr.map((p, i) => {
                return (
                  <div key={p.id} className='cards '>
                    <img src={p.img} alt="" />
                    <h2>{p.brands}</h2>
                    <h4>{p.price}</h4>
                    {p.color && <p>{p.color}</p>}
                    <div className='flex'>
                      <span className="material-symbols-outlined card-btn " name='abc' id={i} onClick={favorite} style={{ backgroundColor: bgColorArr[i] }} >favorite</span>
                      <Link to={`/Shop-Detail/${p.brands}`}><span className="material-symbols-outlined card-btn" id={i} onClick={arrowRight}>arrow_forward</span></Link>
                    </div>
                  </div>
                )
              })
            }
          </>
        }
      </div>
      <Footer />
    </>
  )
}

export default ProductShoes
