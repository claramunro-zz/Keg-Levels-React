import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg';
import { Switch, Route } from 'react-router-dom';


function App(){
  let columns = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridgap: '10px'
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

      <div style={columns}>
        <Header/>
      </div>

      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newKeg' component={NewKeg} />
      </Switch>

      <div>
   
      </div>

    </div>
  );
}

export default App;