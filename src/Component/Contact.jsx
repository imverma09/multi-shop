import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <section className='contact-section'>
        <div className='inner-contact-section'>
          <h1>CONTACT US</h1>
          <div className='form-section flex'>
            <div className='form-box' >
              <form action="">
                <input type="text" placeholder='Enter Name' />
                <input type="email" placeholder='Your Email' />
                <input type="text" placeholder='Subject' />
                <textarea name="" id="" placeholder='Message' rows={10}></textarea>
                <button>Send Message</button>
              </form>
            </div>
            <div className='address-box'>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45777.634721656985!2d74.98920694034517!3d29.537052574608037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114db0893d723d%3A0xc51125be998c4f95!2sSirsa%2C%20Haryana%20125055!5e1!3m2!1sen!2sin!4v1723970516731!5m2!1sen!2sin" height={210} width={"100%"}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className='mail-info'>
                <p>123 Street, New York, USA</p>
                <p>info@example.com</p>
                <p>+012 345 67890</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>

  )
}

export default Contact
