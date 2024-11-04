import React from 'react'
import './Tourds.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";

export const Tourds = () => {
  return (
    <>   
    <div className='table'>

    <table>
       <thead>
    <tr>
      <th>Full Name</th>
      <th>Email</th>
      <th>Destinations</th>
      <th>Number of Tickets</th>
    </tr>
       </thead>
       <tbody>
    <tr>
      <td>Emma Emmanuel</td>
      <td>Emma@gmail.com</td>
      <td>Rome</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Rene Pacifique</td>
      <td>Rene@gmail.com</td>
      <td>Athens</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Holiday Planner</td>
      <td>HolidayPlanner@gmail.com</td>
      <td>Berlin</td>
      <td>4</td>
    </tr>
       </tbody>
    </table>

    </div>
    </>
  )
}
