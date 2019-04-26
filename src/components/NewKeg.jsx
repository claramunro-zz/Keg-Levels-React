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
    props.onNewTicketCreation({name: _name.value, _brand: _brand.value, style: _style.value, alc: _alc.value, price: _price.value});
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
        <form>
          <input
            type='text'
            id='name'
            placeholder='name'
            ref={(input) => { _name = input; }} />
          <input
            type='text'
            id='name'
            placeholder='brand'
            ref={(input) => { _name = input; }} />
          <input
            type='text'
            id='name'
            placeholder='style'
            ref={(input) => { _name = input; }} />
          <input
            type='text'
            id='name'
            placeholder='alc'
            ref={(input) => { _name = input; }} />
          <input
            type='text'
            id='name'
            placeholder='price'
            ></input>

          <button type='submit'>SUBMIT</button>
        </form>
      </div>

      <div>
        <Link to="/"><button>BACK</button></Link>
      </div>

    </div>
  );
}

export default NewKeg;