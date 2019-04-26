import React from 'react';
import { Link } from 'react-router-dom';


function NewKeg(){
  return (
    <div>
      <div>
        <p>New Keg Form</p>
        <input type='text' placeholder='name'></input>
        <input type='text' placeholder="type"></input>
        <input type='text' placeholder="alc %"></input>
        <input type='text' placeholder="cost $"></input>
        <button type='submit'>SUBMIT</button>
      </div>
      <div>
        <Link to="/"><button>BACK</button></Link>
      </div>

    </div>
  );
}

export default NewKeg;