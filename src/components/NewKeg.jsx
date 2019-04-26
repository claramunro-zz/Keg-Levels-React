import React from 'react';

function NewKeg(){
  return (
    <div>
      <p>New Keg Form</p>
      <input type='text' placeholder='name'></input>
      <input type='text' placeholder="type"></input>
      <input type='text' placeholder="alc %"></input>
      <input type='text' placeholder="cost $"></input>
      <button>SUBMIT</button>
    </div>
    <div>
        <button>BACK</button>
    </div>
);
}

export default NewKeg;