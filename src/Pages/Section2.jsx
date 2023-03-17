import React from "react";
import "./Section2.css";
// import {motion } from 'framer-motion'

import { FaSmile } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Section2 = () => {
  return (
    <>
      <div className="Section-2-Flex">
        <div className="Section-2-Text">
          {/* <motion.div animate={{ y: [-100,0, 0, 0], opacity: 1,}}transition={{
                    duration: 2,     
                }} 
                  initial={{ opacity: 0.2,  }}
                > */}
          <h2>ABOUT US</h2>
          <p>
            A Union of Agressov Group & Abbott Hotels. Both have been ploneers
            from almost 3 decades in Real Estate & Hospitality respectively.
            They have left a benchmark in their own fields & now have joined
            hands to make an alliance.
          </p>
          <p>
            United Emperors is a perfect consolidation of Real Estate &
            Hospitality industry.
          </p>
          {/* </motion.div> */}
        </div>
        {/* <motion.div animate={{ y: [100,0, 0, 0], opacity: 1,}}transition={{
                    duration: 2,     
                }} 
                  initial={{ opacity: 0.2,  }}
                > */}
        <img
          src={
            "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          }
          alt=""
        />
        {/* </motion.div> */}
      </div>
      <div className="Section-2-Bottom">
        <div className="Icon-Flex">
          <FaSmile className="Icon-1"/>
          <div>
            <h4>1000</h4>
            <h4>Room alloted</h4>
          </div>
        </div>
        <div className="Icon-Flex">
          <FaBuilding className="Icon-1" />
          <div>
            <h4>12</h4>
            <h4>Buildings</h4>
          </div>
        </div>
        <div>
          <h3> And your happiness. Priceless...</h3>
        </div>
      </div>
    </>
  );
};

export default Section2;
