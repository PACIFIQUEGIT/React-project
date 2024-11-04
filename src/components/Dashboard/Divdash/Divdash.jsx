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
                    <h4><FaUser /></h4>
                    <h4>Users</h4>
                    <p>20</p>
                </div>
                <div className='divdash2'> 
                    <h4><MdTour /></h4>
                    <h4>Tour</h4>
                    <p>50</p>
                </div>
                <div className='divdash3'>
                    <h4><FaBookmark /></h4>
                    <h4>Booking</h4>
                    <p>10</p>
                </div>
            </div>
            <div className='divdashb'>
            <Chart/>
            </div>
    </>
  )
}
