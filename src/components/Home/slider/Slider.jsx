import React from "react";
import { Link } from "react-router-dom";
import Videoimg from "../../assets/dna-end.mp4";
import './Slider.css'
const Slider = () => {
  return (
    <div className="slidercontainer">
      <div className="leftmask">
       <div className="slidercontent">
        <h1 className="heading">App Development Services</h1>
        <p className="sspara" style={{marginBottom:'2rem'}}>We help you launch and scale your Mobile and Web Apps. Since 2014 we build custom applications loved by millions.</p>
        <Link to='/contact'><button className="btn">Contact Us</button></Link>
        <p >Our Client :- </p>
        <div className="image">
          <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/535624/large_caldam.png" alt="" />
          <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/534362/large_devsym.png" alt="" />
          <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/533020/large_zynalo.png" alt="" />
          <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/264488/large_gamechirp.png" alt="" />
        </div>
       </div>
      </div>
      <div className="mask">
        <video className="vid" autoPlay={true} loop muted>
          <source src={Videoimg} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Slider;
