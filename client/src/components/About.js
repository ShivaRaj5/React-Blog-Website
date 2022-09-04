import React from 'react'
import BlogImg from '../images/blogimg.jpg'
import PostContent from './PostContent'
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <h1>Learn More About Us</h1>
        <img src={BlogImg} alt="img" />
        <div className="descContainer">
          <h2 style={{fontWeight:'lighter',marginBottom:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, molestias, facilis repudiandae porro illo vel molestiae tempore possimus nam reprehenderit repellat, voluptatum asperiores veritatis ducimus harum similique vero at sequi? Dolorem debitis illo voluptates.</h2>
          <p style={{margin:'10px 0px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, accusamus! Eligendi facilis ab quod suscipit voluptatem blanditiis commodi asperiores deserunt, porro quam? Qui placeat ex repellendus perspiciatis, praesentium, quas doloribus vel debitis cum, natus delectus eligendi. Incidunt maiores accusantium veniam inventore, excepturi id consequatur ex aperiam officia, cumque in iste unde deleniti doloribus illum! Perferendis, ab?</p>
          <p style={{margin:'10px 0px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, accusamus! Eligendi facilis ab quod suscipit voluptatem blanditiis commodi asperiores deserunt, porro quam? Qui placeat ex repellendus perspiciatis, praesentium, quas doloribus vel debitis cum, natus delectus eligendi. Incidunt maiores accusantium veniam inventore, excepturi id consequatur ex aperiam officia, cumque in iste unde deleniti doloribus illum! Perferendis, ab?</p>
          <p style={{margin:'10px 0px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, accusamus! Eligendi facilis ab quod suscipit voluptatem blanditiis commodi asperiores deserunt, porro quam? Qui placeat ex repellendus perspiciatis, praesentium, quas doloribus vel debitis cum, natus delectus eligendi. Incidunt maiores accusantium veniam inventore, excepturi id consequatur ex aperiam officia, cumque in iste unde deleniti doloribus illum! Perferendis, ab?</p>
          <div className="ourDesc">
            <div className="descCard">
              <h2>Who We Are.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque perferendis corrupti quo ducimus doloribus facilis similique voluptas sapiente sed minus tempore veniam maiores itaque delectus, voluptatum tenetur nam saepe voluptatem dolorum. Mollitia, corrupti?</p>
            </div>
            <div className="descCard">
              <h2>Our Mission.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque perferendis corrupti quo ducimus doloribus facilis similique voluptas sapiente sed minus tempore veniam maiores itaque delectus, voluptatum tenetur nam saepe voluptatem dolorum. Mollitia, corrupti?</p>
            </div>
            <div className="descCard">
              <h2>Our Vision.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque perferendis corrupti quo ducimus doloribus facilis similique voluptas sapiente sed minus tempore veniam maiores itaque delectus, voluptatum tenetur nam saepe voluptatem dolorum. Mollitia, corrupti?</p>
            </div>
            <div className="descCard">
              <h2>Our Values.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque perferendis corrupti quo ducimus doloribus facilis similique voluptas sapiente sed minus tempore veniam maiores itaque delectus, voluptatum tenetur nam saepe voluptatem dolorum. Mollitia, corrupti?</p>
            </div>
          </div>
        </div>
      </div>
      <PostContent/>
    </>
  )
}

export default About