import React from 'react';
import "./error.scss";

const Error = () => {
  let params = new URLSearchParams(window.location.search);
  let msg = params.get('msg');

  return (
    <div className="container">
      <div className="banner error">
          <span className="message">{msg ? msg : "Server Error"}</span>    
      </div>
    </div>
    
  )
}

export default Error;
