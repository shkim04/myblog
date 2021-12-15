import React, { Component } from 'react';
import tripTracker from '../assets/trips-tracker.mp4';
import './tripsTracker.css';

export default class TripsTracker extends Component {
    render() {
        return (
            <div className='content-main-box'>
                <div className='content-box'>
                    <div className='video-container'>
                        <video 
                            src={tripTracker} 
                            controls
                            loop 
                            width="100%" 
                            autoPlay={true}
                        >
                        </video>    
                    </div>
                    <h3 className='sub-title'># How it does work</h3>
                    <div className='description-trip-tracker'>
                        <div className='comments-trip-tracker'>First of all, This app will be mounted on this blog later when I host my website with other hosting service.
                            You can record trips and mark them on google map based on your information. There is a bit of server-side scripting here. 
                            For more information about the code, Please visit this github page - 
                            <a href='https://github.com/shkim04/trips-tracker-app' className='github'><i>https://github.com/shkim04/trips-tracker-app</i></a>
                            <br />
                            <br />
                            Here's how you do it.
                        </div>
                        <p className='explanation-trip-tracker'>1) Find countries and cities</p>
                        <p className='explanation-trip-tracker'>2) Select the date of your trips</p>
                        <p className='explanation-trip-tracker'>3) Wrtie comments in description</p>
                        <p className='explanation-trip-tracker'>4) Add trip</p>
                        <p className='explanation-trip-tracker'>5) Now, you can see trips you made on google map</p>
                    </div>                       
                </div>
            </div>
        )
    }
}
