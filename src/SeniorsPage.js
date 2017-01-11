import React, { Component } from 'react';
import logo from './Images/logo.png';


export default class SeniorsPage extends Component {
      render() {
        return (
          <div className="container">
            <div className="sideMargin">
              <img className="marginLogo" role="presentation" src={logo} />
              <h1 className="sideLogo">Tanna Marie Photography</h1>
            </div>
            <div className="contentContainer">
              Seniors
            </div>
          </div>
        );
      }
    }
