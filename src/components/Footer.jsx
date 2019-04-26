import React from 'react';


function Footer(){
  return(
    <div>
      <style jsx global>{`
        .footer {
            background-color: red;
            color: black;
        }
      `}</style>
      <h1 className="footer">the foot</h1>
    </div>
  );
}

export default Footer;