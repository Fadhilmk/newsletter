// app/dashboard/subscribers/subscribers-form/page.jsx
import React from "react";
import "./styles.css";

const SubscribersFormPage = () => {
  return (
    <div>
      <h1 className="heading">Subscribers Form</h1>
      <div className="container">
        <div className="left-side">
          <pre className="pre-style">
            {`
<iframe src="/form.html" data-test-id="subscribe-form" width="100%" height="320" 
frameBorder="0" scrolling="no" style="border-radius: 4px; border: 2px solid #e5e7eb; margin: 0; background-color: transparent;"></iframe>
            `}
          </pre>
        </div>

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
    </div>
  );
};

export default SubscribersFormPage;
