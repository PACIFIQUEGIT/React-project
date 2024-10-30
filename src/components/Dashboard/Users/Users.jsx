import React from 'react'
import './Users.css'

export const Users = () => {
  return (
    <>

    <div className='table'>
    <table>
       <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
       </thead>
       <tbody>
    <tr>
      <td>Emma</td>
      <td>Emmanuel</td>
      <td>Emma@gmail.com</td>
    </tr>
    <tr>
      <td>Rene</td>
      <td>RenePacifique</td>
      <td>Rene@gmail.com</td>
    </tr>
    <tr>
      <td>Holiday</td>
      <td>Planner</td>
      <td>HolidayPlanner@gmail.com</td>
    </tr>
       </tbody>
    </table>

    </div>

    </>
  )
}
