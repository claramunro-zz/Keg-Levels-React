import React from 'react';
import { Link } from 'react-router-dom';


function About(){
  return (
    <div>
      <div>
        <h1>About Us</h1>
        <p>Lorem Ipsum</p>
      </div>
      <div>
        <Link to="/"><button>BACK</button></Link>
      </div>

    </div>
  );
}

export default About;