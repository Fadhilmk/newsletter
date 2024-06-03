// app/dashboard/user/page.jsx
import React from "react";
import "./styles.css";  // Import the CSS file

const SubscribersFormPage = () => {
  const iframeHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Subscribe</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: transparent;
          }
          .container {
            text-align: center;
            border: 2px solid #e5e7eb;
            border-radius: 4px;
            padding: 20px;
            background-color: #fff;
          }
          input {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 10px;
          }
          button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
          }
          button:hover {
            background-color: #45a049;
          }
        </style>
    </head>
    <body>
        <div class="container">
            <input type="email" placeholder="Enter your email">
            <button>Subscribe</button>
        </div>
    </body>
    </html>
  `;

  return (
    <div className="page-container">
      <div className="content-container">
        {/* Left Side - Source Code */}
        <div className="left-side">
          <h2>Source Code</h2>
          <pre className="pre-style">
            {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subscribe</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: transparent;
      }
      .container {
        text-align: center;
        border: 2px solid #e5e7eb;
        border-radius: 4px;
        padding: 20px;
        background-color: #fff;
      }
      input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 10px;
      }
      button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
      }
      button:hover {
        background-color: #45a049;
      }
    </style>
</head>
<body>
    <div class="container">
        <input type="email" placeholder="Enter your email">
        <button>Subscribe</button>
    </div>
</body>
</html>
            `}
          </pre>
        </div>

        {/* Right Side - Iframe */}
        <div className="right-side">
          <iframe
            srcDoc={iframeHtml}
            data-test-id="beehiiv-embed"
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
