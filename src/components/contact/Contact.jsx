import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div><div className="Contactcontainer">
    <div className="contactcontent">
      <div className="left-side">
        <div className="address contactdetails">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">Surkhet, NP12</div>
          <div className="text-two">Birendranagar 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+0098 9893 5647</div>
          <div className="text-two">+0096 3434 5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">Grafikally@gmail.com</div>
          <div className="text-two">info.Grafikally@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my App, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          
        </div>
        <div className="button">
        <Link to='#'><input type="button" value="Send Now" /></Link>
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  )
}

export default Contact