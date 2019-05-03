import React from 'react';

function pintButton(){
  return (
    <div>
      <style jsx global>{`
        #pintButton {
          font-size: 15px;
          padding: 1em 0 1em 2em;
          display: block;
        }
      `}</style>
      <button type="submit" id="pintButton">-1 Pint</button>
    </div>
  );
}

export default pintButton;