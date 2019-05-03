import React from 'react';
import PropTypes from 'prop-types';
import PintButton from './PintButton';

function Kegs(props){
  return (
    <div>
      <style jsx global>{`
        .keg {
          font-size: 15px;
          padding: 1em;
          display: block;
        }
      `}</style>
      <div className="keg">
        <h2>{props.name}</h2>
        <h3>{props.brand}</h3>
        <p><em>{props.style}</em></p>
        <p><b>{props.alc}</b></p>
        <p><b>{props.price}</b></p>
        <p><b>{props.pintsLeft} Pints Left</b></p>
        <p><b>ID: {props.id}</b></p>

        <div>
          <PintButton />
        </div>
      </div>

    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  alc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired // number type
};

export default Kegs;