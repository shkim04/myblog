import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './aboutMe.css';

class AboutMe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMarker: {},
            showingInfoWindow: false,
            selectedPlace: {}
        }
        
        this.onMarkerClicked = this.onMarkerClicked.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onMarkerClicked(props, marker) {
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            selectedPlace: props,
        })
    }

    onClose(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    
    render() {
        return (
            <div id='about-me' className='content-main-box'>
                <div className='content-box'>
                    <div className='map-container clearfix'>
                        <div className='jeonju'>
                            <Map
                                google={this.props.google} 
                                zoom={12}
                                initialCenter={{ lat: 35.8317, lng: 127.1155}}
                            >
                                <Marker onClick={this.onMarkerClicked} name={'Where I come from'} />
                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    onClose={this.onClose}
                                >
                                    <div style={{fontWeight: '600'}}>{this.state.selectedPlace.name}</div>
                                </InfoWindow>
                            </Map>
                        </div>
                        <div className='wheretogo'>
                            <Map
                                google={this.props.google} 
                                zoom={2}
                                initialCenter={{ lat: 54.5260, lng: 15.2551}}
                            >
                                <Marker onClick={this.onMarkerClicked} name={'Where I will go'} />
                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    onClose={this.onClose}
                                >
                                    <div style={{fontWeight: '600'}}>{this.state.selectedPlace.name}</div>
                                </InfoWindow>
                            </Map>
                        </div>
                    </div>

                    <h3 id='about-me-title' className='sub-title'># People might ask</h3>
                    
                    <div id='question-box' className='clearfix'>
                        <div className='question-answer clearfix'>
                            <p className='questions'>Q. What is my name?</p>
                            <p className='answers'>- Seunghyun Kim</p>
                        </div>
                        <div className='question-answer clearfix'>
                            <p className='questions'>Q. How old am I?</p>
                            <p className='answers'>- Turned 30 in 2020</p>
                        </div>
                        <div className='question-answer clearfix'>
                            <p className='questions'>Q. Where do I come from?</p>
                            <p className='answers'>- A small city in Republic of Korea</p>
                        </div>
                        <div className='question-answer clearfix'>
                            <p className='questions'>Q. What did I do when I was in Korea?</p>
                            <p className='answers'>- Teacher Assistant / Quality Assurance engineer etc.</p>
                        </div>
                        <div className='question-answer clearfix'>
                            <p className='questions'>Q. What do I do for now?</p>
                            <p className='answers'>- Trying to be a good self-taught developer</p>
                        </div>
                        <div className='question-answer clearfix'>
                            <p className='questions'>Q. Words that I think suit me?</p>
                            <p className='answers'>- Friendly / Hilarious / Positive etc.</p>
                        </div>
                    </div>                        
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAMVYQRa-i4qu3H6shCSHeX4GR95i7oVNE')
})(AboutMe);