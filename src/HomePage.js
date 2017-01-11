import React, { Component } from 'react';
import grandpa from './Images/grandpa.jpg';
import blueshirt from './Images/blueshirt.jpg';
import grandma from './Images/grandma.jpg';
import homeWedding from './Images/homewedding.jpg';
import baby from './Images/baby.jpg';
import logo from './Images/logo.png';


export default class HomePage extends Component {

      render() {
        return (
          <div className="container">
            <div className="sideMargin">
              <img className="marginLogo" role="presentation" src={logo} />
              <h1 className="sideLogo">Tanna Marie Photography</h1>
            </div>
            <div className="contentContainer">
              <div className="homePics">
              <div className="longPics">
                <img className="wpic" role="presentation" src={grandpa} />
                <img className="wpic" role="presentation" src={blueshirt} />
                <img className="wpic" role="presentation" src={grandma} />
                <img className="wpic" role="presentation" src={blueshirt} />
              </div>
              <div className="widePics">
                <img className="hpic" role="presentation" src={baby} />
                <img className="hpic" role="presentation" src={homeWedding} />
                <img className="hpic" role="presentation" src={baby} />
              </div>
              <div className="longPics">
                <img className="wpic" role="presentation" src={grandpa} />
                <img className="wpic" role="presentation" src={blueshirt} />
                <img className="wpic" role="presentation" src={grandpa} />
                <img className="wpic" role="presentation" src={blueshirt} />
              </div>
              </div>
            </div>
          </div>

        );
      }
    }
