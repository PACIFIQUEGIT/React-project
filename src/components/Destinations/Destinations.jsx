import React from 'react'
import './Destinations.css'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

export const Destinations = () => {
  return (
    <>
    <Navbar/>

    <div className="cont1d">
      <div className="opac"></div>
      <div className="h1">Destination List</div>
    </div>
    <div className="cont2d">
        <div className="contentd">
          <div className="divc2d1">
            <div className="c2d1l">
                <div className="c2d1lup">
                    <div className="country">Greece</div>
                </div>
                <div className="c2d1ldown">
                    <div className="c2d1ldownl">
                      <div className="country">Thailand</div>
                    </div>
                    <div className="c2d1ldownr">
                      <div className="country">Switzerland</div>
                    </div>
                </div>
            </div>
            <div className="c2d1r">
              <div className="country">India</div>
            </div>
          </div>
          <div className="divc2d2">
            <div className="c2d2l">
              <div className="country">Canada</div>
            </div>
            <div className="c2d2r">
                <div className="c2d2rup">
                    <div className="country">Europe</div>
                </div>
                <div className="c2d2rdown">
                    <div className="c2d2rdownl">
                      <div className="country">Japan</div>
                    </div>
                    <div className="c2d2rdownr">
                      <div className="country">Mexico</div>
                    </div>
                </div>
            </div>            
          </div>
          <div className="loadmore">
            <button><b>LOAD MORE</b></button>
          </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}
