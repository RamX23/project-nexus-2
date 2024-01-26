import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import { ReactPropTypes } from 'react';

export default function Navbar(props) {
  const nav={
    width: '100%',
    gap: '12vh',
   padding: '1vh',
   fontSize: '2.8vh',
   position: 'absolute',
   zIndex: '999',
  display: 'flex',
  justifyContent: 'start',
  padding: '1.3vh',
  paddingLeft: '2.5vh',
  };
  return (
    <>
    <div >
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={nav}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">QFC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <ul className="nav-link active" aria-current="page" to="/home">Home</ul>
        </li>
        <li className="nav-item">
          <ul className="nav-link active" aria-current="page" to="/home">Menu</ul>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" >
            Book a table
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">family table</a></li>
            <li><a className="dropdown-item" href="/">Launge area table</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Special table</a></li>
          </ul>
        </li>
      </ul>
      <div class="text-end" style={{display:'flex'}}>
          <button type="button" class="btn btn-outline-light me-2">
          <Link className="nav-link active" aria-current="page" to="login" >Login</Link>
          </button>
          <button type="button" class="btn btn-warning">
          <Link className="nav-link active" aria-current="page" to="Signup">Signup</Link>
          </button>
        </div>
    </div>
  </div>
</nav>
    </div>
    <Outlet/>
    </>
  )
}
