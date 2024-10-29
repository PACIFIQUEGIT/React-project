import React from 'react'
import './About.css';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { FaBus } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

export const About = () => {
  return (
    <>
    <Navbar/>

    <div className="cont1a">
      <div className="opac"></div>
      <div className="h1">About Us</div>
      <div className="contenta">
        <div className="specials">
          <div className="icon"><FaBus /></div>
          <div className="cont">
            <h4>Private Transport</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
        </div>
        <div className="specials">
          <div className="icon"><BiWorld /></div>
          <div className="cont">
            <h4>Diverse Destinations</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
        </div>
        <div className="specials">
          <div className="icon"><FaHotel /></div>
          <div className="cont">
            <h4>Great Hotels</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
        </div>
        <div className="specials">
          <div className="icon"><FaUserClock /></div>
          <div className="cont">
            <h4>Fast Booking</h4>
            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="cont2a">
      <div className="contenta">
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
      <div className='imagescont2'>
        <div className='cont2img1'>
            <div className="image-wrapper1"></div>
        </div>
        <div className='cont2img2'>
            <div className="image-wrapper2"></div>
        </div>
      </div>
      </div>
    </div>
    <div className="cont3a">
      <div className="imgcont3a">
        <div className="img"></div>
      </div>
      <div className="conttcont3a">
        <div className="divh2">
          <h2 className="h2">Bookmarksgrove, <span>the headline</span>
          of Alphabet <span>Village</span> subline.</h2>
        </div>
        <div className="divp1">
          <p>Far far away, behind the word mountains, far from the countries Vokalia 
          and Consonantia, there live the blind texts. Separated they live in 
          Bookmarksgrove right at the coast of the Semantics.</p>
        </div>
        <div className="divp2">
          
            <div><div><FaCheckSquare className='checki' /></div><span className="text">Far far away, behind the word mountains.</span></div>
            <div><div><FaCheckSquare className='checki' /></div><span className="text">countries Vokalia and Consonantia, there live.</span></div>
            <div><div><FaCheckSquare className='checki' /></div><span className="text">Separated they live in Bookmarksgrove right.</span></div>
            <div><div><FaCheckSquare className='checki' /></div><span className="text">the coast of the Semantics.</span></div>
            <div><div><FaCheckSquare className='checki' /></div><span className="text">word mountains, far from the countries Vokalia.</span></div>
          
        </div>
      </div>
    </div>
    <div className="cont4a">
      <div className="contenta">
        <div className="divlefta">
          <div className="divh2">
            <h2 className="h2">The headline of <span>Alphabet</span> subline.</h2>
          </div>
          <div className="divp1">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and 
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove 
              right at the coast of the Semantics, a large language ocean. A small river named 
              Duden flows by their place and supplies it with the necessary regelialia. It is a 
              paradisematic country blind text by the name of Lorem Ipsum decided to leave 
              for the far World of Grammar.</p>
          </div>
        </div>
        <div className="divrighta">
          <div className="divpercnt">
            <div className="field">
              <div className="name"><h3>Accomodation</h3></div>
              <div className="perc"><h3>80%</h3></div>
            </div>
            <div className="bar1"></div>
          </div>
          <div className="divpercnt">
            <div className="field">
              <div className="name"><h3>Destination</h3></div>
              <div className="perc"><h3>95%</h3></div>
            </div>
            <div className="bar2"></div>
          </div>
          <div className="divpercnt">
            <div className="field">
              <div className="name"><h3>Meals</h3></div>
              <div className="perc"><h3>67%</h3></div>
            </div>
            <div className="bar3"></div>
          </div>
          <div className="divpercnt">
            <div className="field">
              <div className="name"><h3>Transport</h3></div>
              <div className="perc"><h3>87%</h3></div>
            </div>
            <div className="bar4"></div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  )
}


