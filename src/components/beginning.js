import React, { Component } from 'react';
import Calculator from './calculator.js';
import CircleChart from './circleChart.js';
import './beginning.css';

export default class Beginning extends Component {
    
    render() {
        return (
            <div id='progress' className='content-main-box'>
                <div className='content-box'>
                    <Calculator />
                    <CircleChart />
                </div>
            </div>
        )
    }
}