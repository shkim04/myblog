import React, { Component } from 'react';
import './processSection.css';

function Filler(props) {
    return (
        <div id='filler' style={{width:`${props.percentage}%`}} />
    )
}

function ProgressBar(props) {
    return (
        <div id='progress-bar'>
            <div className='progress-bar-container'>
                <Filler percentage={props.percentage} />
            </div>
            <div className='zero-to-hundred clearfix'>
                <span className='zero'>0</span>
                <span className='hundred'>Full-Stack Developer</span>
            </div>
        </div>
    )
}

export default class ProcessSection extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            percentage: 30
        } 
    }

    render() {
        return (
            <div id='process-section'>
                <div className='progress-bar-box'>
                    <ProgressBar percentage={this.state.percentage} />
                </div>
            </div>
        )
   }  
}