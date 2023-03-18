import React from "react";
import "./Section4.css";

import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Section4 = () => {
  return (
    <>
       <div className="Section-4-Top-Text">
        <h1>CONTACTS</h1>
      </div>
      <div className="Section-4-Flex">
        <div className="All-input">
       
          <div>
            <div className="input">
              <input type="Name" name="Name" placeholder="Name" />
            </div>
            <div className="input">
              <input type="Name" name="Name" placeholder="Email" />
            </div>
            <div className="input">
              <input type="Name" name="Name" placeholder="Telephone" />
            </div>
          </div>
          <div>
          <div className="Text-Area">
            <textarea rows="6" placeholder="Message"></textarea>
          </div>
          <div>
            <button>SEND</button>
          </div>
          </div>
        </div>
        <div>
          <div style={{display:'flex', gap:'5px'}}>
            <BsTelephoneFill />
            <h4>03224447077 / 03314447077</h4>
          </div>
          <div className="Icons">
            <FaFacebookF />
            <BsTwitter />
            <FaTelegramPlane />
            <FaInstagram />
          </div>
          <div className="Address">
            <IoLocationSharp />
            <p>
              8th floor, The Affaries, XYZ Beach road, Dreamland Fantasy Land,
              Unknown - 000 000.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
