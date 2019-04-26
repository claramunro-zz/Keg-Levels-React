import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function NewKeg(props){
  let _name = null;
  let _brand = null;
  let _style = null;
  let _alc = null;
  let _price = null;

  
  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, _brand: _brand.value, style: _style.value, alc: _alc.value, price: _price.value});
    _name.value = '';
    _brand.value = '';
    _style.value = '';
    _alc.value = '';
    _price.value = '';
  }


  return (
    <div>

      <div class='formName'>
        <p>New Keg Form</p>
        <form onSubmit={handleNewKegSubmission}>
          <input
            type='text'
            id='name'
            placeholder='name'
            ref={(input) => { _name = input; }} />
          <input
            type='text'
            id='brand'
            placeholder='brand'
            ref={(input) => { _brand = input; }} />
          <input
            type='text'
            id='style'
            placeholder='style'
            ref={(input) => { _style = input; }} />
          <input
            type='text'
            id='alc'
            placeholder='alc'
            ref={(input) => { _alc = input; }} />
          <input
            type='text'
            id='price'
            placeholder='price'
            ref={(input) => { _price = input; }} />

          <button type='submit'>SUBMIT</button>
        </form>
      </div>

      <div>
        <Link to="/"><button>BACK</button></Link>
      </div>

    </div>
  );
}

NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKeg;