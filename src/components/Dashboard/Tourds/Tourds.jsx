import React from 'react'
import './Tourds.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";

export const Tourds = () => {
  return (
    <>
            <div className="tourform">
                    <form action="">
                        <div className="tfhdr">
                            <h2>Find Your Tour</h2>
                        </div>
                        
                        <div className="trfullname">
                        <div className='trfic'><FaUser /></div>
                        <div className='trfin'>
                            <input type="text" placeholder='Full Name *' required />
                        </div>
                        </div>
                        <div className="tremail">
                        <div className="treic"><MdEmail /></div>
                        <div className="trein">
                            <input type="email" placeholder='Email *' required />
                        </div>
                        </div>
                        <div className="trnumbertickets">
                        <div className="trnic"><FaUserTag /></div>
                        <div className="trnin">                                
                            <input type="number" placeholder='1' />
                        </div>
                        </div>

                        <div className="btn">
                            <button><b>FIND NOW</b></button>
                        </div>
                    </form>
            </div>
    </>
  )
}
