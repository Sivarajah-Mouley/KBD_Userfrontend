import { Link } from "react-router-dom";
import React from "react";
import "./Carousel.css";

import img from './bgscreen.jpg';
const carousel = () => {
    return(
     
        
     
       <div className="Container-fluid" >
        
         <div className="row">
        <div className="col-md-12">


    <div id="carouselExampleCaptions" className="carousel slide"  data-bs-ride="carousel">
        <div className="carousel-indicators" >
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> 
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>  */}
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 4"></button>  */}
         
          
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active" >
            <img src="./images/carousel1.jpg" className="d-block w-100" alt="..."   />
            
          </div>
          <div className="carousel-item">
            <img src="./images/carousel2.jpg" className="d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src="./images/carousel3.jpg" className="d-block w-100" alt="..."  />
           
          </div>
          <div className="carousel-item">
            <img src="./images/carousel4.jpg" className="d-block w-100" alt="..." />
           
          </div>
          {/* <div class="carousel-item">
            <img src="./images/carousel5.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div> */}
          {/* <div class="carousel-item">
            <img src="./images/carousel6.jpeg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div> */}
          {/* <div class="carousel-item">
            <img src="./images/carousel7.jpeg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div> */}
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
         
          <i className='fas fa-chevron-circle-left' style={{ fontSize: '48px', color: 'black' }}></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <i className='fas fa-chevron-circle-right' style={{ fontSize: '48px', color: 'black' }}></i>
          <span className="visually-hidden">Next</span>
        </button>
      
    </div>
    </div>

    </div>
    </div>
 
    
    )
}

export default carousel