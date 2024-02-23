import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation() {
  return (
    <ul className='nav p-4 bg-warning d-flex justify-content-end'>
        
        <li className='nav-item'>
           <NavLink to='' className='pe-4 fs-5 text-dark'>Home</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='/register' className='pe-4 fs-5 text-dark'>Register</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='/login' className='pe-4 fs-5 text-dark'>Login</NavLink>
        </li>
        <li className='nav-item'>
        <NavLink to='/dashboard' className='pe-4 fs-5 text-dark'>Dashboard</NavLink>
        </li>

    </ul>
  )
}

export default Navigation