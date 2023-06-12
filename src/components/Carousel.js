import { Link } from "react-router-dom";
import React from "react";
import "./Carousel.css";

import img from './bgscreen.jpg';
const carousel = () => {
    return(
     
        
       <div className="bg"  style={{ backgroundImage: `url(${img})` , margin:'-8px 0 0 0 ' }}>
       <div class="Container" id="bg1" >
        


    <div id="carouselExampleCaptions" class="carousel slide"  data-bs-ride="carousel">
        <div class="carousel-indicators" >
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> 
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>  */}
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 4"></button>  */}
         
          
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" >
            <img src="./images/carousel1.jpg" class="d-block w-60" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/carousel2.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/carousel3.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/carousel4.jpg" class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
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
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      
    </div>
    </div>
   </div>
    
    )
}

export default carousel