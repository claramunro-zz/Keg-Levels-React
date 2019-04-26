import React from 'react';
import Kegs from './Kegs';

let masterKegList = [  
  {  
    beer: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {  
    beer: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {  
    beer: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {  
    beer: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {  
    beer: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {  
    beer: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function KegList(){
  return (
    <div>
      <style jsx global>{`
      
      `}</style>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Kegs
          day={keg.day}
          location={keg.location}
          hours={keg.hours}
          booth={keg.booth}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;