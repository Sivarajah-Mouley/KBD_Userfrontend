import './HomeScreen.css'
import {useEffect,useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Producthard from '../components/Producthard'
import Corosal from "../components/Carousel"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Components
import Product from '../components/Product'

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
    
  }, [])

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
     
      <Producthard/>
    </div>
  )
}

export default HomeScreen
