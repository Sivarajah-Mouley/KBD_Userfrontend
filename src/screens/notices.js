import {React,useState,useEffect} from 'react'
import Navbar  from '../components/Navbar'
import './notices.css'

function Notice() {
    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("http://localhost:5000/api/notice")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  return (
    <div className='col-10 mx-auto m-2' style={{height:"1000px"}}>
      <div className="p-3 mb-2  text-white text-center col-6 border rounded mx-auto" style={{ backgroundColor: "#26bfbf", fontSize:'20px',fontFamily:'open sans' }} >
        Flash Deals</div>
        {users.length > 0 && (
        <ul>
          {users.map(user => (
            <div className="card">
            <div className="card-header">
              let's enjoy shopping with us!
            </div>
            <div className="card-body">
              <h5 className="card-title">{user.type}</h5>
              <p className="card-text">{user.details}</p>
            </div>
          </div>
          ))}
        </ul>
      )}



    </div>
    
  

        
        
        
    
  )
}

export default Notice