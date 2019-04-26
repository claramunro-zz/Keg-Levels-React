import React from 'react';
import Header from './Header';
import KegList from './KegList';

function App(){
  let columns = {
    display: 'grid',
    gridTemplateColumns: '30vw 50vw',
    gridgap: '80px'
  };
  return (
    <div>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto');

        body {
          background-color: black;
          color: white;
          font-family: 'Roboto', sans-serif;
        }
        button {
          background-color: white;
          color: black;
        }
        button:hover {
          cursor: pointer;
          color: grey;
        }

        .nav {
          font-size: 34px;
          padding: 1em;
          text-align: right;
        }

        #logo {
          width: 35px;
        }
      `}</style>

      <div>
        <Header/>
      </div>

      <div style={columns}>
        <div>
          <KegList/>
        </div>
   
      </div>

    </div>
  );
}

export default App;