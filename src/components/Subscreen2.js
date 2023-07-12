import React from "react";
import "./Subscreen2.css";

import { Link } from "react-router-dom";

import {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Product from './Product'

import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'

// import baby from '../Img/baby.jpg'
// import food from '../Img/food.jpg'
// import holds from '../Img/holds.jpg'
// import medi from '../Img/medi.jpg'
// import others from '../Img/others.jpg'
const Subscreen2 = ({ imageUrl,description,  price, name, productId,Nprice }) => {
	const dispatch = useDispatch()
  const [userName, setUserName] = useState("")

  const [catagory, setCatagory]= useState("")
  const user = useSelector(state => state.user)
  useEffect(() => {
    setUserName(user.userInfo.details.fullName)
    console.log(user);
    
  }, [user])

  const getProducts = useSelector(state => state.getProducts)
  const {products, loading, error} = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    console.log(catagory);
  }, [catagory])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

	return (
   

<div class="container-fluid">
	<div className="row">
	
		<div className="col-md-12">
			<div className="Subscreen2__title">
				<h3 className="product-category">Shop By Catagory</h3>
			</div>

			<div class="catogorize">
					
					<ul>
					<button ><Link to="/babyproducts" style={{ color: '#000' }}>Baby Products</Link></button>
						<button><Link to="/medicine" style={{ color: '#000' }} >Medicine</Link></button>
						<button><Link to="/households" style={{ color: '#000' }} >House holds</Link></button>
						<button><Link to="/foods" style={{ color: '#000' }}>Foods</Link></button>
						<button><Link to="/others" style={{ color: '#000' }}>Others</Link></button>
					</ul>
				</div>

			<div>
			  <div className="homescreen__products">
        {loading ? (
         <h3> <br/>Loading...</h3>
        ) : error ? (
          <h2>{error}</h2>
        ) : ((catagory? products.filter(product => product.catagory === catagory):products)
        .map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description }
              price={product.price}
              
              imageUrl={product.imageUrl}
              productId={product._id}
              Nprice={product.Nprice}
            />
          ))
        )}
      </div>  
		</div>
			<div class="wrapper">
      <button><Link to="/shop"  style={{ color: '#000' }}>See more</Link></button>
			</div>
		
		</div>
	</div>
</div>


  );
};

export default Subscreen2;
