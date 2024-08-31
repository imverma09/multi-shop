import React, { useRef, useState } from 'react';
function Carousel() {
  const [idx ,setIdx] =useState(0);
        // setInterval(() => {
        //  setIdx(idx+1) 
        //  if(idx == 2){
        //   setIdx(0)
        //  }
        // },2000);
  return (
    <>
      <section className='container flex'>
        <div className='carousel'>
            <img src="/images/carousel-1.jpg" alt="" style={{ display: idx == 0 ?'block':'none'}} />
            <img src="/images/carousel-2.jpg" alt="" style={{ display: idx == 1 ?'block':'none'}} />
            <img src="/images/carousel-3.jpg" alt="" style={{ display: idx == 2 ?'block':'none'}} />
        </div>
        <div className='specialOffer'>
            <div className='special'>
                <p>SAVE 20%</p>
                <h1>Special Offer</h1>
                <button className='special-btn'>Shop Now</button>
            </div>
            <div className='special offer-img'>
                <p>SAVE 20%</p>
                <h1>Special Offer</h1>
                <button className='special-btn'>Shop Now</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Carousel
