import React, { useContext, useState } from 'react'
import { ChevronDown, Search, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import dropdown from './Data/dropdown.json'
import { inputContext } from './context/InputContextProvider';
function Navbar() {
    const { inputValue , setInputValue} =  useContext(inputContext)
    const [hide, setHide] = useState(false)
    const [hideDrop, setHideDrop] = useState(false)
    const [hideDrop2, setHideDrop2] = useState(false)   
    return (
        <>
            <nav className='navbar'>
                <div className='navbar nav-link'>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Help</a>
                    <a href="#">FAQs</a>
                </div>
                <span className='navbar account' onClick={() => { hide ? setHide(false) : setHide(true) }}>My Account<ChevronDown strokeWidth={1.25} /></span>
                <div className={hide ? 'login-account navbar' : 'hide'} >
                    <a href="">Sing in</a>
                    <a href="">Sing up</a>
                </div>
            </nav>
            <div className="multi-shop navbar">
                <div>
                    <span className='multi'>MULTI</span>
                    <span className='multi shop'>SHOP</span>
                </div>
                <div className='search-box'>
                    <input type="text" placeholder='Search for products'value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
                    <span className='search-icon'><Search /></span>
                </div>
                <div>
                    <span className='customer'>Customer Service</span><br />
                    <span className='number'>+012 345 6789</span>
                </div>
            </div>
            <section className='navbar nav3'>
                <div className='categories flex'onClick={()=>{hideDrop? setHideDrop(false): setHideDrop(true)}} >
                    <span>Categories</span>
                    <ChevronDown />
                </div>
                <div className='main-link flex'>
                    <a href="#">Home</a>
                    <Link to={'/Shop'}>Shop</Link>
                    <Link to={`/Shop-detail/ShopDetail`}>Shop Detail</Link>
                    <a href="#" onClick={()=>{ hideDrop2?setHideDrop2(false) :setHideDrop2(true)}}>Pages <ChevronDown /></a>
                    <a href="#">Contact</a>
                </div>
                <div className='shopCard flex'>
                    <span><Link to={'/Card'}><Heart color="rgb(255,211,55)" strokeWidth={2.25} absoluteStrokeWidth /></Link></span>
                    <span><Link to={'/AddToCard'}><ShoppingCart color="rgb(255,211,55)" strokeWidth={2.25} absoluteStrokeWidth /></Link></span>          
                </div>
            </section>
            <div className={hideDrop? "dropdown":"hide"}>
                {
                    dropdown.map((x)=>{
                        return(
                            <div className='drop-link' key={x.id}>
                                <Link to={x.path}>{x.category}</Link>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
            <div className={hideDrop2? "dropdown-2":"hide"}>
                <a href="#">Shopping Card</a>
                <a href="#">Checkout</a>
            </div>
        </>
    )
}

export default Navbar
