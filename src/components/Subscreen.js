import React from "react";
import "./Subscreen.css";
import bgImage from './bgscreen.jpg';

const Subscreen = () => {
  return (
    

    <div className="bg" style={{ backgroundImage: `url(${bgImage})` , margin:'-8px 0 0 0 ' }}>

<div class="container-fluid">
        <div className="row">
        <div className="col-md-10 col-sm-7" id="para1">
            <div className="SubscreenImg"><span>K.BAGESH</span> DISTRIBUTORS</div>
         </div>
         <div className="col-md-2 col-sm-2" id="para0" style={{margin: '10px 0'}}>
          {/* <img src="cart.gif" width="150px" height="fit-content" margin="50px 0"></img> */}
        </div>
    </div>
    </div>
    </div>
  );
};

export default Subscreen;
