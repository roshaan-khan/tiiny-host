import React from 'react'
import logo from './assets/logo.png'

export default function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed">
  <div className="container-fluid">
    <button className="nbtn navbar-toggler d-lg-none d-md-inline-block   d-inline-block align-middle mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <img className='image d-lg-inline align-lg-middle'  src={logo} alt="" />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item nitem mx-md-5">
          <a className="nav-link nlink1 " aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item nitem">
          <a className="nav-link nlink2" href="#">FAQ</a>
        </li>
        <li className="nav-item nitem">
          <a className="nav-link nlink3" href="#">Pricing</a>
        </li>
        <li className="nav-item nitem">
          <a className="nav-link nlink4" href="#">Log in</a>
        </li>
        <li className="nav-item">
         <input className='butn nlink5' type="button" value="Sign up free" />
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
