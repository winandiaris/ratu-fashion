import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
//import logo from './logo.svg';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>hat page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
