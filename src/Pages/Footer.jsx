import React from 'react'
import './Footer.css'

import {IoCodeSlash } from "react-icons/io5";

const Footer = () => {
  return (
<>
<div className="Footer-Flex">
    <div>
    <h3>Agressov Group</h3>
    <p>All Right Reserved 2023</p>
    </div>
    <div>
    <div className='Side-Text'>
        <p> Site Map </p>
        <p> Terms of Service</p>
        <p>Privacy Policy</p>
        </div>
        <div className='Side-Text-2'>
< IoCodeSlash className='Icon2' />
<p>Designed & Developed by : <span> FH GROUPOC</span></p>
    </div>
    </div>
</div>
</>
  )
}

export default Footer