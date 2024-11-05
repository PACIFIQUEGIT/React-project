import React from 'react'
import './Divdash.css'
import Chart from '../Chart'
import { MdTour } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export const Divdash = () => {
  return (
    <>
            <div className="divdash">
                <div className='divdash1'>
                    <h4><FaUser style={{marginRight:'7px', fontSize:'23px'}} />Users</h4>
                    <p>20</p>
                </div>
                <div className='divdash2'>
                    <h4><MdTour style={{marginRight:'7px', fontSize:'23px'}} />Tour</h4>
                    <p>50</p>
                </div>
                <div className='divdash3'>
                    <h4><FaBookmark style={{marginRight:'7px', fontSize:'23px'}} />Booking</h4>
                    <p>10</p>
                </div>
            </div>
            <div className='divdashb'>
            <Chart/>
            </div>
    </>
  )
}
