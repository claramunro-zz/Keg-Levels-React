import React from 'react';
import keg from '../assets/images/keg.png';


function Header(){
  return(
    <div>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Kavivanar');

        .nav {
          color: white;
          background-color: black;
          font-family: 'monospace';
          font-size: 34px;
          padding: 1em;
          text-align: right;
        }

        #logo {
          width: 35px;
        }
      `}</style>
      <img id="logo" src={keg}/>
      <h1 className="nav">KEG LEVELS</h1>
    </div>
  );
}

export default Header;