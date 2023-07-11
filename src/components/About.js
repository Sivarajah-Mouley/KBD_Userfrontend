import React from "react";
import "./About.css";
import giff from '../Img/userrew.gif';

const About = () => {
  return (
    <div className="container-fluid about-container">
    
        <div className="row">
        
          <div className="col-md-6">
          <div className="About__title">
            <h3 className="About_text">Who We Are</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="paragraph1" id="title1">
            At<span> K.Bagesh Distributors</span>, we are a team of dedicated individuals who are passionate about providing the best possible grocery shopping experience to our customers. Our mission is to make grocery shopping easy, affordable, and convenient for everyone. We are committed to offering a wide selection of high-quality products, competitive prices, and excellent customer service. As a profit-free service, we believe that everyone should have access to affordable groceries, and we are proud to serve our community in this way. <br/><span>Thank you for choosing K.Bagesh Distributors for your grocery needs.</span>
          </div>
        </div>
        <div className="col-md-6">
            <div className="svg-bg">
            <img src={giff} alt="bg" className="giffbg"></img>
            </div>
        </div>
        </div>
      </div>
   
  );
};

export default About;
