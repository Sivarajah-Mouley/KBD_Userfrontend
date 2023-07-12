

import { useState } from "react";
import './suggestions.css'

function Suggestion() {
  const [suggest, setSuggest] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
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
        alert("Suggestions added successfully");
      } else {
        alert("Unknown error on uploading");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="comment" onClick={handlePopupOpen}>
          Your Comments
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handlePopupClose}>
              Close
            </button>
            <div className="row">
               <div className="col-md-2">  </div>
              <div className="col-md-8" >
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ height: "500px" }}>
                <label htmlFor="exampleFormControlTextarea1" id="label1">
                  We are eager to get your comments
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  style={{ height: "500px" }}
                  onChange={(e) => setSuggest(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn" id="btn1">
                Submit
              </button>
            </form>
            </div>
            <div className="col-md-2">  </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Suggestion;