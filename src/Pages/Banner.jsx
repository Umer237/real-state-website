import React from 'react'
import './Banner.css'
// import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <>
    {/* <motion.div animate={{ y: [-100,0, 0, 0],  opacity: 1,}}transition={{
                    duration: 1.5,     
                }} 
                  initial={{ opacity: 0,  }}
                  
                > */}
    <div className="Banner-BG"> 
    <h3>AGRESSOV</h3>
    <div className='Banner-BG-Text'>
    <h1>WITH YOU. ALWAYS</h1>
    <button>Book Now</button>
    </div>
    </div>
    {/* </motion.div> */}
    </>
  )
}

export default Banner