import React from 'react'
import { useParams } from 'react-router-dom'
 import data from "./Data/shoes.json"
import { Heart, ShoppingCart } from 'lucide-react';

function Category() {
    const params =  useParams()
    const newData = data.filter(d => d.brands == params.cat)
  return (
    <div>
        <h1>{params.cat}</h1>
        <div className='products'>
            {
                newData.map((p)=>{
                    if(p.brands == params.cat){
                        return(
                            <div key={p.id} className='cards'>
                            <img src={p.img} alt="" />
                            <h2>{p.brands}</h2>
                            <h4>{p.price}</h4>
                           <div className='flex'>
                             <button className='card-btn'><Heart/></button>
                             <button className='card-btn'><ShoppingCart/></button>
                           </div>
                          </div>
                        )
                    }
                })
            }
        </div>
      
    </div>
  )
}

export default Category
