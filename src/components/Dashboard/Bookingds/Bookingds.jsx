import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import './Bookingds.css'

export const Bookingds = () => {
  return (
    <>
          <div className='table'>

<table>
   <thead>
<tr>
  <th>Full Name</th>
  <th>Email</th>
  <th>Adrress</th>
  <th>Number of Tickets</th>
  <th>Status</th>
</tr>
   </thead>
   <tbody>
<tr>
  <td>Emma Emmanuel</td>
  <td>Emma@gmail.com</td>
  <td>Italy</td>
  <td>5</td>
  <td>Booked</td>
</tr>
<tr>
  <td>Rene Pacifique</td>
  <td>Rene@gmail.com</td>
  <td>Greece</td>
  <td>3</td>
  <td>Pending</td>
</tr>
<tr>
  <td>Holiday Planner</td>
  <td>HolidayPlanner@gmail.com</td>
  <td>Germany</td>
  <td>4</td>
  <td>Pending</td>
</tr>
   </tbody>
</table>

</div>
    </>
  )
}
