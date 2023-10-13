import React from "react";
import "./Services.css";
import Strategyimg from '../../assets/strategy.png'
import Designimg from '../../assets/design.png'
import AppImg from '../../assets/AppEngineering.png'
const Projects = () => {
  return (
    
    <div className="boxContainer">
      <div className="sheading">Services</div>
       <div className="firstpara">
       <p className="paragrapha">
        Our website and mobile application development company serves clients
        with R&D, prototyping, infrastructure and architecture development, and
        ongoing agile product delivery, all while adhering to strict compliance
        and security standards.
      </p>
       </div>
      <div className="scards">
        <div className="book">
        <p>
              Defining powerful endgames for your business and how to achieve them
            </p> 
          
          <div className="cover">
          <div className="proimg">
          <img src={Strategyimg} alt="img" />

          </div>
             <h4>Strategy</h4>
           
          </div>
        </div>
        <div className="book">
        <p>
              Transforming vision into human-centered digital and physical
              experiences
            </p>
      
          <div className="cover">
          <div className="proimg">
          <img src={Designimg} alt="img" />

          </div>
            <h4>Design </h4>
            
          </div>
        </div>
        <div className="book">
        <p>
            Building and developing full stack scalable technology solutions
            </p>
      
          <div className="cover">
          <div className="proimg">
          <img src={AppImg} alt="img" />

          </div>
            <h4>Engineering  </h4>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
