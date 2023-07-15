import './Navbar.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useMemo,useState,useEffect} from 'react'
import {logout} from '../utils/localstorage'
import {setInitialState} from '../redux/actions/userAction'

import logoImage from './logoo.png'

const Navbar = ({click}) => {
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((json) => setNotices(json));
      console.log(notices);
  }, []);
  const [notices ,setNotices]=useState(
    ""
  )
  const cart = useSelector(state => state.cart)
  const history = useHistory()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState("")
  const [catagory, setCatagory]= useState("")
  
  useEffect(() => {
    console.log(catagory);
  }, [catagory])

  useEffect(() => {
    setUserName(user.userInfo.details.fullName)
    console.log(user.userInfo.details.fullName);
    
  }, [user])
  // console.log({user})

  const {cartItems} = cart
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const _handleLogout = () => {
    dispatch(setInitialState())
    logout()
    history.push('/')
  }
  const [modalShow, setModalShow] = useState(false);


  return (

    <nav className="navbar">
     <div className="navbar__logo">
     <Link to="/" ><img src={logoImage} alt="Logo description" width="60" height="60" /></Link>
    </div>
          
       {/* <div class="Category-Center">
       
        <select class="form-select" 
        onChange={(e)=>{
          setCatagory(e.target.value)
          console.log(catagory)
        }}>
          <option selected>Search Product </option>
          <option value="Baby Products">Baby Products</option>
          <option value="Medicine">Medicine</option>
          <option value="House holds">House holds</option>
          <option value="Other">Others</option>
        </select>
      </div> */}

      <ul className="navbar__links">
        {/* <li>
        <p5 className="text-white"> Welcome {userName? userName:""}&nbsp;</p5>
        </li> */}
           

        <li>
          <Link to="/shop"  className='bgcolorchange' >Products</Link>
          <span></span><span></span><span></span><span></span>
        </li>
        <li >
          <Link to="/notices"  className='bgcolorchange' >Flash Deals</Link>
          <span></span><span></span><span></span><span></span>
        </li>
        <li>
          <Link to="/cart" className='bgcolorchange' >

         
            <i className="fas fa-shopping-cart"></i>
            
              <span className="cartlogo__badge">{getCartCount()}
              </span>
              <span></span><span></span><span></span><span></span>
           
          </Link>
        </li>
        

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />


       
        

        {!user.userInfo.isLogin ? (
          <li>
            <Link to="/signin" className='bgcolorchange' >
        {/* Sign in  &nbsp;&nbsp;&nbsp; */}
           <i className="fas fa-user"></i>
           <span></span><span></span><span></span><span></span>
           </Link>
          </li>
        ) : (
          <li>
            {/* <p onClick={_handleLogout}  className='bgcolorchange' >Logout</p>
            &nbsp;
            <i class="fas fa-sign-out-alt"></i>
            <span></span><span></span><span></span><span></span> */}

            <Link to="/" onClick={_handleLogout} className='bgcolorchange' >
        {/* Sign out &nbsp;&nbsp;&nbsp; */}
        <i className="fas fa-sign-out-alt"></i>
           <span></span><span></span><span></span><span></span>
           </Link>

          </li>
        )}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div> 

     
    </nav>
  )
}

export default Navbar
