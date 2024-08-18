import React, { useContext } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { wishlistContext } from './context/WishlistContext'
function AddToCard() {
  const { cardArr, setCardArr } = useContext(wishlistContext)

  function removeCard(e) {
    const id = e.target.id;
    const newArr = cardArr.filter((val) => val.id != id)
    setCardArr(newArr)
  }
  let sum = 0;
  let item = 0;
  cardArr.forEach(element => {
         sum  += element.price
         item++
  });
  let discount = 100;
   if(sum > 1000)discount = 300
   if(sum > 2000)discount = 500

   function placeOrder(){
    alert("Your Order has been Successfully Processed")
   }
  return (
    <>
      <Navbar />
      {
        cardArr.length == 0 ?
          <section className='addToCard'>
            <div>
              <img src="/images/shop.webp" className="" alt="" />
              <p>Your cart is empty !</p>
              <p style={{ fontSize: "small" }}>Add items to it now.</p>
              <Link to={"/"}><button>Shop now</button></Link>
            </div>
          </section> : <section className='main-card'>
            {
              cardArr.map((p, idx) => {
                return (

                  <section key={idx} className='cardProduct'>
                    <img src={p.img} alt="" height={100} width={100} />

                    <article>
                      <h2>{p.brands}</h2>
                      <span>Price : {p.price}</span>
                      <span className='size-color'>Size : {p.size} </span>
                      <span className='size-color'>Color : {p.color} </span>
                      <p>Item {p.numberValue}</p>
                      <div className='cardSocialMedia'>
                        <p>Share on :</p>
                        <Link to={'https://x.com/'}><img width="20" height="20" src="https://img.icons8.com/material-rounded/24/twitter.png" alt="twitter" /></Link>
                        <Link to={'https://facebook.com'}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="facebook-new" /></Link>
                        <Link to={'https://instagram.com'}><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="instagram-new" /></Link>
                      </div>
                      <button className='cards-btn' id={p.id} onClick={removeCard}>REMOVE</button>
                    </article>
                  </section>
                )
              })
            }
            <div className="order-box">
              <button onClick={placeOrder}>Place Order</button>
            </div>
            <section className='price-details'>
        <p className='price'>PRICE DETAILS</p>
        <div className='discount'>
          <span>Price {item}items</span>
          <span>₹ {sum}</span>
        </div>
        <div className='discount'>
          <span>Discount </span>
          <span> - ₹ {discount} </span>
        </div>
        <div className='discount'>
          <span>Delivery Charges </span>
          <span>₹ <del>40</del>Free</span>
        </div>
        <div className='discount'>
          <span>Total Amount</span>
          <span>₹ {sum-discount}</span>
        </div>
        <p className='save'>You will save ₹{discount + 40} on this order</p>
      </section>
          </section>
      }
     
      <Footer />
    </>
  )
}

export default AddToCard
