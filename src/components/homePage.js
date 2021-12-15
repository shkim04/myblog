import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './homePage.css';
import Me from '../assets/avatar_large.png';

export default class HomePage extends Component {
    
    render() {
        return (
            <div id='contents'>    
                <div className='main-start-section'>
                    <p className='main-section-text'>From 0 to 100</p>
                    <p className='main-section-text'>Self-taught Developer</p>
                </div>
                <div className='main-container clearfix'>
                    <div className='row-container clearfix'>
                        <NavLink to='/about_me' className='content'>
                            <div className='picture-container'>
                                <div className='overlay'><span className='text'>About Me</span></div>
                                <img id='about-me-picture' src={Me} alt='me' />
                            </div>
                        </NavLink>

                        <hr className='visual-divider-small'></hr>
                        
                        <NavLink to='/goal' className='content'>
                            <div className='picture-container'>
                                <div className='overlay'><span className='text'>Goal</span></div>
                                <i className="content-icon fas fa-route"></i>
                            </div>
                        </NavLink>

                        <hr className='visual-divider-small'></hr>

                        <NavLink to='/beginning' className='content'>
                            <div className='picture-container'>
                                <div className='overlay'><span className='text'>Beginning</span></div>
                                <i className="content-icon fas fa-code"></i>
                            </div>
                        </NavLink>
                    </div>
                    <hr className='visual-divider-large'></hr>
                    <div className='row-container clearfix'>
                        <NavLink to='/trips_tracker' className='content'>
                            <div className='picture-container'>
                                <div className='overlay'><span className='text'>Trips tracker</span></div>
                                <i className="content-icon fas fa-plane-departure"></i>
                            </div>
                        </NavLink>

                        <hr className='visual-divider-small'></hr>
                        
                        <NavLink to='/addition_practice' className='content'>
                            <div className='picture-container'>
                                <div className='overlay'><span className='text'>Addition Practice</span></div>
                                <i className="content-icon fas fa-plus-circle"></i>
                            </div>
                        </NavLink>

                        <hr className='visual-divider-small'></hr>
                        
                        <NavLink to='/' className='content'>
                            <div className='picture-container'>
                                <div className='overlay'><span className='text'>To be continued</span></div>
                                <i className="content-icon fas fa-arrow-right"></i>
                            </div>
                        </NavLink>
                    </div>
                </div>    
            </div>    
        )
    }
}
