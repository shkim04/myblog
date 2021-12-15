import React, { Component } from 'react';
import ProcessSection from './processSection.js';
import './goal.css';

export default class Goal extends Component {
    render() {
        return (
            <div id='goal' className='content-main-box'>
                <div className='content-box'>
                    <h3 id='goal-title' className='sub-title'># Goal</h3>
                    <ProcessSection />
                    <div className='goal-description'>
                        As a section of this blog says, my ultimate goal is to be a full-stack-developer by myself. I started learning how to program with a free platform that is so popular in tech, 
                        called freecodecamp. I have owed them a big one. Since a few months of starting, I have been so 
                        much into React. I decided to build a blog based on React. 
                        <br />
                        <br />
                        At first, it was not even easy to set up the environments for building such as Webpack, Babel, 
                        React to make them work together. But I have got a lot of help from anonymous people from google, stackoverflow etc.
                        I am fascinated by the idea that people in tech try to find solutions together online. 

                        So, I would like to be a developer that contributes to people who need help. 
                    </div>    
                </div>
            </div>
        )
    }
}
