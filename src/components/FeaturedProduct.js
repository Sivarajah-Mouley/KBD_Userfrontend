import React from "react";
import "./FeaturedProduct.css";
import { Link } from "react-router-dom";
import promo1 from '../Img/promotion1.jpg'
import promo2 from '../Img/promotion2.jpg'
import promo3 from '../Img/promotion3.jpg'

const FeaturedProduct = () => {
  return (
   

<div class="container-fluid" id="feapd1">
	<div className="row">
	<div className="col-md-12">
 
 <h3 className="product-topic">Featured Products</h3>


   
	</div>
	</div>
      
	<div className="row">
	<div className="col-md-12">
    <div class="wrapper2">
		<div class="gallery2">
			<ul>
			
				<li><Link to="/shop" ><img src={promo1} alt="Promotion1" width="80" height="80" /></Link></li>
				<li><Link to="/shop" ><img src={promo2} alt="Promotion2" width="80" height="80" /></Link></li>
				<li><Link to="/shop" ><img src={promo3} alt="Promotion3" width="80" height="80" /></Link></li>
				
			</ul>
		</div>
    </div>
      
    </div>
	</div>

</div>



  );
};

export default FeaturedProduct;
