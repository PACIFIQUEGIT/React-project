import React, { useState, useEffect } from 'react';
import './Home.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';


export const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const slidesToShow = 5;
  const slidesToShow1 =6;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setCurrentIndex1((prevIndex1) => (prevIndex1 + 1) % data1.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const displayedSlides = [
    ...data.slice(currentIndex, currentIndex + slidesToShow),
    ...data.slice(0, Math.max(0, currentIndex + slidesToShow - data.length))
  ];

  const displayedSlides1 = [
    ...data1.slice(currentIndex1, currentIndex1 + slidesToShow1),
    ...data1.slice(0, Math.max(0, currentIndex1 + slidesToShow1 - data1.length))
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);



  return (
    <>
    <Navbar />
    <div className='cont1'>
      <h1>Get Ready to Travel <br /></h1>
      <h1><span>The World.</span></h1>
      <p>A journey of a 1000 miles starts with a single step. Import the full demo <br />
        content with 1 click and create a head-turning website for your travel agency.</p>
      <div className="content">
        <form action="">
          <div>
            <span><FaLocationDot /></span>
            <input type="text" className='form-input' placeholder="Where To?" />
          </div>
          <div>
            <span><FaCalendarAlt /></span>
            <select className="form-input">
              <option>When?</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div>
            <span><FaFlag /></span>
            <select className="form-input">
              <option>Travel Type</option>
              <option>Cultural</option>
              <option>Adventure</option>
              <option>Historical</option>
              <option>Seaside</option>
              <option>Discovery</option>
            </select>
          </div>
          <button>FIND NOW</button>
        </form>
      </div>
    </div>
    <div className="cont2">
     <div className="content">
      <div className='imagescont2'>
        <div className='cont2img1'>
            <div className="image-wrapper1"></div>
        </div>
        <div className='cont2img2'>
            <div className="image-wrapper2"></div>
        </div>
      </div>
      <div className='aboutus'>
        <div className="h4div">
          <h4 className="h4">About us</h4>
        </div>
          <h2 className="h2">Plan Your <span>Trip</span> with <span>Us</span></h2>
        <div className="p">
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
          river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
          about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
        </div>
        <div className='btn'>
           <a href="" title="Read More" className="aboutus-btn">Read More</a>
        </div>
      </div>
     </div>
    </div>
    <div className="cont3">
      <div className="content">
        <div className="amazingoffers">
          <h4 className='h4'>Amazing Offers</h4>
        </div>
        <div className="carousel-div">
          <h1>Special <span>Deals</span> And Last Minute <br /> <span>Amazing Offers</span></h1>
          <div className='buttons'>
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
          </div>
            <div className='container'>
              {displayedSlides.map((d, index) => (
                <div
                  key={index}
                  className='slides'
                  style={{
                    flex: `0 0 ${100 / slidesToShow}%`, 
                  }}
                >
                  <div className='img' style={d.divStyle}>
                    <div className="discount">{d.discount}</div>
                    <div className="placeprice">
                      <div className="place">{d.place}</div>
                      <div className="price">{d.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dots">
              {data.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
        </div>
      </div>
    </div>
    <div className="cont4">
      <div className='video-container'>
        <video autoPlay muted loop>
          <source src="https://html.geekcodelab.com/holiday-planners/assets/images/highlight-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='sec-wrap1'>
        <h1 className='block'>Traveling Highlights</h1>
        <h2 className='block'>Your New Traveling Idea</h2>
      </div>
      <div className='content'>
        <div className='tour-service-box'>
          <div className='tour-service-image'>
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon1.svg" alt="" />
          </div>
          <div className='tour-service-content'>
            <h4>700+ DESTINATIONS</h4>
            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
          </div>
        </div>
        <div className='tour-service-box'>
          <div className='tour-service-image'>
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon2.svg" alt="" />
          </div>
          <div className='tour-service-content'>
            <h4>BEST PRICE GUARANTEE</h4>
            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
          </div>
        </div>
        <div className='tour-service-box'>
          <div className='tour-service-image'>
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon3.svg" alt="" />
          </div>
          <div className='tour-service-content'>
            <h4>TOP NOTCH SUPPORT</h4>
            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="cont5">
      <div className="content">
        <div className="instagram">
          <h4 className='h4'>Instagram</h4>
        </div>
        <div className="carousel-div">
          <h1>Holidayplanners</h1>
          <div className="container">
            {displayedSlides1.map((d, index1) => (
              <div key={index1} className="slides" style={{flex: `0 0 ${100 / slidesToShow}%`,}}>
                <div className="img" style={d.divStyle}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )


  
}


const data = [
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/offer-img1.jpg")', 
      },
      discount: '22% off',
      url: 'https://html.geekcodelab.com/holiday-planners/assets/images/offer-img1.jpg',
      place: 'Cinque Terre, Italy',
      price: '$1200'
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/offer-img2.jpg")', 
      },
      discount: '15% off',
      url: 'https://html.geekcodelab.com/holiday-planners/assets/images/offer-img2.jpg',
      place: 'Parthenon, Greece',
      price: '$2500'
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg")', 
      },
      discount: '38% off',
      url: 'https://html.geekcodelab.com/holiday-planners/assets/images/offer-img3.jpg',
      place: 'Jaisalmer Fort, Jaisalmer',
      price: '$750'
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/offer-img4.jpg")', 
      },
      discount: '32% off',
      url: 'https://html.geekcodelab.com/holiday-planners/assets/images/offer-img4.jpg',
      place: 'JungGrenzgipfel, Thailand',
      price: '$970'
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/offer-img5.jpg")', 
      },
      discount: '15% off',
      url: 'https://html.geekcodelab.com/holiday-planners/assets/images/offer-img5.jpg',
      place: 'Jungfrau Mountain, Switzerland',
      price: '$1280'
    },
  ]

  const data1 = [
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image1.jpg")', 
      },
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image2.jpg")', 
      },
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image3.jpg")', 
      },
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image4.jpg")', 
      },
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image5.jpg")', 
      },
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image6.jpg")', 
      },
    },
    {
      divStyle: {
        backgroundImage: 'url("https://html.geekcodelab.com/holiday-planners/assets/images/instagram-image4.jpg")', 
      },
    },
  ]