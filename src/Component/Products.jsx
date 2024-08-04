import React, { useContext, useEffect, useState } from 'react'
import { inputContext } from './context/InputContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { wishlistContext} from './context/WishlistContext';
function Products() {
  const { inputValue, setWishlistArr, priceArray, colorArray, detailArr } = useContext(inputContext)
  const {maintain , setMaintain ,presentArr ,setPresentArr , allData  } = useContext(wishlistContext)
  let filterArr = []
  allData.forEach((d) => {
    let isPresent = false
    colorArray.forEach((c) => {
      if (d.color == c) {
        isPresent = true
      }
    })
    priceArray.forEach((p) => {
      if (d.price <= p) {
        isPresent = true
      }
    })

    if (isPresent) {
      filterArr.push(d)
    }
  })
  useEffect(() => {
    if (filterArr != '') {
      setPresentArr(filterArr)
    }
  }, [priceArray, colorArray])
  
  let searchArr = []
  if (inputValue.trim() != '') {
    searchArr = allData.filter((d) => {
      if (d.brands && d.brands.toLowerCase().includes(inputValue.toLowerCase())) return true
      if (d.category && d.category.toLowerCase().includes(inputValue.toLowerCase())) return true
      return false
    })
    
  }

  function favorite(e) {
    let id = e.target.id 
    setMaintain((prev) => prev.map((val, i) => id == i? val == 'red' ? 'white' : 'red' : val ) )
    let new_arr =[]
      if(maintain[id] == 'white'){
        let val = null
        let parr = presentArr.filter(p => p.id == id)
        val = parr[0]
        setWishlistArr(prev => {
          new_arr = [...prev, val] 
          return new_arr
        })
      }else{
        setWishlistArr(prev=>{
          return prev.filter(val=>{
            return val.id != e.target.id
          })
        })
      }
}
 function arrowRight(e) {
  if (e.target.id) {
    presentArr.forEach((value) => {
      if (e.target.id == value.id) {
        detailArr[0] = value
      }
    })
  }
}

return (
  <div className='category recent-products'>
    <h1>RECENT PRODUCTS</h1>
    <div className='grid'>
      {
        inputValue.trim() != '' ? <>{
          searchArr.map((p, i) => {
            return (
              <div key={i} className='cards'>
                <img src={p.img} alt="" />
                <h2>{p.brands}</h2>
                <h4>{p.price}</h4>
                {p.color && <p>{p.color}</p>}
                <div className='flex'>
                  <span className="material-symbols-outlined card-btn " id={p.id} style={{backgroundColor:maintain[p.id]}} onClick={favorite}>favorite</span>
                  <Link to={`/Shop-Detail/${p.brands}`}><span className="material-symbols-outlined card-btn" id={p.id} onClick={arrowRight}>arrow_forward</span></Link>
                </div>
              </div>
            )
          })
        }
        </> : <>
          {
            presentArr.map((p, i) => {
              return (
                <div key={i} className='cards'>
                  <img src={p.img} alt="" />
                  <h2>{p.brands}</h2>
                  <h4>{p.price}</h4>
                  {p.color && <p>{p.color}</p>}
                  <div className='flex icons'>
                    <span className="material-symbols-outlined card-btn" style={{backgroundColor:maintain[p.id]}} id={p.id} onClick={favorite}>favorite</span>
                    <Link to={`/Shop-Detail/${p.brands}`}><span className="material-symbols-outlined card-btn" id={p.id} onClick={arrowRight}>arrow_forward</span></Link>
                  </div>
                </div>
              )
            })
          }
        </>
      }
    </div>

  </div>
)
}

export default Products
