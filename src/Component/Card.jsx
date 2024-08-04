import React, { useContext } from 'react'
import Navbar from './Navbar'
import { inputContext } from './context/InputContextProvider'
import { Heart, ShoppingCart } from 'lucide-react'
import Products from './Products'
import { Link } from 'react-router-dom'
import { wishlistContext } from './context/WishlistContext'
function Card() {
  const { wishlistArr ,setDetailArr  } = useContext(inputContext)
  const { presentArr } = useContext(wishlistContext)
  
  function arrowRight(e) {
    if (e.target.id) {
      let parr = presentArr.filter(p => p.id == e.target.id)
       setDetailArr(parr)
    }
  }

  return (
    <>
      <Navbar />
      <div className='grid'>
        {
          wishlistArr.map((p, i) => {
            return (
              <div key={i} className='cards'>
                <img src={p.img} alt="" />
                <h2>{p.brands}</h2>
                <h4>{p.price}</h4>
                {p.color && <p>{p.color}</p>}
                <div className='flex'>
                  {/* <span className='card-btn' id={i}><Heart /></span> */}
                  <span className='card-btn'><ShoppingCart /> </span>
                  <Link to={`/Shop-Detail/${p.brands}`}><span className="material-symbols-outlined card-btn" onClick={arrowRight} id={p.id}>arrow_forward</span></Link>
                </div>
              </div>
            )
          })
        }

      </div>
      <Products />
    </>
  )
}

export default Card
