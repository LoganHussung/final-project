import React, { Component } from 'react';
import logo from './Images/logo.png';
import prices1 from './Images/prices1.jpg';
import prices2 from './Images/prices2.jpg';
import prices3 from './Images/prices3.jpg';



export default class PricesPage extends Component {
      render() {
        return (
          <div className="contentContainer">
            <div className="pricesContainer">
                <div className="weddingCat">
                  <h1 className="priceTitle">Weddings</h1>
                  <ul>
                    <li>90 minute photography session</li>
                    <li>Three Outfits/Looks</li>
                    <li>250 Photos with full rights to digital files</li>
                    <li>10 edited & retouched photos of your choice</li>
                  </ul>
                  <h1 className="sideLogoPrice">Tanna Marie Photography</h1>
                </div>
                <div className="seniorCat">
                  <h1 className="priceTitle">Senior Sessions</h1>
                  <ul>
                    <li>90 minute photography session</li>
                    <li>Three Outfits/Looks</li>
                    <li>250 Photos with full rights to digital files</li>
                    <li>10 edited & retouched photos of your choice</li>
                  </ul>
                  <h1 className="sideLogoPrice2">Tanna Marie Photography</h1>
                </div>
                <div className="portraitCat">
                  <h1 className="priceTitle">Portraits</h1>
                  <ul>
                    <li>90 minute photography session</li>
                    <li>Three Outfits/Looks</li>
                    <li>250 Photos with full rights to digital files</li>
                    <li>10 edited & retouched photos of your choice</li>
                  </ul>
                  <h1 className="sideLogoPrice">Tanna Marie Photography</h1>
                </div>

            </div>
          </div>
        );
      }
    }
