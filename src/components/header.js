import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.css';
import BlogLogo from '../assets/site_logo.png';
import ClickNavBar from './clickEventHandlerForNavBar';

export default class Header extends Component {
   constructor(props) {
      super(props);
      
      this.handleTopNavDropDown = this.handleTopNavDropDown.bind(this);
      this.removeResponsive = this.removeResponsive.bind(this);
   }
   
   handleTopNavDropDown(id, responsive) {
      document.getElementById(id).classList.toggle(responsive);
   }
   removeResponsive(id, responsive) {
      document.getElementById(id).classList.remove(responsive);
   }
   render() {
      return (
         <header className='header-container'>
            <div className='description'>
               <div className='site-name-container'>
                  <NavLink to='/'><img className='site-name' src={BlogLogo} alt='home' /></NavLink>
               </div>
               <div 
                  className='top-nav-bar' 
                  id='top-nav-bar' 
                  onClick={() => this.handleTopNavDropDown('top-nav-bar', 'top-nav-responsive')}
               >
                  <div className='menu'>
                     <button className='menu-btn'>
                        <i className="fas fa-bars"></i>
                     </button>
                     <ClickNavBar
                        id='top-nav-bar'
                        responsiveElement='top-nav-responsive' 
                        className='menu-content' 
                        onClick={this.removeResponsive}
                     >
                        <NavLink to='/about_blog'>About Blog</NavLink>
                        <a href='http://www.freecodecamp.org' alt='mentor-website'>freecodecamp.org</a>
                     </ClickNavBar>
                  </div>
               </div>
            </div>
         </header>
      )
   }
}
