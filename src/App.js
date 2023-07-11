import './App.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Subscreen from './components/Subscreen';
import Suggestions from "./screens/suggestions"
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'

import Notices from './screens/notices'
import Shop from './screens/shop'


import Carousel from './components/Carousel'
import Footer from './components/Footer'
// Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'
import BabyProducts from './screens/Babyproducts'
import Medicine from './screens/Medicine'
import Households from './screens/Households'
import Foods from './screens/Foods'
import Others from './screens/others'

import {useDispatch} from 'react-redux'
import {fetchCart} from './redux/actions/cartActions'
import {setUserDeatils} from './redux/actions/userAction'


function App() {
  const [sideToggle, setSideToggle] = useState(false)
  // fetchCart
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart())
    dispatch(setUserDeatils())
  }, [dispatch])

  return (
    <Router>
   
      <Navbar click={() => setSideToggle(true)} />
      
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      

      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/babyproducts" component={BabyProducts} />
          <Route exact path="/medicine" component={Medicine} />
          <Route exact path="/households" component={Households} />
          <Route exact path="/foods" component={Foods} />
          <Route exact path="/others" component={Others} />
          <Route exact path="/notices" component={Notices} />
          {/* <Route exact path="/notices" component={Notices} /> */}
       
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/suggestions" component={Suggestions} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      
        <Footer/>
      </main>
     

    </Router>
  )
}

export default App
