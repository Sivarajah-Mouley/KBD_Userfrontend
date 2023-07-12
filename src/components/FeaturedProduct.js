import React from "react";
import "./FeaturedProduct.css";
import { Link } from "react-router-dom";
import promo1 from '../Img/promotion1.jpg'
import promo2 from '../Img/promotion2.jpg'
import promo3 from '../Img/promotion3.jpg'

import {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Product from './Product'

import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'

const FeaturedProduct = () => {
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
   

<div class="container-fluid" id="feapd1">
	<div className="row">
	<div className="col-md-12">
 
 <h3 className="product-topic">Featured Products</h3>


   
	</div>
	</div>
      
	<div className="row">
	<div className="col-md-12">
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (( products.filter(person => person.price !=person.Nprice))
        .map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
              Nprice={product.Nprice}
            />
          ))
        )}
      </div>
    <div class="wrapper2">
	
    </div>
      
    </div>
	</div>

</div>



  );
};

export default FeaturedProduct;
