import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="menu-left">

          <div className="logo">
            <h2>My Portfolio</h2>
          </div>
          <ul className="menu">
            <li>
              <a href="" className="menu-link">Home</a>
            </li>
            <li>
              <a href="" className="menu-link">About</a>
            </li>
            <li>
              <a href="" className="menu-link">Work</a>
            </li>
            <li>
              <a href="" className="menu-link"></a>
            </li>
            <li>
              <a href="" className="menu-link"></a>
            </li>
          </ul>
        </div>
        <div className="menu-right">
          <ul className="menu">
            <li>
              <a href="#" className="menu-link btn">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar