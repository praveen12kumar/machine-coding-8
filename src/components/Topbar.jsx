import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
import "./topbar.scss"
const Topbar = () => {
  return (
    <div className='topbar-container'>
      <h1>Meetups</h1>
      <div className="search-section">
        <input className='input' type="text" placeholder='search' />
        <span className='search'><AiOutlineSearch/></span>
      </div>
    </div>
  )
}

export default Topbar
