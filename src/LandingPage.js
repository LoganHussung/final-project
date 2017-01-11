import React, { Component } from 'react';
import {Link} from 'react-router';
import './index.css';


export default class LandingPage extends Component {
      render() {
        return (
          <div className="container">
            <div className="landing">
              <h1 className="papyrus"> Tanna Marie </h1>
              <h1 className="helveticaNeue"> PHOTOGRAPHY </h1>
              <Link className="homelink" to={"/home"}> Enter Site </Link>
            </div>
          </div>
        );
      }
    }
