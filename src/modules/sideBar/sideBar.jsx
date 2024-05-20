import React from 'react'
import logo from '../../assets/logo.svg'
import "./sideBar.css"

const sideBar = () => {
  return (
    <div className='side-bar-black'>
        <div className="side-bar-logo">
            <img src={logo} alt="" />
        </div>
        <div className="side-bar-links"></div>
    </div>
  )
}

export default sideBar