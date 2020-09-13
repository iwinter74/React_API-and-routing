import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './404';
import CarList from './CarList';
import DetailCar from './DetailCar'
import './App.css'
import News from './Components/News';
import Business from './Components/Business';
import Entertainment from './Components/Entertainment';
import Sports from './Components/Sports';
import Beer from './Beers/Beer';
import BeerList from './Beers/BeerList';
import BeerDetails from './Beers/BeerDetails';
import RandomBeer from './Beers/RandomBeer';
import BeerItem from './Beers/BeerItem';


function App(props) {
  return (
    <Router>
      {props.children}
      <div className="App">
      <BeerItem />

        <nav>
          <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}
            {/* New */}
            {/* <li><Link to="/cars">Cars</Link></li> */}
            {/* End New */}
            {/* <li><Link to="/news">Home</Link></li>
            <li><Link to="/news/business">Business</Link></li>
            <li><Link to="/news/entertainment">Entertainment</Link></li>
            <li><Link to="/news/sports">Sports</Link></li> */}
 
          </ul>
        </nav>


        <Switch>
          {/* <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/cars" exact>
            <CarList />
          </Route>
          <Route path="/cars/:id" component={DetailCar} /> */}
          {/* <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/news/business" >
          <Business />
          </Route>
          <Route path="/news/entertainment" >
          <Entertainment />
          </Route>
          <Route path="/news/sports">
            <Sports/>
          </Route> */}
          <Route path="/" exact>
            <Beer />
          </Route>
          <Route path="/beers" exact>
            <BeerList />
          </Route>
          <Route path="/beers/:id" component={BeerDetails} /> 
          <Route path="/randombeer" exact>
            <RandomBeer />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;

