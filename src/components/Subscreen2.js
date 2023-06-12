import React from "react";
import "./Subscreen2.css";
import { Link } from "react-router-dom";
import baby from '../Img/baby.jpg'
import food from '../Img/food.jpg'
import holds from '../Img/holds.jpg'
import medi from '../Img/medi.jpg'
import others from '../Img/others.jpg'
const Subscreen2 = () => {
  return (
   

<div class="container">
 <div class="Subscreen2__title">
 <h3 class="product-category">Shop By Catagory</h3>


    </div>
   

    <div class="wrapper">
		<div class="gallery">
			<ul>
			
				<li><Link to="/shop" ><img src={baby} alt="Baby Products" width="80" height="80" /></Link></li>
				<li><Link to="/shop" ><img src={medi} alt="Medicine" width="80" height="80" /></Link></li>
				<li><Link to="/shop" ><img src={holds} alt="House holds" width="80" height="80" /></Link></li>
				<li><Link to="/shop" ><img src={food} alt="Foods" width="80" height="80" /></Link></li>
				<li><Link to="/shop" ><img src={others} alt="Others" width="80" height="80" /></Link></li>
				
			</ul>
		</div>
    </div>
      
</div>


  );
};

export default Subscreen2;
