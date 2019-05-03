import React from 'react';
// import PropTypes from 'prop-types';


function pintButton(){  // need to link to specifc keg item
  
  return (
    <div>
      <style jsx global>{`
        #pintButton {
          padding: 1em;
          display: block;
        }
      `}</style>
      <button type="submit" id="pintButton">-1 Pint</button>
    </div>
  );
}

export default pintButton;