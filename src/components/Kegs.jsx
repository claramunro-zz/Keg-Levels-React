import React from 'react';
import PropTypes from 'prop-types';

function Kegs(props){
  return (
    <div>
      <style jsx global>{`
        .ticket {
          color: black;
          font-family: 'Kavivanar', cursive;
          font-size: 15px;
          padding: 1em 0 1em 2em;
          background-color: #FFCA38;
          display: block;
        }
        .ticket:hover {
          background-color: #60B330;
          color: white;
        }
        .hr {
          height: 1px;
          color: red;
          background-color: red;
          border: none;
          width: 100%;
          height: 3px;
        }
      `}</style>
      <div className="ticket">
        <h2 className="clickable">{props.beer}</h2>
        <h3 className="clickable">{props.location}</h3>
        <p className="clickable"><em>{props.hours}</em></p>
        <p className="clickable"><b>{props.booth}</b></p>
      </div>
      <hr className="hr"/>

    </div>
  );
}

Kegs.propTypes = {
  beer: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Kegs;