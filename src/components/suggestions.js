
import { useState } from "react";
import './suggestions.css'
function Car(){
    const [suggest, setSuggest] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/api/suggestions/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            suggest: suggest,
         
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        alert("suggestions added successfully");
      } else {
        alert("unknown error on uploading");
      }
    } catch (err) {
      console.log(err);
    }
  };
return(
  <div className="container">
      <div className="row" >
       
              <div className="col-md-3"></div>
       
              <div className="col-md-6"  >
          
                             <div className="comment" >Your Comments</div>  
               </div>
              <div className="col-md-3"></div> 
      </div>
        
       <div className="row">
        <div className="col-8 mx-auto m-5">
             <form onSubmit={handleSubmit}>
         <div className="form-group " style={{height:"500px"}}onSubmit={handleSubmit} >
         <label for="exampleFormControlTextarea1" id="label1">we are eager to get your commands</label>
    {/* <textarea className="form-control" id="exampleFormControlTextarea1"  style={{height:"500px"}} onChange={(e) => setSuggest(e.target.value)}>
    <label for="exampleFormControlTextarea1" ></label>
    </textarea>  */}
    </div>
    </form> 
               <button type="submit" className="btn " id="btn1">Submit</button>

      
              
            </div>
      </div> 
</div>
    )
}
export default Car;