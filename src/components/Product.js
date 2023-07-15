import "./Product.css";
import { Link } from "react-router-dom";


const Product = ({ imageUrl, description, price, name, productId,Nprice }) => {
  return (

<div className="container">
  <div className="card">
  <img className="card__background" src={imageUrl} alt={name} width="1920" height="2193"/>
    <div className="card__content | flow">
    <div className="card__content--container | flow">
      <h2 className="card__title" ><Link to={`/product/${productId}`} className="btn " >{name}</Link></h2>
      <div className="card__description" >
        {
          price != Nprice ? <div><del style={{color:"red" ,fontWeight:"" }} className=" font-weight-bold">LKR.{price}.00</del>
          <h3 style={{color:"white" ,fontWeight:"bold" }} className=" font-weight-bold">LKR.{Nprice}.00</h3></div> :<h3 style={{color:"white" ,fontWeight:"bold" }} className=" font-weight-bold">LKR.{price}.00</h3>
        }
 
      </div>
      <p className="card__description">
      {description.substring(0, 100)}
      </p>
    </div>
    {/* <button class="card__button"> <Link to={`/product/${productId}`} className="btn " >
          View &nbsp;&nbsp;
           <i class="fa fa-eye" aria-hidden="true"></i> 
        </Link></button> */}
  </div>
    
  </div>
</div>
      
  
    
  );
};

export default Product;
