import React from 'react'
import PostContent from './PostContent'
import ContactImg from '../images/contactimg.jpg'
const Contact = () => {
  return (
    <>
      <div className="contact" style={{backgroundColor:'whitesmoke'}}>
        <div className="contactContainer">
          <h1 style={{fontSize:'50px'}}>Feel Free To Contact Us</h1>
          <img src={ContactImg} alt="img" style={{width:'915px',height:'450px',margin:'50px 0px'}}/>
          <h2 style={{fontWeight:'lighter'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet itaque consequatur repellat vero beatae. Doloremque nulla accusamus porro culpa? Sint illum cumque non perferendis deleniti, odio magnam, alias atque doloremque culpa quam amet cum.</h2>
          <p style={{margin:'30px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum amet temporibus eligendi voluptatum deleniti aut harum, similique architecto quasi cupiditate minus quibusdam dolore, porro est provident libero ratione iusto laboriosam quaerat. Obcaecati perferendis sequi ipsa ea necessitatibus corrupti veniam quae amet optio. Ipsum aliquid perspiciatis repellendus libero nulla voluptatibus quidem modi, sapiente vel animi necessitatibus.</p>
          <div className="contactInfo">
            <div className="addressInfo">
              <h2>Where To Find Us</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="addressInfo">
              <h2>Contact Info</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="addressInfo">
              <h2>Our Offices</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
          </div>
          <form method="post">
            <h1>Contact Us</h1>
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email' />
            <input type="text" placeholder='Your Phone' />
            <textarea name="message" id="" cols="30" rows="6" placeholder='Your Message'></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <PostContent/>
    </>
  )
}

export default Contact