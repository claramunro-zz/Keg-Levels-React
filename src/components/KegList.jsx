import React from 'react';
import Kegs from './Kegs';
import { Link } from 'react-router-dom';


let masterKegList = [  
  {  
    name: 'Trumer',
    brand: 'Trumer Brewing',
    style: 'Pilsner',
    alc: '6%',
    price: '$5'
  },
  {  
    name: 'Trumer',
    brand: 'Trumer Brewing',
    style: 'Pilsner',
    alc: '6%',
    price: '$5'
  },
  {  
    name: 'Trumer',
    brand: 'Trumer Brewing',
    style: 'Pilsner',
    alc: '6%',
    price: '$5'
  }
];

function KegList(){
  return (
    <div>

      <div>
        <Link to="/newKeg"><button>New Keg</button></Link>
      </div>

      {masterKegList.map((keg, index) =>
        <Kegs
          name={keg.name}
          brand={keg.brand}
          style={keg.style}
          alc={keg.alc}
          price={keg.price}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;