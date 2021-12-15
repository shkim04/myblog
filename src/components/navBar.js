import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';
import ClickNavBar from './clickEventHandlerForNavBar';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handleResponsive = this.handleResponsive.bind(this);
        this.removeResponsiveBottom = this.removeResponsiveBottom.bind(this);
    }

    handleResponsive(id, responsive) {
        document.getElementById(id).classList.toggle(responsive)
    }
    removeResponsiveBottom(id, responsive) {
        document.getElementById(id).classList.remove(responsive);
    }    
    render() {    
        return (
            <div id='nav-bar-container' style={{bottom: this.props.bottom}}>
                <div className='sidenav-bar clearfix'>
                    <div className='sidenav-nested-bar-container'>
                        <div className='nav-bar-title-container'>
                            <NavLink to='/'>
                                <i className="fas fa-home"></i>
                                <span className='nav-bar-title'>Home</span>
                            </NavLink>
                        </div>
                    </div>
                    <div 
                        className='sidenav-nested-bar-container' 
                        id='info' 
                        tabIndex='-1' 
                        onClick={() => this.handleResponsive('info', 'bottom-nav-responsive')}
                    >
                        <div className='nav-bar-title-container'>
                            <i className="fas fa-info-circle"></i>
                            <span className='nav-bar-title'>Info</span>
                        </div>
                        <ClickNavBar 
                            id='info'
                            responsiveElement='bottom-nav-responsive'
                            className='sidenav-nested-bar clearfix' 
                            onClick={this.removeResponsiveBottom}
                        >
                            <div className='nav-bar-list'>
                                <NavLink to='/about_me' activeClassName='active'>
                                    About Me
                                </NavLink>
                            </div>
                            <div className='nav-bar-list'>
                                <NavLink to='/goal' activeClassName='active'>
                                    Goal
                                </NavLink>
                            </div>
                        </ClickNavBar>
                    </div>
                    <div 
                        className='sidenav-nested-bar-container' 
                        id='project' 
                        tabIndex='-1' 
                        onClick={() => this.handleResponsive('project', 'bottom-nav-responsive')}
                    >
                        <div className='nav-bar-title-container'>
                            <i className="fas fa-project-diagram"></i>
                            <span className='nav-bar-title'>Project</span>
                        </div>
                        <ClickNavBar
                            id='project'
                            responsiveElement='bottom-nav-responsive' 
                            className='sidenav-nested-bar clearfix' 
                            onClick={this.removeResponsiveBottom}
                        >
                            <div className='nav-bar-list'>
                                <NavLink to='/beginning' activeClassName='active'>   
                                    Beginning
                                </NavLink>
                            </div>
                            <div className='nav-bar-list'>
                                <NavLink to='/trips_tracker' activeClassName='active'>
                                    Trip Tracker
                                </NavLink>
                            </div>
                            <div className='nav-bar-list'>
                                <NavLink to='/addition_practice' activeClassName='active'>
                                    Addition Practice
                                </NavLink>
                            </div>
                        </ClickNavBar>
                    </div>
                </div>
            </div>
        )
    }
}

