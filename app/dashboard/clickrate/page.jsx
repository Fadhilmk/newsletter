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
      <div className="right-side">
          <iframe
            src="/form.html"
            data-test-id="subscribe-form"
            width="100%"
            height="320"
            frameBorder="0"
            scrolling="no"
            className="iframe-style"
          ></iframe>
        </div>
    </div>
  );
};

export default ClickRatePage;
