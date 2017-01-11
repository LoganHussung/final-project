import React, { Component } from 'react';
import logo from './Images/logo.png';
import aboutme1 from './Images/aboutMe1.jpg';
import aboutme2 from './Images/aboutme2.jpg';
import aboutme3 from './Images/aboutme3.jpg';
import aboutme4 from './Images/aboutme4.jpg';



export default class AboutMePage extends Component {
      render() {
        return (
          <div className="Container">
            <div className="aboutMeContainer">
                <div className="stacked">
                  <img className="hpic" role="presentation" src={aboutme3} />
                  <img className="hpic" role="presentation" src={aboutme4} />
                </div>
                <img className="apic" role="presentation" src={aboutme2} />
                <img className="apic" role="presentation" src={aboutme1} />
                <div className="aboutSideMargin">
                  <img className="marginLogo" role="presentation" src={logo} />
                  <h2>About Me</h2>
                  <p> I am an inspiring photographer in the Minneapolis area. I have always had a passion and heart for photography, people, and nature! Nothing makes me more happy then caputring a special moment for someone and seeing the happiness it brings them. </p>
                </div>
            </div>
          </div>
        );
      }
    }
