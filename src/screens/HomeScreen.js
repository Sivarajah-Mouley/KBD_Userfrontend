import './HomeScreen.css'
import {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Corousel from "../components/Carousel"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Subscreen2 from '../components/Subscreen2'
import FeaturedProducts from '../components/FeaturedProduct';

// Components
import Product from '../components/Product'
import About from '../components/About'


import Subscreen from '../components/Subscreen';
//import Footer from '../components/Footer';
//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'

const HomeScreen = () => {
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
    
    <div className="homescreen">
      

        <Subscreen/>
      <Corousel/>
      <FeaturedProducts/>
      
      <Subscreen2/>
      <About/>
    

      
      
           
       
      
      
       



      < br/>
     <br/>

    </div>
  )
}

export default HomeScreen
