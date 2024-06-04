// app/dashboard/user/page.jsx
import React from "react";

const ClickRatePage = () => {
  return (
    <div>
      {
        /* Add your user page content here */
        <div className="box-container">
          <div className="box">
           <img  className="click_image"src="/assets/images/click_image.png"/>
            <div className="text">
              <h2 className="count">1.35m</h2>
              <h2 className="title">Total Clicks</h2>
            </div>
          </div>
        </div>
      }
      
    </div>
  );
};

export default ClickRatePage;
