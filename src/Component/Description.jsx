import React, { useState } from 'react'

function Description() {
    const [inputData, setInputData] = useState({ name: "", email: '', message: '' })
    const [rating, setRating] = useState(0)
    const [text, setText] = useState("Description")
    const [reviewArr, setReviewArr] = useState([])
    function abc(e) {
        let id = e.target.id
        if (id == '') {
            return;
        }
        setText(id)
        
    }

    function inputHandler(e) {
        const { value, id } = e.target
        setInputData({ ...inputData, [id]: value })
    }

    function submitHandler(event) {
        event.preventDefault()
        let obj = inputData
        obj.rating = rating
        let arr = []
        setReviewArr((prev) => {
            arr = [...prev, inputData]
            return arr
        })
        setInputData({ name: "", message: '', email: '' })
    }

    return (<main className='main'>
        <section className='productDescription'>
            <div className='info-btn' onClick={abc}>
                <button id='Description' className={text == 'Description' ? 'button' : ''}>Description</button>
                <button id='Information' className={text == 'Information' ? 'button' : ''}>Information</button>
                <button id='Reviews' className={text == 'Reviews' ? 'button' : ' '}>Reviews</button>
                <br />
                <hr />
            </div>
            {
                text == 'Description' &&
                <div className='description'>
                    <h2>Product Description</h2>
                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>

                    <p>
                        Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
                    </p>
                </div>

            }
            {
                text == 'Reviews' &&
                <section className='review'>
                    <div className='review-box user'>
                        {
                            reviewArr.map((r, i) => {
                                return (
                                    <div key={i} className='user-container'>
                                        <h1 style={{ fontSize: '24px' }}>{i + 1} review for {"Product Name"}</h1>
                                        <div className=' user-info'>
                                            <img src="/images/user.jpg" alt="user-img" height={50} width={50} />
                                            <div className=''>
                                                <h2>{r.name}</h2>
                                                {
                                                    Array(r.rating).fill(1).map((val, i) => (
                                                        <span key={i}><img width="20" height="20" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" /></span>
                                                    ))
                                                }
                                                <p>{r.message}</p>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                    <div className='review-box user-rating'>
                        <h1>Leave a review</h1>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <div className='stars'>
                            <span>Your Rating * </span>
                            {
                                [1, 2, 3, 4, 5].map((star, i) => {
                                    return (
                                        <span key={i} style={{ cursor: 'pointer', color: rating >= star ? 'gold' : 'gray', fontSize: '25px' }} onClick={() => { setRating(star) }}>★</span>
                                    )

                                })
                            }
                        </div>
                        <form action="" className='user-rating' onSubmit={submitHandler}>
                            <span>Your Review *</span>
                            <textarea name="" id="message" rows={10} cols={70} value={inputData.message} onChange={inputHandler}></textarea>
                            <label htmlFor="">Your Name *</label>
                            <input type="text" name="" id="name" value={inputData.name} onChange={inputHandler} />
                            <label htmlFor="">Your Email *</label>
                            <input type="text" name="" id="email" value={inputData.email} onChange={inputHandler} />
                            <button>Leave Your Review</button>
                        </form>
                    </div>
                </section>
            }
            {
                text == 'Information' &&
                <div className='description'>
                    <h2>Additional Information</h2>
                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>

                </div>

            }

        </section>
    </main>
    )
}

export default Description
