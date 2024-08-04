import React from 'react'
import mainData from './Data/main_data.json'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
function MainCategory() {
    return (
        <div className='category'>
            <h1>Category</h1>
            <div className='main-cat'>
                {
                    mainData.map((c) => {
                        return (
                            <div key={c.id} className='flex cards cat-box'>
                                <img src={c.img} alt="shows-img" />
                                <div className='tittle-box'>
                                    <h2><strong>{c.category}</strong></h2>
                                    <p style={{ color: '#6c757d' }}> product{c.product}</p>
                                </div>
                               <Link to={`/products/${c.category}`} id='arrowRight'><ArrowRight/></Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainCategory
