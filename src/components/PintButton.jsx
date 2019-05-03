import React from 'react';
// import PropTypes from 'prop-types';


function PintButton(){  // need to link to specifc keg item
  
  return (
    <div>
      <style jsx global>{`
        #pintButton {
          padding: 1em;
          display: block;
          background-color: yellow;
        }
      `}</style>
      <button type="submit" id="pintButton">-1 Pint</button>
    </div>
  );
}

export default PintButton;