import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Section0 from './Section0.js';
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />

       <div id="fullpage">
                  <Section0 />
                  <Section3 />
                  <Section1 />
                  <Section4 />
                  <Section2 />
                  <Section5 />


        </div>
      </div>
    );
  }
}

export default App;
