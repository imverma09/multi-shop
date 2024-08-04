import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { inputContext } from '../context/InputContextProvider'
import { ArrowRight, ShoppingCart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Description from '../Description'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { wishlistContext } from '../context/WishlistContext'
import Footer from '../Footer'
// import shuffle from '../helper/shuffleArr'
function ShopDetail() {
  const { detailArr, setDetailArr } = useContext(inputContext)
  const { shuffleArr, cardArr, setCardArr } = useContext(wishlistContext)
  const [numberValue, setNumberValue] = useState(1)
  const [size, setSize] = useState("M")
  const [color, setColor] = useState("black")
  function arrowRight(e) {
    if (e.target.id) {
      let parr = shuffleArr.filter((p => p.id == e.target.id))
      setDetailArr(parr)
    }
  }
  function productSize(event) {
    setSize(event.target.value)
  }
  function productColor(event) {
    setColor(event.target.value)
  }
  function addToCard() {
    const obj = { ...detailArr[0], color, size, numberValue }
    setCardArr([...cardArr.filter(val => val.id != obj.id && val), obj])
  }
  return (
    <>
      <Navbar />
      {
        detailArr.map((p, i) => {
          console.log(p.id)
          return (
            <section key={i} className='detail'>
              <div className='cards product-img'>
                <img src={p.img} alt="" />
              </div>
              <div className='product-detail'>
                <h1>{p.brands}</h1>
                <div>
                  <span><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /></span>
                  <span><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /></span>
                  <span><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /></span>
                  <span><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /></span>
                </div>
                <h4>{p.price}</h4>
                <p>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
                <div className='radio-btn' onChange={productSize}>
                  <h3>Size : </h3>
                  <input type="radio" name="size" id="XS" value="XS" />
                  <label htmlFor="XS">XS</label>
                  <input type="radio" name="size" id="S" value="S" />
                  <label htmlFor="S">S</label>
                  <input type="radio" name="size" id="M" value="M" onChange={productSize} checked />
                  <label htmlFor="M">M</label>
                  <input type="radio" name="size" id="L" value="L" />
                  <label htmlFor="L">L</label>
                  <input type="radio" name="size" id="XL" value="XL" />
                  <label htmlFor="XL">XL</label>
                </div>
                <div className='radio-btn' onChange={productColor}>
                  <h3>Color :</h3>
                  <input type="radio" name="color" id="black" value="black" onChange={productColor} checked />
                  <label htmlFor="black">black</label>
                  <input type="radio" name="color" id="white" value="white" />
                  <label htmlFor="white">White</label>
                  <input type="radio" name="color" id="red" value="red" />
                  <label htmlFor="red">Red</label>
                  <input type="radio" name="color" id="blue" value="blue" />
                  <label htmlFor="blue">Blue</label>
                  <input type="radio" name="color" id="green" value="green" />
                  <label htmlFor="green">Green</label>
                </div>

                <section className='input-section'>
                  <div className='input-container'>
                    <input type="number" name="" id="" value={numberValue} disabled />
                    <button className='btn-right btns' onClick={() => setNumberValue(numberValue + 1)}>+</button>
                    <button className='btn-left btns' onClick={() => {
                      if (numberValue > 1) {
                        setNumberValue(numberValue - 1)
                      } else {
                        return
                      }
                    }}>-</button>
                  </div>
                  <div>
                    <Link to={'/AddToCard'} className='shopping-btn' id={p.id} onClick={addToCard}><ShoppingCart /><span>Add to card</span></Link>
                  </div>
                </section>
                <div className='social-media'>
                  <p>Share on :</p>
                  <Link to={'https://x.com/'}><img width="20" height="20" src="https://img.icons8.com/material-rounded/24/twitter.png" alt="twitter" /></Link>
                  <Link to={'https://facebook.com'}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="facebook-new" /></Link>
                  <Link to={'https://instagram.com'}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="instagram-new" /></Link>
                </div>
              </div>
            </section>
          )
        })
      }
      <Description />
      <div className='swiperContainer'>
        <h1>YOU MAY ALSO LIKE : -</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
        >
          {

            shuffleArr.map((val, i) => {
              return (
                <div key={i}>
                  <SwiperSlide className='slide' key={i}>
                    <div>
                      <img src={val.img} alt="product-img" width={"70%"} />
                      <h2>{val.category}</h2>
                      <span>Price :</span>
                      <span>{val.price}</span>
                      <div className="">
                        <span>Rating -:</span>
                        {Array(4).fill(2).map(val => <span key={Math.random()}><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /></span>)}
                      </div>
                      <Link to={`/Shop-Detail/${val.brands}`} className='arrow'><span id={val.id} className="material-symbols-outlined " onClick={arrowRight} >arrow_forward</span></Link>
                    </div>
                  </SwiperSlide>
                </div>
              )
            })
          }
        </Swiper>
      </div>
      <Footer />
    </>
  )
}

export default ShopDetail
