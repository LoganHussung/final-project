import React, { Component } from 'react';
import logo from './Images/logo.png';
import contactback from './Images/contactback.jpg';
import {Link} from 'react-router';




export default class ContactPage extends Component {
      render() {
        return (
          <div className="Container">
            <div className="sideMargin">
              <img className="marginLogo" role="presentation" src={logo} />
              <h1 className="sideLogo">Tanna Marie Photography</h1>
            </div>
            <div className="contactContainer">
              <div className="contactInfo">
                <h1>Contact</h1>
                <p>Phone: 976.334.2356</p>
                <p>Email: tannahowwie@gmail.com</p>
                <ul>
                  <li><h3>Best Shoot Locations</h3></li>
                  <li>Uptown</li>
                  <li>Downtown</li>
                  <li>Como Neighborhood</li>
                  <li>Loring Park</li>
                  <li>Nature</li>
                </ul>
              </div>
              <div className="socialInfo">
                <h1>Social Media</h1>
                <a href="https://www.facebook.com/tanna.howie" target="_blank"><p>Facebook(Personal)</p></a>
                <a href="https://www.facebook.com/Tanna-Marie-Photography-328778230497501/" target="_blank"><p>Facebook(Photography)</p></a>
                <a href="https://twitter.com/Tanna_Marie_" target="_blank"><p>Twitter </p></a>
                <a href="https://www.instagram.com/tannamariefess/?hl=en" target="_blank"><p>Instagram </p></a>
              </div>
              <div className="calendarInfo">
                <h1>Calendar</h1>
                <Link className="calendarButton" to={"/calendar"}> Schedule a shoot </Link>
              </div>
            </div>
          </div>
        );
      }
    }
