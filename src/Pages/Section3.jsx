import React from 'react'
import './Section3.css'

import {motion} from 'framer-motion'

const Section3 = () => {
  const [rotate, setRotate] =  React.useState(false)

  return (
    <>
    <div className='Section-3-Top-Text'>
    <h2>PROJECTS</h2>
    </div>
    <div className='Section-3-Flex'>
      <div className="Section-3-Hover">
        <img src="https://i.pinimg.com/564x/86/90/df/8690df1dec2e103a441ee4fd7af533b1.jpg" alt="" />
      <div className='overlay'>  
        <div className='content'>
            <motion.div animate={{ y: [-100,0, 0, 0],}}
                  
                > 
          <h5>5</h5>
          </motion.div>
          <h1>Marla</h1>
          <p style={{width:'400px',textAlign:'center'}}>Been there. Done that. Sold this. Bought that Done that. Sold this. Bought that.</p>
        </div>
      </div>
      </div>
      <div className="Section-3-Hover">
        <img src="https://i.pinimg.com/564x/70/45/e8/7045e837babd6da19a4030d421013c40.jpg" alt="" />
      <div className='overlay'>  
        <div className='content'>
          <h5>10</h5>
          <h1>Marla</h1>
          <p style={{width:'400px',textAlign:'center'}}>Been there. Done that. Sold this. Bought that Done that. Sold this. Bought that.</p>
        </div>
      </div>
      </div>
      <div className="Section-3-Hover">
        <img  src="https://i.pinimg.com/736x/83/b3/5a/83b35a7cce0f3505d2b8e4b456446393.jpg" alt="" />
      <div className='overlay'>  
        <div className='content'>
          <h1>KANAL</h1>
          <p style={{width:'400px',textAlign:'center'}}>Been there. Done that. Sold this. Bought that Done that. Sold this. Bought that.</p>
        </div>
      </div>
      </div>
      <div className="Section-3-Hover">
        <img src="https://i.pinimg.com/564x/ad/38/7e/ad387e4c840cfc208dcd8d6007ebb14f.jpg" alt="" />
      <div className='overlay'>  
        <div className='content'>
          <h1>INVESMENT</h1>
          <p style={{width:'400px',textAlign:'center'}}>Been there. Done that. Sold this. Bought that Done that. Sold this. Bought that.</p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Section3