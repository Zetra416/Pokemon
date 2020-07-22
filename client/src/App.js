import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import {Provider }from 'react-redux';
import store from './store';
import './App.css'
//Pages
import Home from './pages/Home/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import Favourite from './pages/Favourite/Favourite';

function App() {
  return (

      <Provider store={store}>
        <div className = "app">
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/pokemon" component={Pokemon}/>
              <Route exact path="/favourite" component={Favourite}/>
            </Switch>
        </Router>
        </div>
      </Provider>
  );
}

export default App;
