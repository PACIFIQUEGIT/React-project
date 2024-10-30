import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import './Bookingds.css'

export const Bookingds = () => {
  return (
    <>
          <div className="bookform">
                    <form action="">
                        <div className="bkhdr">
                            <h2>Book Your Tour</h2>
                        </div>

                        <div className="bkfullname">
                        <div className='bkfic'><FaUser /></div>
                        <div className='bkfin'>
                            <input type="text" placeholder='Full Name *' required />
                        </div>
                        </div>
                        <div className="bkemail">
                        <div className="bkeic"><MdEmail /></div>
                        <div className="bkein">
                            <input type="email" placeholder='Email *' required />
                        </div>
                        </div>
                        <div className="bknumbertickets">
                        <div className="bknic"><FaUserTag /></div>
                        <div className="bknin">                                
                            <input type="number" placeholder='1' />
                        </div>
                        </div>
                        
                        <div className="btn">
                            <button><b>BOOK NOW</b></button>
                        </div>
                    </form>
          </div>
    </>
  )
}
