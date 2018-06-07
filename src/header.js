import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="menu" style={{position: 'fixed', padding:'0 100px 0 0', width:'100%', zIndex: 999}} >
<nav class="navbar navbar-expand-sm bg-none navbar-light" style={{background:'transparent'}}>
<a class="navbar-brand" href="#">
{/*    <img src="http://wiki.myexperiment.org/images/MyExperiment_logo_5016x960_trans.png" alt="Logo" style={{width:'300px'}}/>
*/} 
                    <span class="home-h2">My Dish...</span>

 </a>

  <ul class="navbar-nav ml-auto">
    <li  data-menuanchor="anchor1" class="nav-item active">
      <a class="nav-link" href="#anchor1">Home</a>
    </li>
    <li data-menuanchor="anchor2" class="nav-item">
      <a class="nav-link" href="#anchor2">About</a>
    </li>
    <li data-menuanchor="anchor3" class="nav-item">
      <a class="nav-link" href="#anchor3">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Faq's</a>
    </li>
  </ul>
</nav>
</header>
    );
  }
}

export default Header;
