import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory} from 'react-router';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import WeddingPage from './WeddingsPage';
import PortraitsPage from './PortraitsPage';
import SeniorsPage from './SeniorsPage';
import AboutMePage from './AboutMe';
import PricesPage from './PricesPage';
import ContactPage from './ContactPage';


ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={LandingPage}/>
  <Route path="/" component={App} >,
    <Route path="/home" component={HomePage}/>
    <Route path="/wedding" component={WeddingPage}/>
    <Route path="/portraits" component={PortraitsPage}/>
    <Route path="/seniors" component={SeniorsPage}/>
    <Route path="/aboutMe" component={AboutMePage}/>
    <Route path="/prices" component={PricesPage}/>
    <Route path="/contact" component={ContactPage}/>
  </Route>

</Router>,
  document.getElementById('root')
);
