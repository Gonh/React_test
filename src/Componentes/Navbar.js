
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="root__header">
        <ul className='nav-links'>
        <span>Testing de React</span>
        <li> <Link className='link' to="/">Todo page</Link> </li>
        <li> <Link className='link' to="/Api">Api</Link> </li>
        </ul>
  </header>
  )
}
