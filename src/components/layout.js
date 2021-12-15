import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutMe from './aboutMe';
import Goal from './goal';
import Beginning from './beginning';
import AboutBlog from './aboutBlog';
import NavBar from './navBar';
import AdditionPractice from './additionPractice';
import TripsTracker from './tripsTracker';

export default class Layout extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            bottom: 0
        }
        this.handleScrollAndResize = this.handleScrollAndResize.bind(this);
    }
      
    componentDidMount() {
        window.addEventListener('load', this.handleScrollAndResize);
        window.addEventListener('scroll', this.handleScrollAndResize);
        window.addEventListener('resize', this.handleScrollAndResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll load resize', this.handleScrollAndResize);
    }
    
    handleScrollAndResize() {
        let pageHeight = document.getElementById('root').offsetHeight;
        let footerHeight = document.getElementById('footer').offsetHeight;
        let windowHeight = window.innerHeight;
        let scrolled = document.body.scrollTop;
        
        if(pageHeight - footerHeight >= windowHeight) {
            if(pageHeight - footerHeight >= windowHeight + scrolled) {
                this.setState({
                    bottom: 0
                })
            } else if(pageHeight === windowHeight + scrolled) {
                this.setState({
                    bottom: footerHeight
                })
            } else {
                this.setState({
                    bottom: footerHeight - (pageHeight - windowHeight - scrolled)
                })
            }
        }
        else if(pageHeight > windowHeight && pageHeight < windowHeight + footerHeight) {
            this.setState({
                bottom: footerHeight - (pageHeight - windowHeight - scrolled)
            })
        } else {
            this.setState({
                bottom: footerHeight
            })
        }
    }
    render() {
        return (
            <div className='content-container'>
                <NavBar bottom={this.state.bottom} />
                <Route path='/about_me' component={AboutMe} />
                <Route path='/goal' component={Goal} />
                <Route path='/beginning' component={Beginning} />
                <Route path='/about_blog' component={AboutBlog} />
                <Route path='/trips_tracker' component={TripsTracker} />
                <Route path='/addition_practice' component={AdditionPractice} />
            </div>
        )
    }
}
