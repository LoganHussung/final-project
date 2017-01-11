import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="containingDiv">
          <div>
            {this.props.children}
          </div>
        <div className="navDiv">
          <ul className="nav">
            <li className="navItem"><Link to={'/home'}>Home </Link></li>
            <li className="navItem"><Link to={'/wedding'}> Weddings </Link></li>
            <li className="navItem"><Link to={'/portraits'}> Portraits</Link></li>
            <li className="navItem"><Link to={'/seniors'}> Senior Sessions </Link></li>
            <li className="navItem"><Link to={'/aboutMe'}> About Me </Link></li>
            <li className="navItem"><Link to={'/prices'}> Prices </Link></li>
            <li className="navItem"><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
