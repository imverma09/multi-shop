import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import { inputContext } from './context/InputContextProvider'
import Footer from './Footer'
export default function Shop() {
     const { priceArray , setColorArray ,setPriceArray ,colorArray}= useContext(inputContext)
    function inputHandler(e){
        if(e.target.checked){
            setPriceArray([...priceArray,e.target.getAttribute('name')])
        }else{
            setPriceArray(prev =>prev.filter(val=>val != e.target.getAttribute('name')))
        }
    }

    function inputColorHandler(e){
        if(e.target.checked){
            setColorArray([...colorArray ,e.target.getAttribute("name")])
        }
        else {
            setColorArray(prev => prev.filter(val => val != e.target.getAttribute("name")))
        }
    }

    return (
        <>
         <Navbar />
        <div className='side'>
            <aside>
                <div className='cards filter flex' >
                <h1>Filter By Price</h1>
                <div className='box flex'>
                    <input type="checkbox" name="500" id="200" onClick={inputHandler}/>
                    <label htmlFor="200">200-500</label>
                </div>
                <div className='box flex'>
                    <input type="checkbox" name="1000" id="500" onClick={inputHandler} />
                    <label htmlFor="500">500-1000</label>
                </div>
                <div className='box flex'>
                    <input type="checkbox" name="1500" id="1000" onClick={inputHandler} />
                    <label htmlFor="1000">1000-1500</label>
                </div>
                </div>
                <div className='cards filter flex'>
                <h1>Filter By Color</h1>
                <div className='box flex'>
                    <input type="checkbox" name="Blue" id="blue"onClick={inputColorHandler} />
                    <label htmlFor="blue">Blue</label>
                </div>
                <div className='box flex'>
                    <input type="checkbox" name="Grey" id="grey" onClick={inputColorHandler} />
                    <label htmlFor="grey">Grey</label>
                </div>
                <div className='box flex'>
                    <input type="checkbox" name="Navy" id="navy" onClick={inputColorHandler} />
                    <label htmlFor="navy">Navy</label>
                </div>
                <div className='box flex'>
                    <input type="checkbox" name="Brown" id="brown"onClick={inputColorHandler} />
                    <label htmlFor="brown">Brown</label>
                </div>
                </div>
            </aside>
        </div>
            <Products colorArray={colorArray} priceArray={priceArray} />
            <Footer/>
        </>

    )
}
