import React, { Component } from 'react';
import { Switch, Route, matchPath } from 'react-router-dom';
import './App.css';
import Learn from './Learn';
import Participate from './Participate';
import ParticipatePersonal from './Components/Participate/Personal';
import ParticipateStartup from './Components/Participate/Startup';
import Navbar from './Components/Navbar';
import CreatorStudio from './Components/CS';

const pathName= window.location.href.replace("http://localhost:3000/", " ");
class App extends Component {

  state = {
    apptitle: pathName.replace("/",">"),
  };

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <Navbar title={this.state.apptitle}/>  
          <Route path='/participate' component={Participate}/>
        </header>
        
        <Switch>
          <Route exact path='/' component={Learn}/>
          <Route exact path='/learn' component={Learn}/>
          <Route exact path='/CreatorStudio' component={CreatorStudio}/>
          <Route exact path='/participate' component={ParticipatePersonal}/> 
          <Route exact path='/participate/personal' component={ParticipatePersonal}/> 
          <Route exact path='/participate/startup' component={ParticipateStartup}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
