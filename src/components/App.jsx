import React from 'react';
import Header from './Header';
import KegList from './KegList';
import About from './About';
import NewKegControl from './NewKegControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
// import PintButton from './PintButton';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleMinusOnePint = this.handleMinusOnePint.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    // eslint-disable-next-line no-console
    // console.log(newKeg);
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  // need to link
  // handleMinusOnePint(kegId) {   // needs to take in specific kegId
  //   if (kegId === this.kegId) {
  //     // eslint-disable-next-line no-console
  //     console.log('this one');
  //   }
  // }

  render () {
    return (
      <div>
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto');
          * {
            margin: .2em;
          }
          body {
            background-color: black;
            color: white;
            font-family: 'Roboto', sans-serif;
            padding: 2vw;
          }
          button {
            background-color: red;
            color: color;
            padding: 1em;
            border-radius: 5px;
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
        <Switch>
          <Route exact path='/' render={() => <KegList newList={this.state.masterKegList} />} />
          <Route path='/newKeg' render={() => <NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/about' component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}


export default App;