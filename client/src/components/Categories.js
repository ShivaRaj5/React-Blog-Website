import React from 'react'
import SportsImg from '../images/sportsimg.jpg'
import PoliticsImg from '../images/politicsimg.jpg'
import EntertainmentImg from '../images/entertainmentimg.jpg'
import HistoricalImg from '../images/historicalimg.jpg'
import LifestyleImg from '../images/lifestyleimg.jpg'
import MusicImg from '../images/musicimg.jpg'
import PostContent from './PostContent'
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <>
    <div className="categoryCard">
    <h1 style={{textAlign:'center',marginTop:'50px'}}>Top Categories</h1>
      <div className="cardCat">
        <div className="cardC">
          <img src={SportsImg} alt="img" />
          <div className="cardCDesc">
          <Link to='/categories/sports' style={{textDecoration:'none'}}><h1>Sports</h1></Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo possimus, hic consequatur ducimus dignissimos odio molestiae doloremque quidem? Inventore, alias excepturi delectus dicta nemo adipisci optio? Est in odio, voluptate velit incidunt quo officia!</p>
          </div>
        </div>
        <div className="cardC">
          <img src={EntertainmentImg} alt="img" />
          <div className="cardCDesc">
          <Link to='/categories/entertainment' style={{textDecoration:'none'}}><h1>Entertainment</h1></Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo possimus, hic consequatur ducimus dignissimos odio molestiae doloremque quidem? Inventore, alias excepturi delectus dicta nemo adipisci optio? Est in odio, voluptate velit incidunt quo officia!</p>
          </div>
        </div>
        <div className="cardC">
          <img src={MusicImg} alt="img" />
          <div className="cardCDesc">
          <Link to='/categories/music' style={{textDecoration:'none'}}><h1>Music</h1></Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo possimus, hic consequatur ducimus dignissimos odio molestiae doloremque quidem? Inventore, alias excepturi delectus dicta nemo adipisci optio? Est in odio, voluptate velit incidunt quo officia!</p>
          </div>
        </div>
        <div className="cardC">
          <img src={LifestyleImg} alt="img" />
          <div className="cardCDesc">
          <Link to='/categories/lifestyle' style={{textDecoration:'none'}}><h1>LifeStyle</h1></Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo possimus, hic consequatur ducimus dignissimos odio molestiae doloremque quidem? Inventore, alias excepturi delectus dicta nemo adipisci optio? Est in odio, voluptate velit incidunt quo officia!</p>
          </div>
        </div>
        <div className="cardC">
          <img src={HistoricalImg} alt="img" />
          <div className="cardCDesc">
          <Link to='/categories/historical' style={{textDecoration:'none'}}><h1>Historical</h1></Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo possimus, hic consequatur ducimus dignissimos odio molestiae doloremque quidem? Inventore, alias excepturi delectus dicta nemo adipisci optio? Est in odio, voluptate velit incidunt quo officia!</p>
          </div>
        </div>
        <div className="cardC">
          <img src={PoliticsImg} alt="img" />
          <div className="cardCDesc">
            <Link to='/categories/politics' style={{textDecoration:'none'}}><h1>Politics</h1></Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo possimus, hic consequatur ducimus dignissimos odio molestiae doloremque quidem? Inventore, alias excepturi delectus dicta nemo adipisci optio? Est in odio, voluptate velit incidunt quo officia!</p>
          </div>
        </div>
      </div>
    </div>
    <PostContent/>
    </>
  )
}

export default Categories